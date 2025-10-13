{
  /*
  Cycle 32: Fix exhaustive-deps warning.
  - Added `currentPageIndex` to the `useCallback` dependency array for `generateAndPlayAudio`.
  Cycle 30: Fix exhaustive-deps warnings.
  - Wrapped `generateAndPlayAudio` in `useCallback` and added it to the dependency array.
  - Added `setAudioDuration`, `setAudioTime`, and `setPlaybackStatus` to the second `useEffect` dependency array.
  */
}
// src/components/report-viewer/AudioControls.tsx
'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import { useReportStore, useReportState } from '@/stores/reportStore';
import { FaPlay, FaPause, FaRedo, FaVolumeUp, FaVolumeMute, FaSpinner } from 'react-icons/fa';

const PLAYBACK_SPEEDS = [0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

const AudioControls: React.FC = () => {
  const {
    allPages, currentPageIndex, playbackStatus, autoplayEnabled,
    currentAudioUrl, currentAudioPageIndex, currentTime, duration,
    volume, isMuted, playbackSpeed,
  } = useReportState(state => ({
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
    playbackStatus: state.playbackStatus,
    autoplayEnabled: state.autoplayEnabled,
    currentAudioUrl: state.currentAudioUrl,
    currentAudioPageIndex: state.currentAudioPageIndex,
    currentTime: state.currentTime,
    duration: state.duration,
    volume: state.volume,
    isMuted: state.isMuted,
    playbackSpeed: state.playbackSpeed,
  }));
  
  const {
    setVolume, toggleMute, setPlaybackStatus, setAutoplay,
    setCurrentAudio, setAudioTime, setAudioDuration,
    setPlaybackSpeed, stopSlideshow
  } = useReportStore.getState();

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioUrlRef = useRef<string | null>(null);
  const currentPage = allPages[currentPageIndex];

  const generateAndPlayAudio = useCallback(async (restart = false) => {
    if (!currentPage || !currentPage.pageTitle) {
      console.warn('[AudioControls] Attempted to generate audio with no current page or title.');
      return;
    };

    setPlaybackStatus('generating');
    const textToNarrate = `${currentPage.pageTitle}. ${currentPage.content}`;

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToNarrate }),
      });

      if (!response.ok) throw new Error(`TTS server failed with status: ${response.status}`);

      const audioBlob = await response.blob();
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      
      const newUrl = URL.createObjectURL(audioBlob);
      audioUrlRef.current = newUrl;
      setCurrentAudio(newUrl, currentPageIndex);
      if (restart && audioRef.current) audioRef.current.currentTime = 0;
    } catch (error) {
      console.error('[AudioControls] Failed to generate audio', error);
      setPlaybackStatus('error');
    }
  }, [currentPage, setCurrentAudio, setPlaybackStatus, currentPageIndex]);

  useEffect(() => {
    if (autoplayEnabled && playbackStatus === 'idle' && currentAudioPageIndex !== currentPageIndex) {
      generateAndPlayAudio();
    }
  }, [currentPageIndex, autoplayEnabled, playbackStatus, currentAudioPageIndex, generateAndPlayAudio]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (currentAudioUrl && audio.src !== currentAudioUrl) {
      audio.src = currentAudioUrl;
      audio.load();
      // C28 FIX: Force set playbackRate on new audio source to ensure it's not reset.
      audio.playbackRate = useReportStore.getState().playbackSpeed;
      audio.play().catch(e => console.error('[AudioControls] Autoplay failed', e));
    }
  }, [currentAudioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = isMuted;
    audio.playbackRate = playbackSpeed;
  }, [volume, isMuted, playbackSpeed]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaybackStatus('playing');
    const handlePause = () => setPlaybackStatus('paused');
    const handleEnded = () => setPlaybackStatus('idle');
    const handleTimeUpdate = () => setAudioTime(audio.currentTime);
    const handleLoadedMetadata = () => setAudioDuration(audio.duration);
    const handleWaiting = () => setPlaybackStatus('buffering');
    const handleError = () => { console.error('[AudioControls] Audio playback error'); setPlaybackStatus('error'); };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('playing', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('playing', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    };
  }, [setAudioDuration, setAudioTime, setPlaybackStatus]);

  const handlePlayPause = () => {
    stopSlideshow(true);
    const audio = audioRef.current;
    if (!audio) return;

    if (playbackStatus === 'playing' || playbackStatus === 'buffering') audio.pause();
    else if (playbackStatus === 'paused') audio.play().catch(e => console.error('[AudioControls] Resume play failed', e));
    else if (playbackStatus === 'idle' || playbackStatus === 'error') generateAndPlayAudio();
  };

  const handleRestart = () => { if (audioRef.current) audioRef.current.currentTime = 0; };
  const handleAutoplayChange = (checked: boolean) => {
    setAutoplay(checked);
    if (checked) generateAndPlayAudio(true);
  };
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value); };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const isPlaying = playbackStatus === 'playing' || playbackStatus === 'buffering';

  return (
    <div className="flex items-center gap-2 px-1 py-1 text-xs text-muted-foreground w-full">
      <audio ref={audioRef} />
      
      {/* C28: Moved Autoplay checkbox to the left */}
      <label className={`flex items-center gap-2 cursor-pointer border rounded-md px-3 py-1 text-xs font-semibold transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${autoplayEnabled ? 'bg-primary/20 border-primary' : 'border-border'}`}>
        <input type="checkbox" checked={autoplayEnabled} onChange={(e) => handleAutoplayChange(e.target.checked)} className="h-4 w-4 accent-primary" />
        Autoplay
      </label>

      <button className="btn-report-sm" onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="btn-report-sm" onClick={handleRestart} title="Restart"><FaRedo /></button>

      <span className="min-w-[40px] text-center">{formatTime(currentTime)}</span>
      
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={currentTime}
        onChange={handleSeek}
        className="flex-grow cursor-pointer"
        disabled={playbackStatus === 'generating' || playbackStatus === 'idle'}
      />

      <span className="min-w-[40px] text-center">{formatTime(duration)}</span>

      <button className="btn-report-sm" onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-20 cursor-pointer"
        title={`Volume: ${Math.round(volume * 100)}%`}
      />

      <div className="italic min-w-[70px] text-center">
        {playbackStatus === 'generating' && <FaSpinner className="animate-spin inline-block" />}
        {playbackStatus === 'buffering' && 'Buffering...'}
        {playbackStatus === 'error' && 'Error!'}
      </div>

      <select
        value={playbackSpeed}
        onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
        className="bg-muted border rounded p-1 text-xs"
        title="Playback Speed"
      >
        {PLAYBACK_SPEEDS.map(speed => (
          <option key={speed} value={speed}>{speed.toFixed(2)}x</option>
        ))}
      </select>
    </div>
  );
};

export default AudioControls;