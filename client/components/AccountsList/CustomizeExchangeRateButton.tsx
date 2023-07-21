import React from "react";

interface CustomizeExchangeRateButtonProps {
  isCustomizing: boolean;
  toggleCustomizing: () => void;
}

const CustomizeExchangeRateButton: React.FC<
  CustomizeExchangeRateButtonProps
> = ({ isCustomizing, toggleCustomizing }) => {
  return (
    <span
      className="text-xs text-left underline text-green-500 cursor-pointer"
      onClick={toggleCustomizing}
    >
      {isCustomizing
        ? "Cancel"
        : "Customize balance exchange rate for this wallet"}
    </span>
  );
};

export default CustomizeExchangeRateButton;
