import { formatEther } from "@ethersproject/units";
import { useFetch } from "usehooks-ts";
import { DBAccounts } from "../types/Account";
import type { FetchHookState, AccountsBalancesFetch } from "../types/Requests";

const useAccountsBalances = ({ accounts }: { accounts: DBAccounts }) => {
  console.log(
    "process.env.NEXT_PUBLIC_ETHERSCAN_KEY ",
    process.env.NEXT_PUBLIC_ETHERSCAN_KEY,
  );
  const addresses = Object.keys(accounts);
  const endpoint = addresses.length
    ? `https://api.etherscan.io/api?module=account&action=balancemulti&address=${addresses.join(
        ",",
      )}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`
    : undefined;
  const accsBalances: FetchHookState<AccountsBalancesFetch> =
    useFetch(endpoint);

  const toETH =
    accsBalances?.data?.result?.map((acc) => ({
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
