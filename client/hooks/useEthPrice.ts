import { useFetch } from "usehooks-ts";
import type { FetchHookState, EthPriceFetch } from "../types/Requests";

const useEthPrice = () => {
  const endpoint = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`;
  const ethPriceFetch: FetchHookState<EthPriceFetch> = useFetch(endpoint);
  const currentEthUsdRate = Number(ethPriceFetch?.data?.result?.ethusd) || 0;
  const currentEthEurRate = currentEthUsdRate * 0.9;
  return { currentEthUsdRate, currentEthEurRate };
};
export default useEthPrice;
