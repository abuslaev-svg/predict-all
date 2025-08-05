import React, { useState } from 'react';

interface MenuItem {
  label: string;
  count: number;
  isActive?: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'All markets', count: 142, isActive: true },
  { label: 'Economic Predictions', count: 12 },
  { label: 'Sports', count: 42 },
  { label: 'Politics', count: 37 },
];

export const NavigationMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState('All markets');

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <nav className="self-stretch flex min-w-60 gap-1 text-base font-normal leading-none flex-wrap my-auto max-md:max-w-full">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleItemClick(item.label)}
          className={`items-center flex gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-[#2A2A2A] ${
            activeItem === item.label ? 'bg-[#1F1F1F]' : ''
          }`}
          aria-pressed={activeItem === item.label}
        >
          <span className="text-[#ECF9F9] text-base font-normal leading-5 self-stretch my-auto">
            {item.label}
          </span>
          <span className="text-[#e5ffff] text-base font-normal leading-5 self-stretch my-auto">
            {item.count}
          </span>
        </button>
      ))}
    </nav>
  );
};
