'use client'

import type { NextPage } from "next";
import React from "react";
import {useForm } from "react-hook-form";
import Header from "../components/Header";
import Map from "../components/Map";

const Contact: NextPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
      <>
      <Header/>
              <h1 className="text-4xl text-orange-500 font-bold text-center font-bold">Contact Us</h1>  
      <div className="p-16 grid grid-cols-2 h-full flex-col items-center justify-center py-2">
     <div><Map/></div>
      <form>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <input type="text" />
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>

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