import { useFetch } from "usehooks-ts";
import type {
  FetchHookState,
  AccountTransactionsFetch,
} from "../types/Requests";
import { getTransactionListEndpoint } from "@/api/ethers";

const useAccountTransactions = (accountAddress: string) => {
  const endpoint = accountAddress
    ? getTransactionListEndpoint(accountAddress, "desc")
    : undefined;
  const accTransactions: FetchHookState<AccountTransactionsFetch> =
    useFetch(endpoint);

  return accTransactions?.data?.result;
};
export default useAccountTransactions;
