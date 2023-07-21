import React from "react";

interface RemoveCustomRateButtonProps {
  hasCustomRate: boolean;
  removeCustomRate: () => void;
}

const RemoveCustomRateButton: React.FC<RemoveCustomRateButtonProps> = ({
  hasCustomRate,
  removeCustomRate,
}) => {
  return hasCustomRate ? (
    <span
      className="text-xs text-left underline text-green-500 cursor-pointer"
      onClick={removeCustomRate}
    >
      Remove Custom Rate
    </span>
  ) : null;
};

export default RemoveCustomRateButton;
