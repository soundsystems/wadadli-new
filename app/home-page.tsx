'use client';

import dynamic from "next/dynamic";
import Header from "./components/Header";
import Image from "next/image";
import menu from "../public/menu.jpeg"
import island from "../public/island.png"
import mobile from "../public/menu-mobile.png"
import Footer from "./components/Footer";

//import LogRocket from 'logrocket';
//if (typeof window === "undefined") {LogRocket.init('vdixgc/wadadli');}

export default function HomePage() {
  return (
    <>
        <Header/>
        <main>
        {/* Hero */}
        <section id="home" className="flex h-full flex-col items-center -mb-8">
           {/* <Map /> */}
          <Image src={island} alt="Wadadli Island Graphic" height={2000} width={2000} priority={true} quality={100} className="max-w-md sm:max-w-lg md:max-w-xl xl:max-w-2xl"/>
          {/* <Image src={mobile} alt="Wadadli Jerk Menu" height={6551} width={1600} className="md:hidden"/> */}
        </section>
          {/* <section id="featured" className="h-screen snap-end">
          <Featured />
        </section> */}
        </main>
        <Footer />
    </>
  );
};