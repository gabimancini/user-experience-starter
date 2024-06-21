"use client";

type Props = { contractAddress: string };
import { getContract, prepareContractCall, readContract } from "thirdweb";

import { optimism } from "thirdweb/chains";
import { client } from "@/lib/thirdwebClient";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { ethers, parseUnits } from "ethers";
import { balanceOf } from "thirdweb/extensions/erc20";

export default function Balance(props: Props) {

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
        address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
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



  console.log(data);
  console.log(error);
  console.log(failureReason);
  console.log(status);
  const formatNumber = useMemo(() => {
    if (balance) return ethers.formatUnits(balance, 6)
    return 0;
  }, [balance])
  return (
    < >
      {address ? <p className="text-white pr-2 order-1 md:order-[-1]">Your Balance is <span className="font-bold"> {formatNumber}</span></p> : ""}
    </>
  );
}