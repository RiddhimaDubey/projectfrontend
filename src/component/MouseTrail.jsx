import React, { useEffect, useState } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails(prev => [...prev.slice(-8), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mouse-trail-container">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="trail-dot"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / trails.length * 0.6,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;