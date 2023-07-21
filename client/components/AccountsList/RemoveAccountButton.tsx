import React from "react";

interface RemoveAccountButtonProps {
  removeAccount: () => void;
}

const RemoveAccountButton: React.FC<RemoveAccountButtonProps> = ({
  removeAccount,
}) => {
  return (
    <button
      onClick={removeAccount}
      className="flex items-center justify-center px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
        />
      </svg>
    </button>
  );
};

export default RemoveAccountButton;
