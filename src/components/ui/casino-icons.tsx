import React from 'react';

export const DiceIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" 
          fill="url(#diceGradient)" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <defs>
      <linearGradient id="diceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4af37"/>
        <stop offset="100%" stopColor="#ff8c00"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SlotIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect x="3" y="2" width="18" height="20" rx="2" 
          fill="url(#slotGradient)" stroke="currentColor" strokeWidth="2"/>
    <rect x="6" y="6" width="3" height="12" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="10.5" y="6" width="3" height="12" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="15" y="6" width="3" height="12" rx="1" fill="currentColor" opacity="0.3"/>
    <circle cx="7.5" cy="12" r="2" fill="#ff8c00"/>
    <circle cx="12" cy="12" r="2" fill="#d4af37"/>
    <circle cx="16.5" cy="12" r="2" fill="#ffc107"/>
    <defs>
      <linearGradient id="slotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2520"/>
        <stop offset="100%" stopColor="#1c1c1c"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CardIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect x="2" y="4" width="8" height="12" rx="2" 
          fill="url(#cardGradient1)" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="6" y="6" width="8" height="12" rx="2" 
          fill="url(#cardGradient2)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 10h2v2h-2z" fill="#d4af37"/>
    <path d="M10 14h2v2h-2z" fill="#ff8c00"/>
    <defs>
      <linearGradient id="cardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2a2520"/>
        <stop offset="100%" stopColor="#1c1c1c"/>
      </linearGradient>
      <linearGradient id="cardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4af37"/>
        <stop offset="100%" stopColor="#ff8c00"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TrophyIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="currentColor" strokeWidth="2"/>
    <path d="m18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 9h12v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9z" 
          fill="url(#trophyGradient)" stroke="currentColor" strokeWidth="2"/>
    <path d="m9 22h6v-3H9v3z" fill="currentColor"/>
    <circle cx="12" cy="12" r="2" fill="#ffc107"/>
    <defs>
      <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4af37"/>
        <stop offset="100%" stopColor="#ffc107"/>
      </linearGradient>
    </defs>
  </svg>
);

export const CoinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="9" 
            fill="url(#coinGradient)" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">$</text>
    <defs>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffc107"/>
        <stop offset="50%" stopColor="#d4af37"/>
        <stop offset="100%" stopColor="#ff8c00"/>
      </linearGradient>
    </defs>
  </svg>
);

export const StarIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
          fill="url(#starGradient)" stroke="currentColor" strokeWidth="1"/>
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffc107"/>
        <stop offset="100%" stopColor="#d4af37"/>
      </linearGradient>
    </defs>
  </svg>
);