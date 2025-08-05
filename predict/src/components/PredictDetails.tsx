import React from 'react';
import Header from './Header';
import PredictionChart from './PredictionChart';
import TradingPanel from './TradingPanel';
import PredictionCard from './PredictionCard';

const PredictDetails: React.FC = () => {
  const predictionCards = [
    {
      title: "📈 Will Ethereum reach $5,000 by June 1st?",
      description: "This market resolves to 'Yes' if ETH's price on major exchanges like Coinbase or Kraken hits $5,000 by June 1, 2024. Bullish sentiment is driven by the recent Dencun upgrade and speculation around a potential spot ETF approval.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "🚗 Tesla stock to close above $200 by end of Q2?",
      description: "This market will resolve to 'Yes' if TSLA's closing price is at or above $200 on the last trading day of Q2 2024. The outcome hinges on Q2 delivery numbers, Cybertruck production ramp-up, and overall market sentiment towards EV stocks.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "🇬🇧 Will the UK rejoin the EU by 2030?",
      description: "This market resolves to 'Yes' if the United Kingdom officially rejoins the European Union as a full member state on or before December 31, 2030. This is a long-term market reflecting shifts in public opinion and political landscapes.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "🏦 Spot Ethereum ETF approved by the SEC in 2024?",
      description: "This market resolves to 'Yes' if the U.S. Securities and Exchange Commission (SEC) approves any spot Ethereum ETF for trading on a U.S. exchange by December 31, 2024. The decision is being closely watched following the successful launch of Bitcoin ETFs.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "🎬 Will the next Grand Theft Auto game be released in 2025?",
      description: "This market resolves to 'Yes' if 'Grand Theft Auto VI' is officially released for any gaming platform to the public on or before December 31, 2025. The resolution will be based on the official announcement from Rockstar Games.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "🏦 Fed to cut interest rates at the next FOMC meeting?",
      description: "This market resolves to 'Yes' if the Federal Open Market Committee (FOMC) announces a reduction in the target federal funds rate at its next scheduled meeting. Traders are weighing recent inflation reports and labor market data to predict the outcome.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "💻 NVIDIA to hit $1,000 before the end of the year?",
      description: "This market resolves to 'Yes' if the price of NVDA stock reaches or exceeds $1,000 on any trading day before December 31, 2024. The company's performance is heavily tied to the demand for its AI chips and its ability to maintain a lead in the sector.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    },
    {
      title: "🇺🇸 Who will win the 2024 U.S. Presidential Election?",
      description: "This market will resolve to the candidate who wins the 2024 U.S. Presidential Election. The outcome will be determined by the official certification of the Electoral College vote. Key factors include polling data, debate performances, and voter turnout in swing states.",
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      yesPercentage: 18,
      noPercentage: 82
    }
  ];

  return (
    <div className="w-full min-h-screen relative overflow-x-auto bg-[#0D0D0D]">
      <Header />
      
      <main className="flex w-full max-w-[960px] flex-col items-start gap-10 absolute left-14 top-[140px]">
        <div className="flex flex-col items-start gap-14 self-stretch relative">
          <div className="flex flex-col items-start gap-4 self-stretch relative">
            <div className="flex h-6 items-center content-center gap-[4px_12px] self-stretch flex-wrap relative">
              <div className="text-[rgba(229,255,255,0.56)] text-right text-[21px] font-normal leading-7 relative">
                Volume: 10.5k USDC
              </div>
              <div className="text-[rgba(229,255,255,0.56)] text-right text-[21px] font-normal leading-7 relative">
                Ends: Sep 17, 2025
              </div>
            </div>
            <h1 className="self-stretch text-[#ECF9F9] text-[40px] font-normal leading-[48px] relative">
              💎 Bitcoin above $84,000 on September 17?
            </h1>
          </div>
          
          <PredictionChart />
          
          <div className="self-stretch text-[#ECF9F9] text-base font-normal leading-6 underline decoration-solid decoration-auto underline-offset-auto relative">
            The FED interest rates are defined in this market by the upper bound
            of the target federal funds range. The decisions on the target
            federal fund range are made by the Federal Open Market Committee
            (FOMC) meetings. This market will resolve to the amount of basis
            points the upper bound of the target federal funds rate is changed
            by versus the level it was prior to the Federal Reserve's September
            2025 meeting. If the target federal funds rate is changed to a level
            not expressed in the displayed options, the change will be rounded
            up to the nearest 25 and will resolve to the relevant bracket. (e.g.
            if there's a cut/increase of 12.5 bps it will be considered to be 25
            bps) The resolution source for this market is the FOMC's statement
            after its meeting scheduled for September 16 - 17, 2025 according to
            the official calendar:{' '}
            <a 
              href="https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
              className="underline hover:text-[rgba(229,255,255,0.8)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm
            </a>
            . The level and change of the target federal funds rate is also
            published at the official website of the Federal Reserve at{' '}
            <a 
              href="https://www.federalreserve.gov/monetarypolicy/openmarket.htm"
              className="underline hover:text-[rgba(229,255,255,0.8)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.federalreserve.gov/monetarypolicy/openmarket.htm
            </a>
            . This market may resolve as soon as the FOMC's statement for their
            September meeting with relevant data is issued. If no statement is
            released by the end date of the next scheduled meeting, this market
            will resolve to the "No change" bracket.
          </div>
        </div>
      </main>
      
      <TradingPanel />
      
      <section className="flex w-full max-w-[1400px] flex-col items-start gap-10 absolute left-14 top-[1076px]">
        <div className="flex items-center gap-10 self-stretch relative">
          {predictionCards.slice(0, 4).map((card, index) => (
            <PredictionCard key={index} {...card} />
          ))}
        </div>
        <div className="flex items-center gap-10 self-stretch relative">
          {predictionCards.slice(4, 8).map((card, index) => (
            <PredictionCard key={index + 4} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PredictDetails;
