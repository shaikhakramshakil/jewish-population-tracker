import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Music, Pause } from 'lucide-react';
import userHavaNagila from '../assets/Nava Hagila Sound Effect (Jewish meme song) - SFK Produkcija (128k).mp3';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [coinExplosions, setCoinExplosions] = useState([]);

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

  const triggerCoinRain = () => {
    const coinEmojis = ['🪙', '💰', '✨', '💵', '🪙'];
    const newCoins = Array.from({ length: 40 }).map((_, i) => ({
      id: Date.now() + i,
      emoji: coinEmojis[i % coinEmojis.length],
      left: Math.random() * 100,
      size: Math.random() * 28 + 20,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 0.8,
      rotation: Math.random() * 360,
    }));

    setCoinExplosions(prev => [...prev, ...newCoins]);

    // Cleanup coins after animation
    setTimeout(() => {
      setCoinExplosions(prev => prev.filter(c => !newCoins.includes(c)));
    }, 3500);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      triggerCoinRain();
    }
  };

  return (
    <>
      {/* Coin Rain Shower when Feel Jewish is clicked */}
      <div className="coin-shower-container" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }}>
        {coinExplosions.map((coin) => (
          <span
            key={coin.id}
            className="thrown-coin"
            style={{
              left: `${coin.left}%`,
              fontSize: `${coin.size}px`,
              animationDuration: `${coin.duration}s`,
              animationDelay: `${coin.delay}s`,
              transform: `rotate(${coin.rotation}deg)`,
            }}
          >
            {coin.emoji}
          </span>
        ))}
      </div>

      <button 
        className={`feel-jewish-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleAudio}
        title="Play/Pause Jewish Anthem"
      >
        {isPlaying ? <Pause size={16} /> : <Music size={16} />}
        <span>{isPlaying ? 'PAUSE' : 'FEEL JEWISH'}</span>
      </button>
    </>
  );
}
