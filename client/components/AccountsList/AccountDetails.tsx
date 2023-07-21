import React from "react";
import { TAccount } from "@/types/Account";

interface AccountProps {
  account: TAccount;
}

const AccountDetails: React.FC<AccountProps> = ({ account }) => {
  return (
    <>
      <span className="text-xs font-semibold tracking-wide uppercase text-left">
        Address: {account.address}
      </span>
      <div className="flex flex-row items-center gap-2">
        <span className="text-xs font-semibold tracking-wide uppercase">
          Balance: {account.balance.toFixed(2)} ETH
        </span>
        {account.usd && (
          <>
            (
            <span className="text-xs font-semibold tracking-wide uppercase">
              {account.usd.toFixed(2)} USD
            </span>
            |
          </>
        )}
        {account.eur && (
          <span className="text-xs font-semibold tracking-wide uppercase">
            {account.eur.toFixed(2)} EUR
          </span>
        )}
        )
        {account.customRate.usd ? (
          <span className="text-xs font-semibold tracking-wide uppercase text-green text-right">
            [Custom 1 ETH = {account.customRate.usd.toFixed(2)} USD]
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AccountDetails;
