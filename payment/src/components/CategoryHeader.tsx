import React from 'react';

interface CategoryHeaderProps {
  title: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-2.5 self-stretch px-4 py-2">
      <h3 className="text-[#B1B1B1] text-[13px] font-bold leading-4 tracking-[0.52px] uppercase">
        {title}
      </h3>
    </div>
  );
};
