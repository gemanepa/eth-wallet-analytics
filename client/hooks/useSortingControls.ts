import { useState } from "react";
import type {
  TAccountAscDescSortOrder,
  TAccountOrderBySort,
} from "../types/Account";

export default function useSortingControls() {
  const [orderBy, setAccountsOrderBySort] =
    useState<TAccountOrderBySort>("balance");
  const [order, setAscDescOrder] = useState<TAccountAscDescSortOrder>("asc");

  const handleOrderByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountsOrderBySort(e.target.value as TAccountOrderBySort);
  };

  const handleAscDescOrderChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setAscDescOrder(e.target.value as TAccountAscDescSortOrder);
  };

  return {
    orderBy,
    handleOrderByChange,
    order,
    handleAscDescOrderChange,
  };
}
