'use client'

import Header from '../components/Header';
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { NextPage } from 'next';


const Shop: NextPage = () => {

return (
    <>
    <header>
    <Header/>   
    </header>       
    <div className="scrollbar-none"> 
    <div className="w-full flex items-center justify-center">
    <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    whileTap={{ scale: 0.85 }}
    whileHover={{ scale: 1.1 }}
    style={{userSelect: "none"}}
    className="text-center text-5xl font-bold text-zinc-950 hover:text-wadadli transition-colors">COMING SOON</motion.h2>
    </div>
    </div>
    <footer>
    <Footer/>
    </footer>
    </>
    );
    }  

export default Shop;