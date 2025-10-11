// src/components/menus/report/AudioControls.tsx
// Updated on: C1401 (Implement responsive hiding of controls using ResizeObserver.)
// Updated on: C1399 (Implement playback speed controls and restart-on-autoplay logic.)
// Updated on: C1398 (Refactor play/pause logic to be more direct and fix state synchronization issues.)
// Updated on: C1397 (Add volume and mute controls. Fix pause functionality.)
import React, { useRef, useEffect, useState } from 'react';
import { useReportStore } from '../../../state/reportStore';
import { useShallow } from 'zustand/react/shallow';
import { FaPlay, FaPause, FaRedo, FaVolumeUp, FaVolumeMute, FaSpinner } from 'react-icons/fa';
import { logInfo, logError } from '../../../logger';

const PLAYBACK_SPEEDS = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

const AudioControls: React.FC = () => {
  const {
    allPages, currentPageIndex, playbackStatus, autoplayEnabled,
    currentAudioUrl, currentAudioPageIndex, currentTime, duration,
    volume, isMuted, setVolume, toggleMute,
    setPlaybackStatus, setAutoplay, setCurrentAudio,
    setAudioTime, setAudioDuration, startSlideshow, stopSlideshow,
    playbackSpeed, setPlaybackSpeed,
  } = useReportStore(useShallow(state => ({
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
    setVolume: state.setVolume,
    toggleMute: state.toggleMute,
    setPlaybackStatus: state.setPlaybackStatus,
    setAutoplay: state.setAutoplay,
    setCurrentAudio: state.setCurrentAudio,
    setAudioTime: state.setAudioTime,
    setAudioDuration: state.setAudioDuration,
    startSlideshow: state.startSlideshow,
    stopSlideshow: state.stopSlideshow,
    playbackSpeed: state.playbackSpeed,
    setPlaybackSpeed: state.setPlaybackSpeed,
  })));

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioUrlRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null); // C1401
  const [containerWidth, setContainerWidth] = useState(0); // C1401

  const currentPage = allPages[currentPageIndex];

  // C1401: Use ResizeObserver to track container width for responsive UI
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }
    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const generateAndPlayAudio = async (restart = false) => {
    if (!currentPage) return;

    setPlaybackStatus('generating');
    const textToNarrate = `${currentPage.pageTitle}. ${currentPage.tldr}. ${currentPage.content}`;

    try {
      const response = await fetch('/api/tts/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToNarrate }),
      });

      if (!response.ok) {
        throw new Error(`TTS server failed with status: ${response.status}`);
      }

      const audioBlob = await response.blob();
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
      const newUrl = URL.createObjectURL(audioBlob);
      audioUrlRef.current = newUrl;
      setCurrentAudio(newUrl, currentPageIndex);
      if (restart && audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } catch (error) {
      logError('[AudioControls]', 'Failed to generate audio', error);
      setPlaybackStatus('error');
    }
  };

  useEffect(() => {
    if (autoplayEnabled && playbackStatus === 'idle' && currentAudioPageIndex !== currentPageIndex) {
      generateAndPlayAudio();
    }
  }, [currentPageIndex, autoplayEnabled, playbackStatus, currentAudioPageIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (currentAudioUrl && audio.src !== currentAudioUrl) {
      audio.src = currentAudioUrl;
      audio.load();
      audio.play().catch(e => logError('[AudioControls]', 'Autoplay failed', e));
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
    const handleError = () => { logError('[AudioControls]', 'Audio playback error'); setPlaybackStatus('error'); };

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
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  const handlePlayPause = () => {
    stopSlideshow(true);
    const audio = audioRef.current;
    if (!audio) return;

    if (playbackStatus === 'playing' || playbackStatus === 'buffering') {
      audio.pause();
    } else if (playbackStatus === 'paused') {
      audio.play().catch(e => logError('[AudioControls]', 'Resume play failed', e));
    } else if (playbackStatus === 'idle' || playbackStatus === 'error') {
      generateAndPlayAudio();
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleAutoplayChange = (checked: boolean) => {
    setAutoplay(checked);
    if (checked) {
      // C1399: Restart logic
      generateAndPlayAudio(true); // true to force restart
    } else {
      stopSlideshow(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const containerStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0', fontSize: '10px', color: '#ccc', width: '100%' };
  const buttonStyle: React.CSSProperties = { background: 'none', border: '1px solid #777', color: '#ccc', fontSize: '14px', cursor: 'pointer', padding: '5px', borderRadius: '4px', flexShrink: 0 };
  const sliderStyle: React.CSSProperties = { flexGrow: 1, cursor: 'pointer', minWidth: '50px' };
  const timeStyle: React.CSSProperties = { minWidth: '40px', textAlign: 'center', flexShrink: 0 };
  const statusStyle: React.CSSProperties = { fontStyle: 'italic', minWidth: '70px', textAlign: 'center', flexShrink: 0 };
  const speedSelectStyle: React.CSSProperties = { background: '#333', border: '1px solid #666', color: 'white', padding: '3px', fontSize: '9px', fontFamily: 'inherit', marginLeft: '5px', flexShrink: 0 };
  const volumeSliderStyle: React.CSSProperties = { width: '80px', cursor: 'pointer', flexShrink: 0 };

  const isPlaying = playbackStatus === 'playing' || playbackStatus === 'buffering';

  return (
    <div style={containerStyle} ref={containerRef}>
      <audio ref={audioRef} />
      <button style={buttonStyle} onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button style={buttonStyle} onClick={handleRestart} title="Restart"><FaRedo /></button>

      <span style={timeStyle}>{formatTime(currentTime)}</span>

      {/* C1401: Hide seek bar on very small widths */}
      {containerWidth > 450 && (
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          style={sliderStyle}
          disabled={playbackStatus === 'generating' || playbackStatus === 'idle'}
        />
      )}

      <span style={timeStyle}>{formatTime(duration)}</span>

      {/* C1401: Hide volume controls on small widths */}
      {containerWidth > 650 && (
        <>
          <button style={buttonStyle} onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={volumeSliderStyle}
            title={`Volume: ${Math.round(volume * 100)}%`}
          />
        </>
      )}


      <div style={statusStyle}>
        {playbackStatus === 'generating' && <FaSpinner className="animate-spin" />}
        {playbackStatus === 'buffering' && 'Buffering...'}
        {playbackStatus === 'error' && 'Error!'}
      </div>

      <select
        value={playbackSpeed}
        onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
        style={speedSelectStyle}
        title="Playback Speed"
      >
        {PLAYBACK_SPEEDS.map(speed => (
          <option key={speed} value={speed}>{speed.toFixed(2)}x</option>
        ))}
      </select>

      {/* C1401: Hide autoplay on medium widths */}
      {containerWidth > 550 && (
        <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', flexShrink: 0 }}>
          <input type="checkbox" checked={autoplayEnabled} onChange={(e) => handleAutoplayChange(e.target.checked)} />
          Autoplay
        </label>
      )}
    </div>
  );
};

export default AudioControls;