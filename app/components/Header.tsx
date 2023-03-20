'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OrderNowButton from "./OrderNowButton";
import Dropdown from "./Dropdown";
type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-6 text-center">
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
          duration: 1.3,
        }}
        className="flex flex-row"
      >
  <Link href="#hero">
  <Image src='/logo.webp' alt="Wadadli Jerk Logo" width='200' height='200' className="h-20 w-20 hover:scale-110" />
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
          duration: 1.3,
        }}
        className="flex cursor-pointer hover:scale-110"
      >
        <OrderNowButton />
        <Dropdown/>
      </motion.div>
    </header>
  );
}
