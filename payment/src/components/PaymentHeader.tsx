import React from 'react';

interface PaymentHeaderProps {
  onClose?: () => void;
}

export const PaymentHeader: React.FC<PaymentHeaderProps> = ({ onClose }) => {
  return (
    <header className="flex items-start gap-6 self-stretch">
      <h1 className="flex-[1_0_0] text-[#ECF9F9] text-[21px] font-normal leading-7">
        Choose payment method
      </h1>
      <button
        onClick={onClose}
        className="p-0 bg-transparent border-none cursor-pointer"
        aria-label="Close payment method selector"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="close-icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
            fill="#E6FFFF"
            fillOpacity="0.56"
          />
        </svg>
      </button>
    </header>
  );
};
