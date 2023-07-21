import React from "react";

interface HeaderProps {
  currentEthUsdRate?: number;
}

const CurrentEthPrice: React.FC<HeaderProps> = ({ currentEthUsdRate }) => {
  return (
    <h3 className="text-2xl font-bold text-center">
      {currentEthUsdRate ? (
        <>
          Current ETH Price:
          <span className="ml-2 text-blue-500">{currentEthUsdRate} USD</span>
        </>
      ) : (
        ""
      )}
    </h3>
  );
};

export default CurrentEthPrice;
