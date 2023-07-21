type DBAccount = {
  _id: string;
  address: string;
  favorite: boolean;
  dateAdded: string;
  customRate: { usd: number | null; eur: number | null };
};

interface TMappedDBAccounts {
  [key: string]: DBAccount;
}

type TAccount = {
  _id: string;
  address: string;
  balance: number;
  favorite: boolean;
  dateAdded: string;
  customRate: {
    usd: number;
    eur: number;
  };
  usd: number;
  eur: number;
};

type TAccountAscDescSortOrder = "asc" | "desc";
type TAccountOrderBySort = "balance" | "dateAdded" | "favorites";

export type {
  DBAccount,
  TMappedDBAccounts,
  TAccount,
  TAccountAscDescSortOrder,
  TAccountOrderBySort,
};
