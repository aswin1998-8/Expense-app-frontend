import React from "react";

type Props = {
  size?: number;
};

const CheckIcon: React.FC<Props> = ({ size = 14 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#2ECC71" />
      <path
        d="M16.5 9L10.5 15L7.5 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
