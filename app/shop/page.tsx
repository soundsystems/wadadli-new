/* eslint-disable tailwindcss/no-custom-classname */
'use client'

import Header from '../components/Header';
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { NextPage } from 'next';
import Image from 'next/image';


const Shop: NextPage = () => {

return (
    <>
    <Header/>     
    <main>
    <div className="flex w-full flex-col items-center justify-center">
    <motion.div     
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    whileTap={{ scale: 0.6 }}
    whileHover={{ scale: 1.55 }}
    drag
    dragElastic={0.3}
    dragConstraints={{ top: 10, left: 0, right: 0, bottom: 20 }}
    style={{userSelect: "none"}} >
    <Image src={'/./Card.gif'} alt='spinning Wadadli logo card' width={500} height={500} unoptimized/>
    </motion.div>
    <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    whileTap={{ scale: 0.85 }}
    whileHover={{ scale: 1.1 }}
    style={{userSelect: "none"}}
    className="text-center text-5xl font-bold text-zinc-950 transition-colors duration-300 ease-linear hover:text-wadadli">COMING SOON</motion.h2>
    </div>
    </main>
    <Footer/>
    </>
    );
    }  

export default Shop;