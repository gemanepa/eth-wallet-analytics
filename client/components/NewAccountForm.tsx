import React from "react";

interface AccountFormProps {
  newAccountAddress: string;
  setNewAccountAddress: (address: string) => void;
  onAddAccount: () => void;
}

const NewAccountForm: React.FC<AccountFormProps> = ({
  newAccountAddress,
  setNewAccountAddress,
  onAddAccount,
}) => {
  return (
    <div className="flex items-center justify-center w-full  gap-8 px-8 mt-12 text-center rounded-xl">
      <input
        className="border border-gray-300 p-2 rounded-lg w-1/3"
        placeholder="Insert new account"
        onChange={(e) => setNewAccountAddress(e.target.value)}
        value={newAccountAddress}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onAddAccount}
      >
        Add
      </button>
    </div>
  );
};

export default NewAccountForm;
