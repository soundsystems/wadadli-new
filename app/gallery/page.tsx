'use client';

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useKeypress from "react-use-keypress";
import Header from "../components/Header";

type Props = {};

export default function Gallery({ }: Props) {
let images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/1.webp?",
  "/images/2.webp?",
  "/images/3.webp?",
  "/images/4.webp?",
  "/images/5.webp?",
  "/images/6.webp?",
];

let collapsedAspectRatio = 1 / 3;
let fullAspectRatio = 3 / 2;
let gap = 2;
let margin = 11;

  let [index, setIndex] = useState(0);

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      setIndex(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  });

  return (
    <>
    <Header/>
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full pt-40
      ">
        <div className="mx-auto flex max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image, i) => (
                <motion.img
                  key={image}
                  src={image}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  className="aspect-[3/2] object-cover"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6 text-zinc-900" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6 text-zinc-900" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative inset-x-0 flex justify-center overflow-hidden">
            <motion.div
              animate={{
                x: `-${
                  index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                  index * gap +
                  margin
                }%`,
              }}
              style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
              className="flex h-20"
            >
              {images.map((image, i) => (
                <motion.button
                  key={image}
                  onClick={() => setIndex(i)}
                  whileHover={{ opacity: 1 }}
                  initial={false}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                      aspectRatio: fullAspectRatio,
                    },
                    inactive: {
                      marginLeft: "0%",
                      marginRight: "0%",
                      opacity: 0.5,
                      aspectRatio: collapsedAspectRatio,
                    },
                  }}
                >
                  <motion.img src={image} className="h-full object-cover" />
                </motion.button>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </MotionConfig>
    </>
  );
}