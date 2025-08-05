import React from 'react';

interface PredictionCardProps {
  title: string;
  description: string;
  volume: string;
  endDate: string;
  yesPercentage: number;
  noPercentage: number;
}

const PredictionCard: React.FC<PredictionCardProps> = ({
  title,
  description,
  volume,
  endDate,
  yesPercentage,
  noPercentage
}) => {
  return (
    <article className="flex flex-col items-start flex-[1_0_0] relative bg-[#141414] p-4 rounded-2xl">
      <div className="flex max-h-[124px] flex-col items-start gap-3 self-stretch relative">
        <div className="flex items-center content-center gap-[4px_12px] self-stretch flex-wrap relative">
          <div className="text-[rgba(229,255,255,0.56)] text-right text-[13px] font-normal leading-5 relative">
            Volume: {volume}
          </div>
          <div className="text-[rgba(229,255,255,0.56)] text-right text-[13px] font-normal leading-5 relative">
            Ends: {endDate}
          </div>
        </div>
        <div className="flex h-[88px] flex-col items-start gap-2 self-stretch relative">
          <h3 className="self-stretch text-[#ECF9F9] text-base font-normal leading-5 relative">
            {title}
          </h3>
          <p className="flex-[1_0_0] self-stretch overflow-hidden text-[rgba(229,255,255,0.56)] text-ellipsis whitespace-nowrap text-[13px] font-normal leading-5 relative">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch relative pt-4">
        <div className="flex items-start content-start gap-2 self-stretch flex-wrap relative">
          <button className="flex h-10 min-w-[104px] items-center gap-3 flex-[1_0_0] border shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[6px] relative bg-[rgba(242,242,242,0.08)] p-4 rounded-xl border-solid border-[rgba(242,242,242,0.00)] hover:bg-[rgba(242,242,242,0.12)] transition-colors">
            <div className="flex flex-col items-start gap-1 flex-[1_0_0] relative p-0">
              <div className="self-stretch text-[#38D67A] text-center text-base font-bold leading-5 relative">
                Yes · {yesPercentage}%
              </div>
            </div>
          </button>
          <button className="flex h-10 min-w-[104px] items-center gap-3 flex-[1_0_0] border shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[6px] relative bg-[rgba(242,242,242,0.08)] p-4 rounded-xl border-solid border-[rgba(242,242,242,0.00)] hover:bg-[rgba(242,242,242,0.12)] transition-colors">
            <div className="flex flex-col items-start gap-1 flex-[1_0_0] relative p-0">
              <div className="self-stretch text-[#FF5765] text-center text-base font-bold leading-5 relative">
                No · {noPercentage}%
              </div>
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PredictionCard;
