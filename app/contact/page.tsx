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
            <div className="w-full md:w-2/3">
              <Map />
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex flex-col items-center md:items-start">
                <div className="font-semibold">Full Address:</div>
                <address>
                  419 Putnam Ave<br />
                  Brooklyn, NY 11216<br />
                  Tompkins Ave & Marcy Ave<br />
                  Bedford Stuyvesant
                </address>
                <div>
                  <div className="font-semibold">Phone Number:</div>
                  <a href="tel:(917) 687-1508">(917) 687-1508</a>
                </div>
                <div>
                  <div className="font-semibold">Email:</div>
                  <a href="mailto:wadadlijerk@gmail.com">wadadlijerk@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
