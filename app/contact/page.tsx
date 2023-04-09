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
    ? 'maps://maps.apple.com/?daddr=40.68452871196172,-73.94436153324439'
    : 'https://maps.google.com/maps?daddr=40.68452871196172,-73.94436153324439'
  : 'https://www.google.com/maps/place/Wadadli+Jerk/@40.6848716,-73.9470323,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25bf027b56619:0xd79555c3b11d9932!8m2!3d40.6848676!4d-73.9444574!16s%2Fg%2F11tfn_q95s';


const Contact: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="@container md:@container/lg">
          <div className="my-8 flex flex-col items-center md:flex-row md:space-x-8">
            <div className="w-full grow md:w-2/3">
              <Map />
            </div>
            <div className="w-full md:w-1/3">
              <div className="inline-block rounded-lg border bg-zinc-50/60 p-4 text-left">
                <div className='bg-white p-4 rounded-lg'>
                <div className="flex flex-col items-start">
                <div className="font-semibold">Location:</div>
                <address className="mb-2">
                <a href={mapsLink}>
                  419 Putnam Ave<br />
                  Brooklyn, NY 11216<br />
                  Tompkins Ave & Marcy Ave<br />
                  Bedford Stuyvesant
                </a>
                </address>
                <div>
                  <div className="font-semibold">Phone Number:</div>
                  <a href="tel:(917) 687-1508">(917) 687-1508</a>
                </div>
                <div className='mt-2'>
                  <div className="font-semibold">Email:</div>
                  <a href="mailto:wadadlijerk@gmail.com">wadadlijerk@gmail.com</a>
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
