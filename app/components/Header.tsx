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
    <div className="sticky top-0 z-50 gap-x-2 flex max-w-full items-center justify-between p-6 text-center">
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
  <Image src='/logo.webp' alt="Wadadli Jerk Logo" width='200' height='200' priority className="h-20 w-20 hover:scale-125 mx-2 transition duration-75" />
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
        className="flex cursor-pointer hover:scale-110 transtion duration-75"
      >
        <OrderNowButton />
        <Dropdown/>
      </motion.div>
    </div>
  );
}
