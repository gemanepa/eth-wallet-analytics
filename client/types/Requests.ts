interface FetchHookState<T> {
  data?: T;
  error?: Error;
}

type EthPriceFetch = {
  status: string;
  message: string;
  result: {
    ethusd: string;
    ethbtc: string;
    ethbtc_timestamp: string;
    ethusd_timestamp: string;
  };
};

type AccountsBalancesFetch = {
  status: string;
  message: string;
  result: {
    account: string;
    balance: string;
  }[];
};

type AccountTransactionsFetch = {
  status: string;
  message: string;
  result: {
    timeStamp: number;
  }[];
};

type CreateAccountDto = {
  address: string;
  favorite: boolean;
  dateAdded: string;
  customRate: { usd: number | null; eur: number | null };
};

export type {
  FetchHookState,
  EthPriceFetch,
  AccountsBalancesFetch,
  AccountTransactionsFetch,
  CreateAccountDto,
  UpdateAccountDto,
};
