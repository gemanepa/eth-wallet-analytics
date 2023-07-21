import React, { useState } from "react";
import { TAccount } from "@/types/Account";
import useAccountTransactions from "@/hooks/useAccountTransactions";
import OldWalletBanner from "./OldWalletBanner";
import { moreThanAYearPassed } from "@/utils/time";
import CustomizeExchangeRateButton from "./CustomizeExchangeRateButton";
import RemoveCustomRateButton from "./RemoveCustomRateButton";
import FavoriteButton from "./FavoriteButton";
import RemoveAccountButton from "./RemoveAccountButton";
import CustomRateForm from "./CustomRateForm";
import AccountDetails from "./AccountDetails";

interface AccountCardProps {
  account: TAccount;
  removeAccount: (address: string) => void;
  toggleFavorite: (address: string) => void;
  setCustomRate: (address: string, price: number) => void;
  removeCustomRate: (address: string) => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
  account,
  removeAccount,
  toggleFavorite,
  setCustomRate,
  removeCustomRate,
}) => {
  const transactions = useAccountTransactions(account.address);
  const [isCustomizingExchangeRate, setIsCustomizingExchangeRate] =
    useState(false);
  if (!transactions) return null;

  const lastTransactionTimestamp = transactions[0]?.timeStamp;
  const timeStampInMiliseconds = lastTransactionTimestamp
    ? lastTransactionTimestamp * 1000
    : 0;
  const moreThanAYearOld = moreThanAYearPassed(
    new Date(timeStampInMiliseconds),
  );

  return (
    <div className="w-full">
      {moreThanAYearOld && <OldWalletBanner />}
      <div className="h-[100px] flex flex-row justify-between items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ">
        <div className="flex flex-col">
          {isCustomizingExchangeRate ? (
            <CustomRateForm
              setIsCustomizingExchangeRate={setIsCustomizingExchangeRate}
              accAdress={account.address}
              setCustomRate={setCustomRate}
            />
          ) : (
            <AccountDetails account={account} />
          )}
          <div className="flex flex-row items-center gap-2">
            <CustomizeExchangeRateButton
              isCustomizing={isCustomizingExchangeRate}
              toggleCustomizing={() =>
                setIsCustomizingExchangeRate(!isCustomizingExchangeRate)
              }
            />
            <RemoveCustomRateButton
              hasCustomRate={Boolean(
                account.customRate.usd || account.customRate.eur,
              )}
              removeCustomRate={() => removeCustomRate(account.address)}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FavoriteButton
            isFavorite={account.favorite}
            toggleFavorite={() => toggleFavorite(account.address)}
          />
          <RemoveAccountButton
            removeAccount={() => removeAccount(account.address)}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
