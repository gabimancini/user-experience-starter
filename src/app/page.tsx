'use client'
import Swapper from "@/components/Swapper";
import Header from "@/components/Header";
import WalletForm from "@/components/WalletForm";
import Image from "next/image";
import bg1 from './../../public/bg1.svg';
import bg2 from './../../public/bg2.svg';
import bg3 from './../../public/bg3.svg';
export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4 pb-10 min-h-[85vh] flex flex-col md:flex-row items-center">
       <div className="z-[-1] md:z-0 absolute w-full md:relative md:w-[50%] min-h-[85vh]">
        <Image src={bg1} alt="Fondo cículo 1" className="absolute bottom-0" />
        <Image src={bg2} alt="Fondo cículo 1" className="absolute top-4" />
        <Image src={bg3} alt="Fondo cículo 1" className="absolute right-16 bottom-32" />
       </div>
     
          <WalletForm />
         {/* <Swapper />*/}
       
      </main>
    </>
  );
}

