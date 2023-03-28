'use client'

import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import Lottie from "lottie-react";
import loadingSpinner from "../animations/loading-spinner.json";

export default function Subscribe() {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL as string;
  
  const {
    loading,
    error,
    success,
    message,
    handleSubmit
  } = useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
  <div className="my-6 mx-auto"> 
    <form onSubmit={event => {
        event.preventDefault();
        handleSubmit(fields);
    }}
        > 
<button 
  type="submit" 
  className="group relative mx-auto inline-flex w-48 items-center justify-center divide-x divide-orange-500 overflow-hidden rounded-xl bg-zinc-50/60 py-1 px-40 leading-none shadow-lg shadow-zinc-900/75 transition duration-500 hover:divide-orange-200 hover:bg-zinc-900/90 hover:shadow-md sm:w-56 sm:px-44 sm:py-2 md:w-96"  
>         
<span 
    className="inline-flex px-2 text-xs font-semibold uppercase text-orange-500 transition duration-500 group-hover:text-orange-100 sm:text-sm md:text-lg lg:text-xl" 
  > 
            {loading ? (
              <>
                <Lottie animationData={loadingSpinner} style={{width: "24px", height: "24px"}}  loop  autoplay></Lottie>
                <span>submitting</span> 
              </>
            ) : "Subscribe" }
          </span> 
          <span className="inline-flex px-2"> 
            {loading ? null : (
              <input 
                className="bg-transparent p-1 text-center text-sm text-orange-500 placeholder:text-orange-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        id="EMAIL"
                        autoFocus
                        required
                        type="email"
                        value={fields.EMAIL}
                        onChange={handleFieldChange}
                        placeholder="Join the club"
                      /> 
            )} 
                  </span> 
          <span className="ml-auto inline-flex px-2"> 
            <InboxArrowDownIcon className="h-8 w-8 text-orange-500 transition duration-500 group-hover:text-orange-100" /> 
          </span> 
        </button> 
        <div className="mt-2 text-center font-medium text-zinc-900">
      {error && <span>{message}</span>}
      {success && <span>{message}</span>}
    </div>
      </form> 
    
  </div>  
  );
            }