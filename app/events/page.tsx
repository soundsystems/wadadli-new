'use client';

import dynamic from "next/dynamic";
import Header from "../components/Header";
import Image from "next/image";
import mobile from "../public/menu-mobile.png"
import Footer from "../components/Footer";
import { BackgroundGradient } from "../components/ui/background-gradient";

//import LogRocket from 'logrocket';
//if (typeof window === "undefined") {LogRocket.init('vdixgc/wadadli');}

export default function HomePage() {
  return (
    <>
        <Header/>
        <main>
        {/* Hero */}
        <section id="menu" className="flex h-full flex-col items-center">
           {/* <Map /> */}
          <Image src={"/anniversary-event.jpeg"} alt="Wadadli 2nd Anniversary Sip & Paint Party" height={1687} width={1687} priority={true} quality={100} className="max-w-2xl rounded-3xl"/>
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