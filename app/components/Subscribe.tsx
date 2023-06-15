import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { useState } from "react";
import Lottie from "lottie-react";
// import loadingSpinner from "/animations/loading-spinner.json";

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

  // useEffect(() => {
  //   if (success) {
  //     console.log("Success:", message);
  //   } else if (error) {
  //     console.error("Error:", message);
  //   }
  // }, [success, error, message]);

  return (
    <div className="flex justify-center">
    <div className="mx-auto my-6">
      <h1 className="text-2xl font-bold text-center text-wadadli">
        join the family
      </h1>
      <form
  onSubmit={(event) => {
    event.preventDefault();
    if (!loading) {
      handleSubmit(fields);
    }
  }}
>
        
<button
  type="submit"
  className="group relative inline-flex w-full items-center justify-center divide-x divide-wadadli overflow-hidden whitespace-nowrap rounded-xl bg-zinc-50/70 backdrop-blur-sm py-2 shadow-lg shadow-zinc-950/75 transition duration-500 hover:divide-orange-100 hover:bg-zinc-950/90 hover:shadow-md sm:w-56 sm:px-44 sm:py-2 md:w-96"
  disabled={success}
>
  {!success ? (
    <div className="leading-none">
      <span className="inline-flex px-2 font-semibold text-wadadli transition duration-500 group-hover:text-orange-100 sm:text-sm md:text-lg lg:text-xl">
        {loading ? (
          <>
            {/* <Lottie animationData={loadingSpinner} style={{width: "24px", height: "24px"}}  loop  autoplay></Lottie> */}
            <span>submitting</span>
          </>
        ) : (
          "subscribe"
        )}
      </span>
      <span className="inline-flex px-2">
        {loading ? null : (
          <input
            className="bg-transparent p-1 text-left text-sm font-bold text-wadadli placeholder:text-center placeholder:text-wadadli focus:border-transparent focus:outline-none focus:ring-2 focus:ring-wadadli"
            id="EMAIL"
            autoFocus
            required
            type="email"
            value={fields.EMAIL}
            onChange={handleFieldChange}
            placeholder="email"
          />
        )}
      </span>
    </div>
  ) : (
    <span className="inline-flex px-2 text-xs font-semibold uppercase text-wadadli transition duration-500 group-hover:text-orange-100 lg:text-lg">
      {message}
    </span>
  )}
  {!success && (
    <span className="ml-auto inline-flex px-2">
      <ArrowRightIcon className="h-6 w-6 text-wadadli transition duration-500 group-hover:text-orange-100 md:stroke-2" />
    </span>
  )}
</button>

        <div className="mt-2 w-auto text-center text-zinc-950">
          {error && <span>{message}</span>}
        </div>
      </form>
    </div>
    </div>
  );
}
