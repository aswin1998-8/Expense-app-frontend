import React from 'react';

interface PieCharIconProps {
  size?: number;
  className?: string;
}

export const PieChartIcon: React.FC<PieCharIconProps> = ({ size = 24, className = '' }) => (
  <div className={`inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="2" />
      <path
        d="M12 3v9l6.364 3.636"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L18.364 15.636A9 9 0 0112 21V12z"
        fill="#3b82f6"
        opacity="0.3"
      />
    </svg>
  </div>
);
export default PieChartIcon