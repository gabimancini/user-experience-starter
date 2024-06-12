"use client";

type Props = { contractAddress: string };
import { getContract, prepareContractCall, readContract } from "thirdweb";

import { optimism } from "thirdweb/chains";
import { client } from "@/lib/thirdwebClient";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { ethers, parseUnits } from "ethers"; 
import { balanceOf } from "thirdweb/extensions/erc20";
const contractABI  = require('./ABI');
export default function MintButton(props: Props) {
 
  const {
    mutate: sendTransaction,
    data,
    error,
    status,
    failureReason,
  } = useSendTransaction();

  // get a contract
  const contract = useMemo(
    () =>
      getContract({
        // the client you have created via `createThirdwebClient()`
        client,
        // the chain the contract is deployed on
        chain: optimism,
        // the contract's address
        address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        //abi:contractABI.status
      }),
    []
  );

  const address = useActiveAccount();
  const [balance, setBalance] = useState(0n)
   useEffect(() => {
    async function run() {
      console.log(address?.address)
      if (address?.address) {
        const balance = await balanceOf({
          contract: contract,
           address: address?.address,
        });
        setBalance(balance)
        console.log(balance)
      }
    }
    run()
  }, [address?.address, contract])

  const onClick = useCallback(  () => {
    const transaction = prepareContractCall({
      contract,
      method: "function mint(address to, uint256 amount)",
      params: [
        "0x5be2eee4d534298c6f089479c904d6eda18f28f0",
        parseUnits("10.5", 18),
      ],
    });
    sendTransaction(transaction);
  }, [contract, sendTransaction]);

  console.log(data);
  console.log(error);
  console.log(failureReason);
  console.log(status);
const formatNumber = useMemo(()=>{
  if(balance)  return ethers.formatUnits(balance, 6)
 return 0;
},[balance])
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          console.log("here");
          onClick();
        }}
      >
        mint 10.5 tokens
      </button>
      {formatNumber}
      <p>data</p>
    </div>
  );
}
