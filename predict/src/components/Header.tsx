import React from 'react';

interface MenuItemProps {
  label: string;
  count: number;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, count, isActive = false }) => (
  <div className={`flex items-center gap-3 relative px-4 py-3 rounded-lg ${
    isActive ? 'bg-[#1F1F1F]' : ''
  }`}>
    <div className="text-[#ECF9F9] text-base font-normal leading-5 relative">
      {label}
    </div>
    <div className="text-[rgba(229,255,255,0.56)] text-base font-normal leading-5 relative">
      {count}
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="flex w-full max-w-[1400px] justify-between items-center absolute h-11 left-14 top-10">
      <div className="flex items-center relative">
        <div className="flex justify-center items-center gap-2.5 relative pr-6">
          <div className="text-[#ECF9F9] text-2xl font-bold leading-5 relative">
            LOGO
          </div>
        </div>
        <nav className="flex items-start gap-1 relative">
          <MenuItem label="All markets" count={142} isActive={true} />
          <MenuItem label="Economic Predictions" count={12} />
          <MenuItem label="Sports" count={42} />
          <div className="flex items-center gap-3 relative px-4 py-3 rounded-lg">
            <div className="text-[rgba(229,255,255,0.56)] text-base font-normal leading-5 relative">
              37
            </div>
          </div>
          <MenuItem label="Politics" count={28} />
        </nav>
      </div>
      <div className="flex items-center gap-2.5 relative pl-6">
        <div className="flex items-center gap-2.5 border relative bg-[rgba(242,242,242,0.08)] p-2.5 rounded-[50px] border-solid border-[rgba(242,242,242,0.00)]">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.9999 8C17.9999 11.3137 15.3136 14 11.9999 14C8.68618 14 5.99989 11.3137 5.99989 8C5.99989 4.68629 8.68618 2 11.9999 2C15.3136 2 17.9999 4.68629 17.9999 8ZM15.9999 8C15.9999 10.2091 14.209 12 11.9999 12C9.79075 12 7.99989 10.2091 7.99989 8C7.99989 5.79086 9.79075 4 11.9999 4C14.209 4 15.9999 5.79086 15.9999 8Z" fill="#ECF9F9"/>
              <path d="M19.8797 21.1652C20.0089 21.6143 20.3787 22 20.846 22C21.4833 22 22.0127 21.4766 21.867 20.8562C21.0871 17.5343 16.9663 15 11.9999 15C7.03351 15 2.91271 17.5343 2.13274 20.8562C1.98707 21.4766 2.51649 22 3.15374 22C3.62106 22 3.99084 21.6143 4.12008 21.1652C4.36514 20.3137 4.99288 19.4467 6.07575 18.6887C7.51023 17.6846 9.59849 17 11.9999 17C14.4013 17 16.4896 17.6846 17.924 18.6887C19.0069 19.4467 19.6346 20.3137 19.8797 21.1652Z" fill="#ECF9F9"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
