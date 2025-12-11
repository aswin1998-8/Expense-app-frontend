import React from "react";

type Props = {
  size?: number;
  className?: string;
  title?: string;
};

const GoogleIcon: React.FC<Props> = ({ size = 14, className, title = "Google" }) => {
  return (
    <svg
      width={size}
      height={(size * 544.3) / 533.5} // preserve aspect ratio of the original artwork
      viewBox="0 0 533.5 544.3"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        fill="#4285F4"
        d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.5H272v95.6h146.9c-6.3 34-25.2 62.8-53.7 82v68.4h86.6c50.6-46.6 80.7-115.4 80.7-195.5z"
      />
      <path
        fill="#34A853"
        d="M272 544.3c72.6 0 133.6-24 178.2-65.2l-86.6-68.4c-24 16.1-54.7 25.6-91.6 25.6-70.6 0-130.4-47.6-151.8-111.6H32.4v70.1C75.6 482.5 167.8 544.3 272 544.3z"
      />
      <path
        fill="#FBBC05"
        d="M120.2 323.7c-8.6-25.6-8.6-53 0-78.6V174.9H32.4c-36.9 73.8-36.9 162.1 0 235.9l87.8-70.1z"
      />
      <path
        fill="#EA4335"
        d="M272 107.7c39.5 0 75 13.6 102.9 40.4l77.1-77.1C405.2 23.5 343.2 0 272 0 167.8 0 75.6 61.8 32.4 174.9l87.8 70.1C141.6 155.3 201.4 107.7 272 107.7z"
      />
    </svg>
  );
};

export default GoogleIcon;
