'use client'

import type { NextPage } from 'next';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

interface MapProps extends React.PropsWithChildren<{}>{
  defaultCenter: {
    lat: number;
    lng: number;
  };
}

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  
  const defaultCenter = { lat: 40.68480406277308, lng: -73.9444458390298 };

  if (!isLoaded) return <div>Loading...</div>;

  const markerIcon = {
    url: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 384 512\' fill=\'%23FD6F00\' width=\'24px\' height=\'48px\'%3E%3Cpath d=\'M192 0C86 0 0 86 0 192c0 69.7 44.6 126.6 123.6 155.2L192 512l68.4-164.8C339.4 318.6 384 261.7 384 192 384 86 298 0 192 0zm0 277c-47.3 0-85.7-38.3-85.7-85.7 0-47.3 38.3-85.7 85.7-85.7 47.3 0 85.7 38.3 85.7 85.7 0 47.3-38.3 85.7-85.7 85.7z\' /%3E%3Ccircle cx=\'192\' cy=\'192\' r=\'53\' fill=\'%232B2726\' /%3E%3C/svg%3E',
    scaledSize: new google.maps.Size(25, 40),
  };  

  return (
    <GoogleMap
      zoom={17}
      center={defaultCenter}
      mapContainerClassName="h-96 rounded-lg"
    >
      <Marker position={defaultCenter} icon={markerIcon} />
    </GoogleMap>
  );
}

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
    : 'https://maps.google.com/place/Wadadli+Jerk/@40.6847353,-73.9445539,20.33z/data=!4m6!3m5!1s0x89c25bf027b56619:0xd79555c3b11d9932!8m2!3d40.6848676!4d-73.9444574!16s%2Fg%2F11tfn_q95s'
  : 'https://www.google.com/maps/place/Wadadli+Jerk/@40.6847353,-73.9445539,20.33z/data=!4m6!3m5!1s0x89c25bf027b56619:0xd79555c3b11d9932!8m2!3d40.6848676!4d-73.9444574!16s%2Fg%2F11tfn_q95s';

    const Contact: NextPage = () => {
      return (
        <>
          <Header/>          
          <div className="flex flex-col items-center justify-center scrollbar-none"> 
            <div className="w-full">
              {/* <div className="flex flex-col place-items-center justify-center space-x-3 md:flex-row-reverse"> */}
                <div className="mx-auto w-full max-w-7xl">
                  <div className="my-auto flex flex-col place-items-center justify-center space-x-3 md:flex-row-reverse">
                    {/* Location Info */}
                    <div className="pb-6 md:flex md:w-1/2 md:justify-center">
                      <div className="inline-block rounded-xl border bg-zinc-50/60 p-2 text-left">
                        <div className="rounded-xl bg-zinc-50 p-4">
                          <div className="flex flex-col items-start">
                            <div className="font-semibold text-zinc-950">Location:</div>
                            <address className="mb-2">
                              <a
                                className="text-sm font-bold text-wadadli transition-colors hover:text-zinc-950"
                                href={mapsLink}
                              >
                                419 Putnam Ave
                                <br />
                                Brooklyn, NY 11216
                                <br />
                                {/* Tompkins Ave & Marcy Ave<br />
                            Bedford Stuyvesant */}
                              </a>
                            </address>
                            <div>
                              <div className="font-semibold text-zinc-950">Phone Number:</div>
                              <a
                                className="text-sm font-bold text-wadadli transition-colors hover:text-zinc-950"
                                href="+1 (347) 240-5913"
                              >
                                +1 (347) 240-5913
                              </a>
                            </div>
                            <div className="mt-2">
                              <div className="font-semibold text-zinc-950">Email:</div>
                              <a
                                className="text-sm font-bold text-wadadli transition-colors hover:text-zinc-950"
                                href="mailto:wadadlijerk@gmail.com"
                              >
                                wadadlijerk@gmail.com
                              </a>
                              <div className="mt-2 text-zinc-950">
                              <div className="font-semibold text-zinc-950">Hours:</div>
                              <div className='text-wadadli inline-block'>Tue:</div> 11am-7pm
                              <div className='text-wadadli inline-block pl-1'>Wed:</div> 11am-7pm
                              <br className='md:hidden'/>
                              <div className='text-wadadli inline-block md:pl-1'>Thu:</div> 11am-9pm
                              <br className='hidden md:inline'/>
                              <div className='text-wadadli inline-block pl-1 md:pl-0'>Fri:</div> 11am-9pm
                              <br className='md:hidden'/>
                              <div className='text-wadadli inline-block md:pl-1'>Sat:</div> 11am-9pm
                              <div className='text-wadadli inline-block pl-1'>Sun:</div> 11am-7pm
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Map */}
                      <div className="h-full w-full snap-start overflow-hidden pb-6 px-4 md:pb-11 md:w-1/2">
                        <Map />
                      </div>
                  </div>
                </div>
              {/* </div> */}
              <div className='w-full px-1'>
              <ContactForm />
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    };
    

export default Contact;