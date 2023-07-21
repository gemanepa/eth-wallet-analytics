import { useFetch } from "usehooks-ts";
import type { FetchHookState, EthPriceFetch } from "../types/Requests";
import { getEthPriceEndpoint } from "@/api/ethers";

const useEthPrice = () => {
  const endpoint = getEthPriceEndpoint();
  const ethPriceFetch: FetchHookState<EthPriceFetch> = useFetch(endpoint);
  const currentEthUsdRate = Number(ethPriceFetch?.data?.result?.ethusd) || 0;
  const currentEthEurRate = currentEthUsdRate * 0.9;
  return { currentEthUsdRate, currentEthEurRate };
};
export default useEthPrice;
