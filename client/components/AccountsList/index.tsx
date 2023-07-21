import React from "react";
import AccountCard from "./AccountCard";
import { TAccount } from "@/types/Account";

interface AccountListProps {
  orderedAccounts: TAccount[];
  removeAccount: (address: string) => void;
  toggleFavorite: (address: string) => void;
  setCustomRate: (address: string, rate: number) => void;
  removeCustomRate: (address: string) => void;
}

const AccountList: React.FC<AccountListProps> = ({
  orderedAccounts,
  removeAccount,
  toggleFavorite,
  setCustomRate,
  removeCustomRate,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-8 px-8 py-16 mx-auto text-center rounded-xl">
      {orderedAccounts.map((account, index) => (
        <div className="w-[800px]" key={account.address}>
          {/* Pass account data and related functions to AccountCard */}
          <AccountCard
            account={account}
            removeAccount={removeAccount}
            toggleFavorite={toggleFavorite}
            setCustomRate={setCustomRate}
            removeCustomRate={removeCustomRate}
          />
          {index !== orderedAccounts.length - 1 && (
            <hr className="w-full h-[2px] bg-slate-500 opacity-50 mt-10" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountList;
