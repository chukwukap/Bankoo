export const transactions = [
  {
    method: "paypal",
    type: "deposit",
    date: Date.now().toString(),
    amount: "5500",
    description: "deposit from my bank",
  },
  {
    method: "card",
    type: "deposit",
    date: (Date.now() - 30009).toString(),
    amount: "100000",
    description: "deposit to my account",
  },
  {
    method: "paypal",
    type: "withdrawal",
    date: (Date.now() - 500000).toString(),
    amount: "900",
    description: "Paypal to Binance",
  },
  {
    method: "bank",
    type: "withdrawal",
    date: (Date.now() - 60000000).toString(),
    amount: "1000",
    description: "bank to Coinbase",
  },
];
