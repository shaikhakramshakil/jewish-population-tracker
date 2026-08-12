import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';
import userHavaNagila from '../assets/Nava Hagila Sound Effect (Jewish meme song) - SFK Produkcija (128k).mp3';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(userHavaNagila);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <button 
      className={`feel-jewish-btn ${isPlaying ? 'playing' : ''}`}
      onClick={toggleAudio}
      title="Play/Pause Jewish Anthem"
    >
      {isPlaying ? <Pause size={16} /> : <Music size={16} />}
      <span>{isPlaying ? 'PAUSE' : 'FEEL JEWISH'}</span>
    </button>
  );
}
