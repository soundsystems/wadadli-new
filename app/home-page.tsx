'use client';

import Map from "./components/Map";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "./components/Header";
import Image from "next/image";
import menu from "../public/menu.jpeg"
import mobile from "../public/menu-mobile.png"
import bgImage from "../public/bg.webp";
import Footer from "./components/Footer";

//import LogRocket from 'logrocket';

//if (typeof window === "undefined") {LogRocket.init('vdixgc/wadadli');}

export default function HomePage() {
  return (
    <>
        {/* <Image
        src={bgImage}
        alt="background treasure map texture"
        fill
        className="pointer-events-none z-0 h-screen w-screen object-cover object-center"/> */}
        <Header/>
        <main className="pt-safe-top">
        {/* Hero */}
        <section id="menu" className="flex h-full flex-col items-center">
           {/* <Map /> */}
          <Image src={menu} alt="Wadadli Jerk Menu" height={2000} width={1000} className="md:rounded-3xl"/>
          {/* <Image src={mobile} alt="Wadadli Jerk Menu" height={6551} width={1600} className="md:hidden"/> */}
        </section>
        </main>
        <Footer />

        {/* <section id="gallery" className="h-screen snap-end">
          <Gallery />
        </section> */}
        {/* Contact Us */}
    </>
  );
};