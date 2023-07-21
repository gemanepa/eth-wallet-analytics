"use client";
import { useState, useEffect } from "react";
import {
  getAllAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
} from "@/api/server";
import { DBAccount, TMappedDBAccounts } from "../types/Account";
import useAccountsBalances from "@/hooks/useAccountsBalances";
import { isAddress } from "web3-validator";
import accountExists from "@/utils/accountExists";
import useEthPrice from "@/hooks/useEthPrice";


export default function useAccounts() {
  const [initialAccsRequest, setInitialAccsRequest] = useState(false);
  const [accounts, setAccounts] = useState<TMappedDBAccounts>({});
  const { currentEthUsdRate, currentEthEurRate } = useEthPrice();
  const accsBalances = useAccountsBalances({ accounts });

  const [newAccountAddress, setNewAccountAddress] = useState("");

  const accsBalancesWithUsdPrice = accsBalances.map((acc) => ({
    ...acc,
    usd: acc.balance * (acc.customRate.usd || currentEthUsdRate),
    eur: acc.balance * (acc.customRate.eur || currentEthEurRate),
  }));

  useEffect(() => {
    const fetchAccounts = async () => {
      const fetchedAccounts = await getAllAccounts();
      const accsObj: TMappedDBAccounts = {};
      fetchedAccounts.forEach((acc: DBAccount) => {
        accsObj[acc.address] = acc;
      });

      setAccounts(accsObj);
      setInitialAccsRequest(true);
    };
    if (!initialAccsRequest) {
      fetchAccounts();
    }
  }, [accounts, initialAccsRequest]);

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
        address: newAccountAddress,
        favorite: false,
        dateAdded: new Date().toISOString(),
        customRate: { usd: null, eur: null },
      },
    };
    const newBEAcc: DBAccount = await createAccount(
      newAccount[newAccountAddress],
    );

    const accsObj: TMappedDBAccounts = { ...accounts };
    [newBEAcc].forEach((acc: DBAccount) => {
      accsObj[acc.address] = acc;
    });

    setAccounts(accsObj);
    setNewAccountAddress("");
  };

  const removeAccount = async (accAdress: string) => {
    const newAccounts = { ...accounts };
    delete newAccounts[accAdress];
    await deleteAccount(accounts[accAdress]._id);
    setAccounts(newAccounts);
  };

  const setCustomRate = (accAdress: string, price: number) => {
    if (typeof price !== "number" || price <= 0) {
      alert("Price must be a number and greater than 0");
    }
    const newAccounts = { ...accounts };
    newAccounts[accAdress].customRate = {
      usd: price,
      eur: price * 0.9,
    };
    updateAccount(newAccounts[accAdress]._id, newAccounts[accAdress]);
    setAccounts(newAccounts);
  };

  const removeCustomRate = (accAdress: string) => {
    const newAccounts = { ...accounts };
    newAccounts[accAdress].customRate = {
      usd: null,
      eur: null,
    };
    updateAccount(newAccounts[accAdress]._id, newAccounts[accAdress]);
    setAccounts(newAccounts);
  };

  const toggleFavorite = (accAdress: string) => {
    const newAccounts = { ...accounts };
    newAccounts[accAdress].favorite = !newAccounts[accAdress].favorite;
    updateAccount(newAccounts[accAdress]._id, newAccounts[accAdress]);
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
