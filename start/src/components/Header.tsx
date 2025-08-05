import React from 'react';
import { NavigationMenu } from './NavigationMenu';

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
      <div className="self-stretch flex min-w-60 items-center flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch flex items-center gap-2.5 text-2xl text-[#ECF9F9] font-bold whitespace-nowrap leading-none justify-center my-auto pr-6">
          <div className="text-[#ECF9F9] leading-5 self-stretch my-auto">
            LOGO
          </div>
        </div>
        <NavigationMenu />
      </div>
      <div className="self-stretch flex items-center gap-2.5 w-[68px] my-auto pl-6">
        <button 
          className="items-center border self-stretch flex w-11 gap-2.5 h-11 bg-[rgba(242,242,242,0.08)] my-auto p-2.5 rounded-[50px] border-solid border-[rgba(242,242,242,0.00)] hover:bg-[rgba(242,242,242,0.12)] transition-colors"
          aria-label="User profile"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c10419f7d51544fc7f1d084c123f90c8e3c2b362?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Profile"
          />
        </button>
      </div>
    </header>
  );
};
