import type {
  TAccount,
  TAccountAscDescSortOrder,
  TAccountOrderBySort,
} from "../types/Account";

/**
 * Custom comparison function to sort the 'TAccount' objects by the 'dateAdded' property.
 *
 * @param {TAccount} a - The first 'TAccount' object for comparison.
 * @param {TAccount} b - The second 'TAccount' object for comparison.
 * @param {TAccountAscDescSortOrder} order - The sort order ('asc' for ascending, 'desc' for descending).
 * @returns {number} - Returns a negative number if 'a' comes before 'b', a positive number if 'a' comes after 'b',
 *                     or zero if they are equal in terms of 'dateAdded'.
 */
function sortByDateAdded(
  a: TAccount,
  b: TAccount,
  order: TAccountAscDescSortOrder,
) {
  const dateA = new Date(a.dateAdded).getTime();
  const dateB = new Date(b.dateAdded).getTime();
  return order === "asc" ? dateA - dateB : dateB - dateA;
}

/**
 * Custom comparison function to sort the 'TAccount' objects by the 'favorite' boolean property.
 *
 * @param {TAccount} a - The first 'TAccount' object for comparison.
 * @param {TAccount} b - The second 'TAccount' object for comparison.
 * @returns {number} - Returns a negative number if 'a' comes before 'b', a positive number if 'a' comes after 'b',
 *                     or zero if they have the same 'favorite' value.
 */
function sortByFavorite(a: TAccount, b: TAccount) {
  return a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1;
}

/**
 * Main sorting logic to sort an array of 'TAccount' objects based on the specified sorting criteria.
 *
 * @param {TAccount[]} accsBalances - An array of 'TAccount' objects to be sorted.
 * @param {TAccountOrderBySort} orderBy - The property to sort by ('dateAdded', 'favorites', or 'balance').
 * @param {TAccountAscDescSortOrder} order - The sort order ('asc' for ascending, 'desc' for descending).
 * @returns {TAccount[]} - Returns the sorted array of 'TAccount' objects.
 */
function sortAccounts(
  accsBalances: TAccount[],
  orderBy: TAccountOrderBySort,
  order: TAccountAscDescSortOrder,
) {
  return accsBalances.sort((a, b) => {
    switch (orderBy) {
      case "dateAdded":
        return sortByDateAdded(a, b, order);
      case "favorites":
        return order === "asc" ? sortByFavorite(a, b) : sortByFavorite(b, a);
      case "balance":
      default:
        return order === "asc"
          ? Number(a.balance) - Number(b.balance)
          : Number(b.balance) - Number(a.balance);
    }
  });
}

export default sortAccounts;
