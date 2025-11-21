import React from 'react';
interface MobileIconProps {
  size?: number;
  className?: string;
}

export const MobileIcon: React.FC<MobileIconProps> = ({ size = 24, className = '' }) => (
  <div className={`inline-flex items-center justify-center rounded-lg bg-green-100 p-3 ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="2"
        width="12"
        height="20"
        rx="2"
        stroke="#10b981"
        strokeWidth="2"
      />
      <path
        d="M12 18h.01"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);
export default MobileIcon