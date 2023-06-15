'use client';

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useKeypress from "react-use-keypress";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

export default function Gallery({ }: Props) {
  let images = [
    { src: "/images/1.webp", key: "img1" },
    { src: "/images/2.webp", key: "img2" },
    { src: "/images/3.webp", key: "img3" },
    { src: "/images/4.webp", key: "img4" },
    { src: "/images/5.webp", key: "img5" },
    { src: "/images/6.webp", key: "img6" },
    { src: "/images/1.webp", key: "img7" },
    { src: "/images/2.webp", key: "img8" },
    { src: "/images/3.webp", key: "img9" },
    { src: "/images/4.webp", key: "img10" },
    { src: "/images/5.webp", key: "img11" },
    { src: "/images/6.webp", key: "img12" },
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
      <div className="scrollbar-none h-full pt-40
      ">
        <div className="mx-auto flex max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
          <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex w-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              dragMomentum={false}
              onDragEnd={(_, info) => {
                const direction = info.offset.x < 0 ? 1 : -1;
                const newIndex = index + direction;

                if (newIndex >= 0 && newIndex < images.length) {
                  setIndex(newIndex);
                }
              }}
            >
              {images.map((imageObj, i) => (
                <motion.img
                  key={imageObj.key}
                  src={imageObj.src}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  className="aspect-[3/2] w-full object-cover"
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
          
          <div className="relative inset-x-0 my-4 flex justify-center overflow-hidden">
            <motion.div
              animate={{
                x: `-${
                  index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                  index * gap +
                  margin
                }%`,
              }}
              style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
              className="flex h-20 "
            >
             {images.map((imageObj, i) => (
                <motion.button
                  key={imageObj.key}
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
                   <motion.img src={imageObj.src} className="h-full rounded-lg object-cover" />
                  </motion.button>
                ))}
            </motion.div>
          </div>

        </div>
      </div>
    </MotionConfig>
    <Footer/>
    </>
  );
}