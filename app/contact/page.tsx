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
    url: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23F97315\' width=\'50px\' height=\'50px\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\' /%3E%3C/svg%3E',
    scaledSize: new google.maps.Size(30, 30),
  };

  return (
    <GoogleMap
      zoom={17}
      center={defaultCenter}
      mapContainerClassName="w-11/12 h-96 rounded-lg"
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
          <div className="flex flex-col items-center justify-center">
            <div className="w-full">
              <div className="flex flex-col place-items-center justify-center space-x-3 md:flex-row md:justify-center">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="my-auto flex flex-col place-items-center justify-center space-x-3 md:flex-row md:justify-center">
                    {/* Map */}
                      <div className="h-full w-full snap-start overflow-hidden pb-6 pl-14 pr-6 md:ml-48 md:pb-11">
                        <Map />
                      </div>
                    {/* Location Info */}
                    <div className="w-full px-24 pb-6 md:pl-0">
                      <div className="inline-block rounded-xl border bg-zinc-50/60 p-2 text-left">
                        <div className="rounded-xl bg-white p-4">
                          <div className="flex flex-col items-start">
                            <div className="font-semibold">Location:</div>
                            <address className="mb-2">
                              <a
                                className="text-sm font-bold text-orange-500 transition-colors hover:text-orange-200"
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
                              <div className="font-semibold">Phone Number:</div>
                              <a
                                className="text-sm font-bold text-orange-500 transition-colors hover:text-orange-200"
                                href="+1 (347) 240-5913"
                              >
                                +1 (347) 240-5913
                              </a>
                            </div>
                            <div className="mt-2">
                              <div className="font-semibold">Email:</div>
                              <a
                                className="text-sm font-bold text-orange-500 transition-colors hover:text-orange-200"
                                href="mailto:wadadlijerk@gmail.com"
                              >
                                wadadlijerk@gmail.com
                              </a>
                            </div>
                          </div>
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