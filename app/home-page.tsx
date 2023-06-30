'use client';
/* eslint-disable tailwindcss/no-custom-classname */
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

import Map from "./components/Map";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "./components/Header";
import Image from "next/image";
import menu from "../public/menu.jpeg"
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
        {/* Header TODO: make sticky */}
        <header>
        <Header/>
        </header>
        {/* Hero */}
        <section id="menu" className="scrollbar-none flex h-full flex-col items-center">
           {/* <Map /> */}
          <Image src={menu} alt="Wadadli Jerk Menu" height={2000} width={1000}/>
        </section>

        <footer className="sticky">
        <Footer />
        </footer>

        {/* <section id="gallery" className="h-screen snap-end">
          <Gallery />
        </section> */}
        {/* Contact Us */}
    </>
  );
};