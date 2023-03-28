'use client'

import type { NextPage } from "next";
import React from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Map from "../components/Map";

const Contact: NextPage = () => {

    return (
      <>
      <Header/>
              <h1 className="text-center text-4xl font-bold text-orange-500">Contact Us</h1>  
      <div className="grid h-full grid-cols-2 flex-col items-center justify-center p-16 py-2">
      <div><Map/></div>
      <ContactForm/>

        {/* <form className="flex" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <input type="submit" />
        </form> */}

        </div>
        </>
    )   
}

export default Contact