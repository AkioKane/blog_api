import React, { useState, useRef } from 'react';
import './StarButton.css';

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
}

interface StarButtonProps {
  text: string;
}

const StarButton: React.FC<StarButtonProps> = ({ text }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const spawnParticle = () => {
    const duration = Math.random() * 0.6 + 0.6;
    const id = Math.random();

    const newParticle: Particle = {
      id: id,
      left: Math.random() * 100 + '%',
      size: Math.random() * 4 + 2,
      duration: duration,
    };

    setParticles((prev) => [...prev, newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, duration * 1000);
  };

  const handleMouseEnter = () => {
    timerRef.current = setInterval(spawnParticle, 70);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <button 
      className="sparkle-button" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <span className="button-content">{text}</span>
      <div className="particle-container">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
    </button>
  );
};

export default StarButton;
