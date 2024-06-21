"use client";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/thirdwebClient";
import Balance from "@/components/Balance";
import Logo from './../../public/logoSolo.png'
export default function Header() {
    return (
        <header className="flex p-4  mx-auto justify-between w-full px-4">
            <div className="flex items-center"><Image src={Logo} width="50" alt="logo" height="50" /><h1 className="text-white text-[24px] ml-4">EALLET</h1></div>
            <div className="flex flex-col md:flex-row justify-center items-center">
            <Balance contractAddress={"this is a contract"} />
                <ConnectButton
                    client={client}
                    appMetadata={{
                        name: "Example App",
                        url: "https://example.com",
                    }}
                />
             
            </div>
        </header>
    )
}