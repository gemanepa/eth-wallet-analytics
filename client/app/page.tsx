"use client";
import { TAccount } from "../types/Account";
import sortAccounts from "@/utils/sortAccounts";
import NewAccountForm from "@/components/NewAccountForm";
import SuggestedAccounts from "@/components/SuggestedAccounts";
import CurrentEthPrice from "@/components/CurrentEthPrice";
import AccountsList from "@/components/AccountsList";
import SortingControls from "@/components/SortingControls";
import useAccounts from "@/hooks/useAccounts";
import useSortingControls from "@/hooks/useSortingControls";

export default function Home() {
  const {
    accsBalancesWithUsdPrice,
    newAccountAddress,
    setNewAccountAddress,
    onAddAccount,
    removeAccount,
    setCustomRate,
    removeCustomRate,
    toggleFavorite,
    currentEthUsdRate,
  } = useAccounts();

  const { orderBy, handleOrderByChange, order, handleAscDescOrderChange } =
    useSortingControls();

  const orderedAccounts: TAccount[] = sortAccounts(
    accsBalancesWithUsdPrice,
    orderBy,
    order,
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <SuggestedAccounts />
      <CurrentEthPrice currentEthUsdRate={currentEthUsdRate} />
      <NewAccountForm
        newAccountAddress={newAccountAddress}
        setNewAccountAddress={setNewAccountAddress}
        onAddAccount={onAddAccount}
      />

      <SortingControls
        orderBy={orderBy}
        order={order}
        handleOrderByChange={handleOrderByChange}
        handleAscDescOrderChange={handleAscDescOrderChange}
      />

      <AccountsList
        orderedAccounts={orderedAccounts}
        removeAccount={removeAccount}
        toggleFavorite={toggleFavorite}
        setCustomRate={setCustomRate}
        removeCustomRate={removeCustomRate}
      />
    </main>
  );
}
