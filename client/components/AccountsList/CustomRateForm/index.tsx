import React, { useState } from "react";
import NumberInput from "./CurrencyNumberInput";
import CurrencySelect from "./CurrencySelect";

function CustomCurrencyFields({
  accAdress,
  setCustomRate,
  setIsCustomizingExchangeRate,
}: {
  accAdress: string;
  setCustomRate: (accAdress: string, price: number) => void;
  setIsCustomizingExchangeRate: (arg0: boolean) => void;
}) {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("USD");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    // Validate both values (amount and currency) before executing the backend request
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Simulate a backend request delay
      setIsLoading(false);
    }, 2000);

    const EUR_TO_USD_RATE = 1.1;
    setCustomRate(
      accAdress,
      currency === "EUR" ? amount * EUR_TO_USD_RATE : amount,
    );
    setIsCustomizingExchangeRate(false);
    /*       fetch('YOUR_BACKEND_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data from the backend if needed
          console.log('Backend response:', data);
            setIsLoading(false);
        })
        .catch((error) => {
          // Handle errors from the backend if needed
          console.error('Error:', error);
        }); */
  };

  return (
    <div className="flex container mx-auto gap-4">
      <div className="mb-4">
        <label className="mr-2">1 ETH = </label>
        <NumberInput value={amount} onChange={setAmount} />
      </div>
      <div>
        <CurrencySelect value={currency} onChange={setCurrency} />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded h-10"
        onClick={handleClick}
        disabled={isLoading} // Disable the button while the request is in progress
      >
        {isLoading ? "Loading" : "Confirm"}
      </button>
    </div>
  );
}

export default CustomCurrencyFields;
