
  /*
  Cycle 30: Fix exhaustive-deps warning.
  - Added `setGenericPlaybackStatus` to the `useEffect` dependency array.
  */

// src/components/global/GlobalAudioPlayer.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import { useReportState, useReportStore } from '@/stores/reportStore';

const GlobalAudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { genericAudioUrl, genericPlaybackStatus } = useReportState(state => ({
        genericAudioUrl: state.genericAudioUrl,
        genericPlaybackStatus: state.genericPlaybackStatus,
    }));
    const { setGenericPlaybackStatus } = useReportStore.getState();

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            setGenericPlaybackStatus('idle');
        };
        const handlePause = () => {
            // This handles the case where the user pauses via browser controls
            if (genericPlaybackStatus === 'playing') {
                setGenericPlaybackStatus('paused');
            }
        };
        const handlePlay = () => {
            if (genericPlaybackStatus !== 'playing') {
                setGenericPlaybackStatus('playing');
            }
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('play', handlePlay);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('play', handlePlay);
        };
    }, [genericPlaybackStatus, setGenericPlaybackStatus]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (genericAudioUrl) {
            if (audio.src !== genericAudioUrl) {
                audio.src = genericAudioUrl;
            }
            audio.play().catch(e => {
                console.error("Error playing arbitrary audio:", e);
                setGenericPlaybackStatus('error');
            });
        } else {
            audio.pause();
            audio.src = '';
        }
    }, [genericAudioUrl, setGenericPlaybackStatus]);
    
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (genericPlaybackStatus === 'playing' && audio.paused) {
            audio.play().catch(e => console.error("Error resuming play:", e));
        } else if (genericPlaybackStatus !== 'playing' && !audio.paused) {
            audio.pause();
        }

    }, [genericPlaybackStatus]);

    // This component renders no visible UI
    return <audio ref={audioRef} />;
};

export default GlobalAudioPlayer;