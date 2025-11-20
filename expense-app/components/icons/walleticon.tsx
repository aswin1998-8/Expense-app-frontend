const WalletIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded blue background */}
      <rect
        width="36"
        height="36"
        rx="8"
        fill="#2563eb"
      />
      
      {/* Main wallet body - white rounded rectangle */}
      <rect
        x="11"
        y="12"
        width="14"
        height="12"
        rx="2"
        fill="white"
      />
      
      {/* Card slot cutout - rectangular hole on the right side */}
      <rect
        x="18"
        y="16"
        width="5"
        height="4"
        rx="0.5"
        fill="#2563eb"
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
      
      {/* Small circle detail (button/snap) */}
      <circle cx="20.5" cy="18" r="0.5" fill="white">
        <animate
          attributeName="r"
          values="0.5;0.7;0.5"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
  
  export default WalletIcon;