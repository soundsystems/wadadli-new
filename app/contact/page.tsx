'use client'

import type { NextPage } from 'next';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Map from '../components/Map';


function isMobileDevice() {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
}
function isIOSDevice() {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const mapsLink = isMobileDevice()
  ? isIOSDevice()
    ? 'maps://maps.apple.com/?q=Wadadli+Jerk&daddr=40.68452871196172,-73.94436153324439'
    : 'https://maps.google.com/maps?daddr=40.68452871196172,-73.94436153324439'
  : 'https://www.google.com/maps?q=419+Putnam+Ave+Brooklyn,+NY+11216';

const Contact: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto snap-mandatory snap-start px-4">
        <div className="@container md:@container/lg">
          <div className="my-8 flex flex-col items-center md:flex-row md:space-x-8">
            <div className="w-full grow md:w-2/3">
              <Map />
            </div>
            <div className="w-full md:w-1/3">
              <div className="inline-block rounded-xl border bg-zinc-50/60 p-2 text-left">
                <div className='rounded-xl bg-white p-4'>
                <div className="flex flex-col items-start">
                <div className="font-medium">Location:</div>
                <address className="mb-2">
                <a className='text-sm font-bold text-orange-500 hover:text-orange-200 transition-colors' href={mapsLink}>
                  419 Putnam Ave<br />
                  Brooklyn, NY 11216<br />
                  {/* Tompkins Ave & Marcy Ave<br />
                  Bedford Stuyvesant */}
                </a>
                </address>
                <div>
                  <div className="font-medium">Phone Number:</div>
                  <a className='text-sm font-bold text-orange-500 hover:text-orange-200 transition-colors' href="+1 (347) 240-5913">+1 (347) 240-5913</a>
                </div>
                <div className='mt-2'>
                  <div className="font-medium">Email:</div>
                  <a className='text-sm font-bold text-orange-500 hover:text-orange-200 transition-colors' href="mailto:wadadlijerk@gmail.com">wadadlijerk@gmail.com</a>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
            <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
