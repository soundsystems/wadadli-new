'use client';

import dynamic from "next/dynamic";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

//import LogRocket from 'logrocket';
//if (typeof window === "undefined") {LogRocket.init('vdixgc/wadadli');}

export default function HomePage() {
  return (
    <>
        <Header/>
        <main>
  <section id="events" className="flex h-full flex-col items-center">
    <div className="carousel max-w-2xl">
      <div id="item1" className="carousel-item w-full pb-4">
        <Image src={"/anniversary-event.jpeg"} alt="Wadadli 2nd Anniversary Sip & Paint Party" height={1687} width={1687} priority={true} quality={100} className="w-full rounded-3xl"/>
      </div> 
      <div id="item2" className="carousel-item w-full pb-4">
        <Image src={"/anniversary-event2.jpeg"} alt="Wadadli 2nd Anniversary Sip & Paint Party" height={1687} width={1687} priority={true} quality={100} className="w-full rounded-3xl"/>
      </div> 
      <div id="item3" className="carousel-item w-full pb-4">
        <Image src={"/anniversary-event3.jpeg"} alt="Wadadli 2nd Anniversary Sip & Paint Party" height={1687} width={1687} priority={true} quality={100} className="w-full rounded-3xl"/>
      </div> 
    </div> 
{/* <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div> */}
        </section>
          {/* <section id="featured" className="h-screen snap-end">
          <Featured />
        </section> */}
        </main>
        <Footer />
    </>
  );
};