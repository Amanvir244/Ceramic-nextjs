"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <SessionProvider>
      <CartProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </SessionProvider>
  );
}
