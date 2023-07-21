import { formatEther } from "@ethersproject/units";
import { useFetch } from "usehooks-ts";
import { getMultipleBalancesEndpoint } from "@/api/ethers";
import { TMappedDBAccounts } from "@/types/Account";
import type { FetchHookState, AccountsBalancesFetch } from "@/types/Requests";

const useAccountsBalances = ({ accounts }: { accounts: TMappedDBAccounts }) => {
  const addresses = Object.keys(accounts);
  const endpoint = addresses.length
    ? getMultipleBalancesEndpoint(addresses)
    : undefined;
  const accsBalances: FetchHookState<AccountsBalancesFetch> =
    useFetch(endpoint);

  if (!addresses.length) return [];

  const toETH =
    accsBalances?.data?.result?.map((acc) => ({
      _id: accounts[acc.account]?._id,
      address: acc.account,
      balance: Number(formatEther(acc.balance)),
      favorite: accounts[acc.account]?.favorite,
      dateAdded: accounts[acc.account]?.dateAdded,
      customRate: {
        usd: accounts[acc.account]?.customRate?.usd || 0,
        eur: accounts[acc.account]?.customRate?.eur || 0,
      },
    })) || [];

  return toETH;
};

export default useAccountsBalances;
