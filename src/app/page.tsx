'use client'
import Swapper from "@/components/Swapper";
import Header from "@/components/Header";
import WalletForm from "@/components/WalletForm";
export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="py-20">
          <WalletForm />
         {/* <Swapper />*/}
        </div>
      </main>
    </>
  );
}

