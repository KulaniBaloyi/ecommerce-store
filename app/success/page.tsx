"use client";
import Button from "../components/Button";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import useCart from "../lib/cart-store";

const SucessPage = ({ searchParams }: any) => {
  const clearCart = useCart((state)=>state.clearCart)

  useEffect(() => {
    !searchParams?.session_id ? redirect("/") : clearCart()
  }, []);
  return (
    <section className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">
          Your Payment Accepted by Garagemom.com
        </h2>
        <p>Now you can view your orders or continue Shopping with us</p>
        <div className="flex items-center gap-x-5">
        <Button text={"view orders"} redirect={"/order"} />
        <Button text={"back to shopping"} redirect={"/"} bgColor={"#e5202b"}/>
        </div>
      </div>
    </section>
  );
};

export default SucessPage;