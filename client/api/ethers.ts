const ETHERSCAN_API_BASE_URL = "https://api.etherscan.io/api";
const ETHERSCAN_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_KEY;

function getTransactionListEndpoint(
  accountAddress: string,
  sort: "desc" | "asc" = "desc",
): string {
  return `${ETHERSCAN_API_BASE_URL}?module=account&action=txlist&address=${accountAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=${sort}&apikey=${ETHERSCAN_KEY}`;
}

function getEthPriceEndpoint(): string {
  return `${ETHERSCAN_API_BASE_URL}?module=stats&action=ethprice&apikey=${ETHERSCAN_KEY}`;
}

function getMultipleBalancesEndpoint(addresses: string[]): string {
  return `${ETHERSCAN_API_BASE_URL}?module=account&action=balancemulti&address=${addresses.join(
    ",",
  )}&tag=latest&apikey=${ETHERSCAN_KEY}`;
}

/**
 * Checks if an Ethereum account exists by querying the Etherscan API for transaction data.
 *
 * @param {string} accountAddress - The Ethereum account address to check.
 * @returns {boolean} - Returns true if the account exists; otherwise, returns false.
 */
async function accountExists(accountAddress: string) {
  const url = getTransactionListEndpoint(accountAddress, "desc");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "1" && data.message === "OK") return true;
    return false;
  } catch (error: any) {
    console.error("Error checking address balance:", error.message);
    return false; // Return false in case of an error or invalid address
  }
}

export {
  getTransactionListEndpoint,
  getEthPriceEndpoint,
  getMultipleBalancesEndpoint,
  accountExists,
};
