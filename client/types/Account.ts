interface DBAccounts {
  [key: string]: {
    favorite: boolean;
    dateAdded: string;
    customRate: { usd: number; eur: number } | null;
  };
}

type TAccount = {
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
  DBAccounts,
  TAccount,
  TAccountAscDescSortOrder,
  TAccountOrderBySort,
};
