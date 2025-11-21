import React from 'react';
interface LockIconProps {
  size?: number;
  className?: string;
}

export const LockIcon: React.FC<LockIconProps> = ({ size = 24, className = '' }) => (
  <div className={`inline-flex items-center justify-center rounded-lg bg-purple-100 p-3 ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="#9333ea"
        strokeWidth="2"
      />
      <path
        d="M8 11V7a4 4 0 118 0v4"
        stroke="#9333ea"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16" r="1.5" fill="#9333ea" />
    </svg>
  </div>
);
export default LockIcon