"use client";
import { useState } from "react";
import { DBAccounts } from "../types/Account";
import useAccountsBalances from "@/hooks/useAccountsBalances";
import { isAddress } from "web3-validator";
import accountExists from "@/utils/accountExists";
import useEthPrice from "@/hooks/useEthPrice";

const beData = {
  "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a": {
    favorite: false,
    dateAdded: "2021-09-01T00:00:00.000Z",
    customRate: null,
  },
  "0x63a9975ba31b0b9626b34300f7f627147df1f526": {
    favorite: false,
    dateAdded: "2019-08-01T00:00:00.000Z",
    customRate: null,
  },
  "0x198ef1ec325a96cc354c7266a038be8b5c558f67": {
    favorite: false,
    dateAdded: "2021-04-01T00:00:00.000Z",
    customRate: null,
  },
};

export default function useAccounts() {
  const [accounts, setAccounts] = useState<DBAccounts>(beData);
  const { currentEthUsdRate, currentEthEurRate } = useEthPrice();
  const accsBalances = useAccountsBalances({ accounts });

  const [newAccountAddress, setNewAccountAddress] = useState("");

  const accsBalancesWithUsdPrice = accsBalances.map((acc) => ({
    ...acc,
    usd: acc.balance * (acc.customRate.usd || currentEthUsdRate),
    eur: acc.balance * (acc.customRate.eur || currentEthEurRate),
  }));

  const onAddAccount = async () => {
    if (!newAccountAddress) {
      alert("Account is required");
      return;
    }

    const alreadyInAccounts = accounts[newAccountAddress];
    if (alreadyInAccounts) {
      alert("Account already added");
      return;
    }

    const isValidAddress = isAddress(newAccountAddress);
    if (!isValidAddress) {
      alert("Insert valid ETH address");
      return;
    }

    const accExists = accountExists(newAccountAddress);
    if (!accExists) {
      alert("ETH Account does not exist");
      return;
    }

    const newAccount = {
      [newAccountAddress]: {
        favorite: false,
        dateAdded: new Date().toISOString(),
        customRate: null,
      },
    };
    setAccounts({ ...accounts, ...newAccount });
    setNewAccountAddress("");
  };

  const removeAccount = (accAdress: string) => {
    const newAccounts = { ...accounts };
    delete newAccounts[accAdress];
    setAccounts(newAccounts);
  };

  const setCustomRate = (accAdress: string, price: number) => {
    const newAccounts = { ...accounts };
    newAccounts[accAdress].customRate = {
      usd: price,
      eur: price * 0.9,
    };
    setAccounts(newAccounts);
  };

  const removeCustomRate = (accAdress: string) => {
    const newAccounts = { ...accounts };
    newAccounts[accAdress].customRate = null;
    setAccounts(newAccounts);
  };

  const toggleFavorite = (accAdress: string) => {
    const newAccounts = { ...accounts };
    newAccounts[accAdress].favorite = !newAccounts[accAdress].favorite;
    setAccounts(newAccounts);
  };

  return {
    accounts,
    accsBalancesWithUsdPrice,
    newAccountAddress,
    setNewAccountAddress,
    onAddAccount,
    removeAccount,
    setCustomRate,
    removeCustomRate,
    toggleFavorite,
    currentEthUsdRate,
  };
}
