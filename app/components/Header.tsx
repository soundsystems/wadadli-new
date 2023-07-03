'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OrderNowButton from "./OrderNowButton";
import Dropdown from "./DropdownMenu";
// import { usePathname } from 'next/navigation';

export default function Header({ }) {
  // const pathname = usePathname();
  // const isContactPage = pathname === '/contact';

  return (
    // <div className={`${isContactPage ? 'fixed' : 'sticky'} top-0 z-50 flex w-full max-w-full items-center justify-between gap-x-2 p-6 text-center`}>
    <div className='top-0 z-50 flex h-full w-full max-w-full items-center justify-between gap-x-2 pb-5 pr-4 pt-safe-top text-center'>
      <motion.div
        initial={{
          x: 1000,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: .08,
          stiffness: 69
        }}
        whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }} 
        className="flex flex-row"
      >
  <Link href="/">
  <Image src='/logo.png' alt="Wadadli Jerk Logo" width='200' height='200' priority className="ml-1 mt-2 w-[4.5rem] md:w-20 lg:w-24" />
  </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: .24,
          stiffness: 66,
        }}
        className="flex cursor-pointer transition duration-75 hover:scale-110"
      >
        <OrderNowButton />
        <Dropdown/>
      </motion.div>
    </div>
  );
}
