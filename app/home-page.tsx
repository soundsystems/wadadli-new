'use client';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

import type { NextPage } from "next";
import Map from "./components/Map";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "./components/Header";
import Image from "next/image";
import bgImage from "../public/bg.webp";

export const metadata: Metadata = {
    title: 'Welcome to Wadadli Jerk',
    description: 'Authentic Antiguan Cuisine',
    viewport: "width=device-width, initial-scale=1, user-scalable=no"};
    // <meta name="theme-color" content="#000000" />
    // <meta name="apple-mobile-web-app-capable" content="yes" />
    // <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    // <meta name="apple-mobile-web-app-title" content="Wadadli Jerk" />
    // <link rel="icon" href="/favicon.ico" />
    // <link rel="apple-touch-icon" href="/logo192.png" />
    // <link rel="manifest" href="/manifest.json" /> 
//import LogRocket from 'logrocket';

//if (typeof window === "undefined") {LogRocket.init('vdixgc/wadadli');}

//Lazy load the gallery section
const Gallery = dynamic(() => import('./components/Gallery'));


export default function HomePage() {
  return (
    <>
        {/* <Image
        src={bgImage}
        alt="background treasure map texture"
        fill
        className="pointer-events-none z-0 h-screen w-screen object-cover object-center"/> */}
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Map />
        </section>

        {/* Menu
        <section id="menu" className="snap-center"></section>  */}

        {/* Gallery */}
        <section id="gallery" className="h-screen snap-end">
          <Gallery />
        </section>
        {/* Contact Us */}
        <section id="contact" className="snap-center"></section>
    </>
  );
};