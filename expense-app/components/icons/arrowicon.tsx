import React from 'react';

interface ArrowIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ 
  size = 24, 
  className = '',
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ArrowIcon;