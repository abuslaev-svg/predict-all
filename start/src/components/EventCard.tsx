import React from 'react';
import { BettingButton } from './BettingButton';

interface EventCardProps {
  volume: string;
  endDate: string;
  title: string;
  description: string;
  chartImage: string;
  yesPercentage: number;
  noPercentage: number;
  showButtons?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  volume,
  endDate,
  title,
  description,
  chartImage,
  yesPercentage,
  noPercentage,
  showButtons = true,
}) => {
  return (
    <article className="min-w-60 flex-1 shrink basis-[0%] bg-[#141414] p-4 rounded-2xl hover:bg-[#1A1A1A] transition-colors">
      <div className="w-full font-normal">
        <div className="flex w-full items-center gap-[4px_12px] text-[13px] text-[#e5ffff] text-right leading-loose flex-wrap">
          <div className="text-[13px] font-normal leading-5 self-stretch my-auto">
            Volume: {volume}
          </div>
          <div className="text-[13px] font-normal leading-5 self-stretch my-auto">
            Ends: {endDate}
          </div>
        </div>
        <div className="min-h-[88px] w-full leading-5 mt-3">
          <h3 className="text-[#ECF9F9] text-base font-normal leading-5">
            {title}
          </h3>
          <p className="text-[#e5ffff] text-ellipsis whitespace-nowrap text-[13px] font-normal leading-5 flex-1 mt-2">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full text-base font-bold text-center leading-none pt-4">
        <img
          src={chartImage}
          className="aspect-[2.13] object-contain w-full"
          alt="Price chart"
        />
        <div className="flex w-full gap-2 flex-wrap mt-4">
          {showButtons ? (
            <>
              <BettingButton type="yes" percentage={yesPercentage} />
              <BettingButton type="no" percentage={noPercentage} />
            </>
          ) : (
            <>
              <div className="min-w-[104px] border shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[calc(12px_/_2] flex w-[140px] shrink h-1.5 gap-3 flex-1 basis-[0%] bg-[rgba(242,242,242,0.08)] p-4 rounded-xl border-solid border-[rgba(242,242,242,0.00)]" />
              <div className="min-w-[104px] border shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[calc(12px_/_2] flex w-[140px] shrink h-1.5 gap-3 flex-1 basis-[0%] bg-[rgba(242,242,242,0.08)] p-4 rounded-xl border-solid border-[rgba(242,242,242,0.00)]" />
            </>
          )}
        </div>
      </div>
    </article>
  );
};
