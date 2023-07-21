import { useFetch } from "usehooks-ts";
import type {
  FetchHookState,
  AccountTransactionsFetch,
} from "../types/Requests";

const useAccountTransactions = (accountAddress: string) => {
  const endpoint = accountAddress
    ? `https://api.etherscan.io/api?module=account&action=txlist&address=${accountAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`
    : undefined;
  const accTransactions: FetchHookState<AccountTransactionsFetch> =
    useFetch(endpoint);

  return accTransactions?.data?.result;
};
export default useAccountTransactions;
