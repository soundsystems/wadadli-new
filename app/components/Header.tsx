'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OrderNowButton from "./OrderNowButton";
import Dropdown from "./Dropdown";
// import { usePathname } from 'next/navigation';

export default function Header({ }) {
  // const pathname = usePathname();
  // const isContactPage = pathname === '/contact';

  return (
    // <div className={`${isContactPage ? 'fixed' : 'sticky'} top-0 z-50 flex w-full max-w-full items-center justify-between gap-x-2 p-6 text-center`}>
    <div className='sticky top-0 z-50 flex w-full max-w-full items-center justify-between gap-x-2 p-6 text-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: .4,
        }}
        className="flex flex-row"
      >
  <Link href="#menu">
  <Image src='/logo.webp' alt="Wadadli Jerk Logo" width='200' height='200' priority className="mx-2 h-20 w-20 transition duration-75 hover:scale-125" />
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
          duration: .4,
        }}
        className="flex cursor-pointer transition duration-75 hover:scale-110"
      >
        <OrderNowButton />
        <Dropdown/>
      </motion.div>
    </div>
  );
}
