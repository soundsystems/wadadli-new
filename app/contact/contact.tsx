import type { NextPage } from "next";
import React from "react";
import {useForm } from "react-hook-form";

const Contact: NextPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
      <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <input type="submit" />
        </form>
        </div>
        </>
    )   
}

export default Contact