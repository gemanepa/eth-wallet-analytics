import React from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="w-28 p-2 border border-gray-300 rounded h-10"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
};

export default NumberInput;
