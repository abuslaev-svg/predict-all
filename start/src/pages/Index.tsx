import React from 'react';
import { Header } from '@/components/Header';
import { EventCard } from '@/components/EventCard';

const Index = () => {
  const eventCards = [
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "📈 Will Ethereum reach $5,000 by June 1st?",
      description: "This market resolves to 'Yes' if ETH's price on major exchanges like Coinbase or Kraken hits $5,000 by June 1, 2024. Bullish sentiment is driven by the recent Dencun upgrade and speculation around a potential spot ETF approval.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/394cb1a88be03b96f0b5fe2091180e533edd81f3?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: true
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "🚗 Tesla stock to close above $200 by end of Q2?",
      description: "This market will resolve to 'Yes' if TSLA's closing price is at or above $200 on the last trading day of Q2 2024. The outcome hinges on Q2 delivery numbers, Cybertruck production ramp-up, and overall market sentiment towards EV stocks.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/bcbc834efa7e7a9eb7abfec27aa2436d7201b82f?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: true
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "🇬🇧 Will the UK rejoin the EU by 2030?",
      description: "This market resolves to 'Yes' if the United Kingdom officially rejoins the European Union as a full member state on or before December 31, 2030. This is a long-term market reflecting shifts in public opinion and political landscapes.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/22530e25f2e6ead1905bdf78ababfc5a0580b1cd?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: true
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "🏦 Spot Ethereum ETF approved by the SEC in 2024?",
      description: "This market resolves to 'Yes' if the U.S. Securities and Exchange Commission (SEC) approves any spot Ethereum ETF for trading on a U.S. exchange by December 31, 2024. The decision is being closely watched following the successful launch of Bitcoin ETFs.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/c4fbc5d3d911f37cfea9782c4456c4f5e7d8c190?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: true
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "🎬 Will the next Grand Theft Auto game be released in 2025?",
      description: "This market resolves to 'Yes' if 'Grand Theft Auto VI' is officially released for any gaming platform to the public on or before December 31, 2025. The resolution will be based on the official announcement from Rockstar Games.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/cd40fc3d87361649857ba4f2825d545a1c0741ba?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: false
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "🏦 Fed to cut interest rates at the next FOMC meeting?",
      description: "This market resolves to 'Yes' if the Federal Open Market Committee (FOMC) announces a reduction in the target federal funds rate at its next scheduled meeting. Traders are weighing recent inflation reports and labor market data to predict the outcome.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/8cb0cb1738df0326a131fd3ebbc87c765832ae31?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: false
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "💻 NVIDIA to hit $1,000 before the end of the year?",
      description: "This market resolves to 'Yes' if the price of NVDA stock reaches or exceeds $1,000 on any trading day before December 31, 2024. The company's performance is heavily tied to the demand for its AI chips and its ability to maintain a lead in the sector.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/a1e92b6ed55df83f187337de76471b2a6263db5a?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: false
    },
    {
      volume: "10.5k USDC",
      endDate: "Sep 17, 2025",
      title: "🇺🇸 Who will win the 2024 U.S. Presidential Election?",
      description: "This market will resolve to the candidate who wins the 2024 U.S. Presidential Election. The outcome will be determined by the official certification of the Electoral College vote. Key factors include polling data, debate performances, and voter turnout in swing states.",
      chartImage: "https://api.builder.io/api/v1/image/assets/TEMP/99fd3209871705d49c34a3210900bedd0b3b5774?placeholderIfAbsent=true",
      yesPercentage: 18,
      noPercentage: 82,
      showButtons: false
    }
  ];

  return (
    <div className="overflow-hidden bg-[#0D0D0D] pt-10 px-14 max-md:px-5 min-h-screen">
      <Header />
      
      <main className="w-full mt-10 max-md:max-w-full">
        <section className="flex w-full items-stretch gap-10 flex-wrap max-md:max-w-full">
          {eventCards.slice(0, 4).map((card, index) => (
            <EventCard
              key={index}
              volume={card.volume}
              endDate={card.endDate}
              title={card.title}
              description={card.description}
              chartImage={card.chartImage}
              yesPercentage={card.yesPercentage}
              noPercentage={card.noPercentage}
              showButtons={card.showButtons}
            />
          ))}
        </section>
        
        <section className="flex w-full items-stretch gap-10 flex-wrap mt-10 max-md:max-w-full">
          {eventCards.slice(4, 8).map((card, index) => (
            <EventCard
              key={index + 4}
              volume={card.volume}
              endDate={card.endDate}
              title={card.title}
              description={card.description}
              chartImage={card.chartImage}
              yesPercentage={card.yesPercentage}
              noPercentage={card.noPercentage}
              showButtons={card.showButtons}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
