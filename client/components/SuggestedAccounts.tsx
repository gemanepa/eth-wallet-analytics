import React from "react";

const accounts = [
  "0x63a9975ba31b0b9626b34300f7f627147df1f526",
  "0x198ef1ec325a96cc354c7266a038be8b5c558f67",
  "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
];

const SuggestedAccounts: React.FC = () => {
  return (
    <p className="text-xs font-bold text-center mb-6">
      {
        <>
          Suggested Accounts to Insert:
          <span className="ml-2">{accounts.join(", ")}</span>
        </>
      }
    </p>
  );
};

export default SuggestedAccounts;
