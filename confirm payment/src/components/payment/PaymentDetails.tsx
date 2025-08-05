import React from 'react';

interface PaymentDetail {
  key: string;
  value: string;
}

interface PaymentDetailsProps {
  details: PaymentDetail[];
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({ details }) => {
  return (
    <section 
      className="flex flex-col items-start self-stretch relative"
      aria-labelledby="payment-details-title"
    >
      <h2 id="payment-details-title" className="sr-only">Payment Details</h2>
      <dl className="w-full">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-start gap-1 self-stretch relative px-0 py-2 border-b-[rgba(229,255,251,0.10)] border-b border-solid"
          >
            <div className="flex max-w-[148px] items-start relative px-0 py-0.5 max-sm:max-w-[120px]">
              <dt className="max-w-40 text-[rgba(229,255,255,0.56)] text-[13px] font-normal leading-4 relative max-sm:text-xs max-sm:leading-[15px]">
                {detail.key}
              </dt>
            </div>
            <div className="flex items-start flex-[1_0_0] self-stretch relative p-0" />
            <div className="flex items-start relative px-0 py-0.5">
              <dd className="max-w-[148px] text-[#ECF9F9] text-right text-[13px] font-normal leading-4 relative max-sm:text-xs max-sm:leading-[15px] max-sm:max-w-[120px]">
                {detail.value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
};
