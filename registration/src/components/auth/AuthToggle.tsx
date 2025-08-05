import React from 'react';

interface AuthToggleProps {
  activeMode: 'registration' | 'login';
  onModeChange: (mode: 'registration' | 'login') => void;
}

export const AuthToggle: React.FC<AuthToggleProps> = ({ activeMode, onModeChange }) => {
  return (
    <div className="flex h-10 items-start gap-1 self-stretch backdrop-blur-sm relative bg-[rgba(242,242,242,0.07)] p-1 rounded-xl max-md:h-9 max-md:gap-[3px] max-md:p-[3px] max-sm:h-8 max-sm:gap-0.5 max-sm:p-0.5">
      <button
        type="button"
        onClick={() => onModeChange('registration')}
        className={`flex justify-center items-start gap-0.5 flex-[1_0_0] self-stretch relative cursor-pointer px-3 py-1 rounded-lg max-md:px-2.5 max-md:py-[3px] max-sm:px-2 max-sm:py-0.5 transition-colors duration-200 ${
          activeMode === 'registration' ? 'bg-[rgba(242,242,242,0.1)]' : 'hover:bg-[rgba(242,242,242,0.05)]'
        }`}
        aria-pressed={activeMode === 'registration'}
      >
        <span
          className={`flex-[1_0_0] self-stretch text-center text-base font-normal leading-5 relative max-md:text-[15px] max-md:leading-[18px] max-sm:text-sm max-sm:leading-4 ${
            activeMode === 'registration' ? 'text-[#ECF9F9]' : 'text-[rgba(229,255,255,0.56)]'
          }`}
        >
          Registration
        </span>
      </button>
      <button
        type="button"
        onClick={() => onModeChange('login')}
        className={`flex justify-center items-start gap-0.5 flex-[1_0_0] self-stretch relative cursor-pointer px-3 py-1 rounded-lg max-md:px-2.5 max-md:py-[3px] max-sm:px-2 max-sm:py-0.5 transition-colors duration-200 ${
          activeMode === 'login' ? 'bg-[rgba(242,242,242,0.1)]' : 'hover:bg-[rgba(242,242,242,0.05)]'
        }`}
        aria-pressed={activeMode === 'login'}
      >
        <span
          className={`flex-[1_0_0] self-stretch text-center text-base font-normal leading-5 relative max-md:text-[15px] max-md:leading-[18px] max-sm:text-sm max-sm:leading-4 ${
            activeMode === 'login' ? 'text-[#ECF9F9]' : 'text-[rgba(229,255,255,0.56)]'
          }`}
        >
          Login
        </span>
      </button>
    </div>
  );
};
