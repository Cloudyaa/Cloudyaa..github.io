import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import {Layout} from "@/types";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Klaudia Olczyk personal portfolio',
  description: 'Personal portfolio page',
}

const RootLayout = ({children}: Layout) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout;
