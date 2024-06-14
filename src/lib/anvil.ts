import { defineChain } from "thirdweb"

export default defineChain({
    id: 1,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  });