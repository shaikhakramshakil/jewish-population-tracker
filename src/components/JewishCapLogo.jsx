import React from 'react';

export default function JewishCapLogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dome of the Kippah - Rich Blue */}
      <path 
        d="M2.5 15.5C2.5 9.14873 6.75329 4 12 4C17.2467 4 21.5 9.14873 21.5 15.5C21.5 15.7761 21.2761 16 21 16H3C2.72386 16 2.5 15.7761 2.5 15.5Z" 
        fill="#0066ff" 
        fillOpacity="0.85" 
        stroke="#38bdf8" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
      />
      {/* White Trim / Rim Line */}
      <path 
        d="M3 16C7.5 14.2 16.5 14.2 21 16" 
        stroke="#ffffff" 
        strokeWidth="1.8" 
        strokeLinecap="round"
      />
      {/* White Seams */}
      <path d="M12 4V8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8C10 10.5 8 13 6.5 15" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="1.5 1.5"/>
      <path d="M12 8C14 10.5 16 13 17.5 15" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="1.5 1.5"/>
      {/* White Star of David Icon at Center */}
      <polygon points="12,5.2 13.5,8.2 10.5,8.2" fill="#ffffff" />
      <polygon points="12,9.2 13.5,6.2 10.5,6.2" fill="#ffffff" />
    </svg>
  );
}
