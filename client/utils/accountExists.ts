/**
 * Checks if an Ethereum account exists by querying the Etherscan API for transaction data.
 *
 * @param {string} accountAddress - The Ethereum account address to check.
 * @returns {boolean} - Returns true if the account exists; otherwise, returns false.
 */
async function accountExists(accountAddress: string) {
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${accountAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`;

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
export default accountExists;
