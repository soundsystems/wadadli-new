/* eslint-disable tailwindcss/no-custom-classname */
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
        <header id='top'>
          <Header/>    
        </header>      
        <main>
          <div className="scrollbar-none flex flex-col items-center justify-center"> 
            <div className="w-full snap-normal">
              {/* <div className="flex flex-col place-items-center justify-center space-x-3 md:flex-row-reverse"> */}
                <div className="mx-auto md:max-w-5xl lg:max-w-7xl">
                  <div className="my-auto flex flex-col place-items-center justify-center md:flex-row-reverse">
                    {/* Location Info */}
                    <div className="w-5/6 md:w-1/2 md:px-8" id='location'>
                    <div className="rounded-xl border bg-zinc-50/60 text-left backdrop-blur-sm">
                        <div className="m-2 rounded-xl bg-zinc-50 p-4">
                          <div className="flex flex-col items-center text-center">
                          <h3 className="text-center text-sm font-bold text-zinc-950 md:text-lg">Wadadli Jerk & Wadadli AM</h3>
                        {/* addy */}
                            <address className="mb-2">
                              <a
                                className="text-sm font-bold text-wadadli transition-colors duration-200 ease-linear hover:text-zinc-950 md:text-base lg:text-lg"
                                href={mapsLink}
                              >
                                419 Putnam Ave
                                <br />
                                Brooklyn, NY 11216
                                <br />
                                {/* Tompkins Ave & Marcy Ave <br />
                            Bedford Stuyvesant */}
                              </a>
                            </address>
                            {/* phone */}
                              <a
                                className="text-xs font-semibold text-wadadli transition-colors duration-200 ease-linear hover:text-zinc-950 md:text-sm"
                                href="+1 (347) 240-5913"
                              >
                                +1 (347) 240-5913
                              </a>
                              {/* email */}
                              <a
                                className="text-xs font-semibold text-wadadli transition-colors duration-200 ease-linear hover:text-zinc-950 md:text-sm"
                                href="mailto:wadadlijerk@gmail.com"
                              >
                                wadadlijerk@gmail.com
                              </a>
                              </div>
                              {/* hours */}
                              <ol className="mt-2 text-xs text-zinc-950 md:text-sm lg:text-base">
                              <h3 className="text-sm font-medium text-zinc-950 md:text-lg">Hours</h3>
                              <li className='inline-block text-wadadli'>Mon: </li> Closed
                              <br/>
                              <li> <span className='inline-block text-wadadli'>Tue - Wed: </span> 2:00pm - 9:00pm </li>
                              <li> <span className='inline-block text-wadadli'>Thu - Sun: </span> 11:00am - 9:00pm </li> 
                              
                              <div className='mt-2'>
                              <li> <span className='text-wadadli'>Breakfast/Brunch: </span> 11:00am - 4:00pm </li>
                              <li> <span className='text-wadadli'>Lunch: </span> 11:00am - 9:00pm </li>
                              </div>
                              </ol>
                          </div>
                        </div>
                    </div>
                    {/* Map */}
                      <div className="h-full w-5/6 overflow-hidden py-4 md:w-1/2 md:p-8">
                        <Map />
                      </div>
                  </div>
                </div>
              {/* </div> */}
              <div className='w-full' id='contact-form' >
              <ContactForm />
              </div>
            </div>
          </div>
        </main>
          <Footer />
        </>
      );
    };
    

export default Contact;