import React from 'react';

export const StarsBackground = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.animationDelay}s`,
          }}
        >
          <svg
            width={star.size * 4}
            height={star.size * 4}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: star.opacity }}
          >
            <path
              d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
              fill="#d4af37"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};