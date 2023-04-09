'use client'

import type { NextPage } from 'next';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Map from '../components/Map';

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
              <div className="inline-block rounded-lg border bg-zinc-50/60 p-4 text-left shadow outline-orange-500 focus:shadow-orange-500 focus:outline-none">
                <div className='bg-white p-4 rounded-lg'>
                <div className="flex flex-col items-start">
                <div className="font-semibold">Address:</div>
                <address className='mb-2'>
                  419 Putnam Ave<br />
                  Brooklyn, NY 11216<br />
                  Tompkins Ave & Marcy Ave<br />
                  Bedford Stuyvesant
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
