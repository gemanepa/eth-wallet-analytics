import React from "react";

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, onChange }) => {
  return (
    <select
      className="p-2 border border-gray-300 rounded h-10"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  );
};

export default CurrencySelect;
