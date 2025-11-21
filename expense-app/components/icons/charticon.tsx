import React from 'react';
interface ChartIconProps {
  size?: number;
  className?: string;
}


export const ChartIcon: React.FC<ChartIconProps> = ({ size = 24, className = '' }) => (
  <div className={`inline-flex items-center justify-center rounded-lg bg-green-100 p-3 ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3v18h18"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14l4-4 3 3 5-5"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ChartIcon