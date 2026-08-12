import React, { useEffect, useRef } from 'react';
import userHavaNagila from '../assets/Nava Hagila Sound Effect (Jewish meme song) - SFK Produkcija (128k).mp3';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(userHavaNagila);
    audio.loop = true;
    audio.volume = 0.4; // Mid-level volume
    audioRef.current = audio;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };

    // Attempt immediate play on mount
    playAudio();

    // Trigger on any interaction on landing page
    const handleInteraction = () => {
      playAudio();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('pointerdown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('pointerdown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('pointerdown', handleInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null; // Invisible background component
}
