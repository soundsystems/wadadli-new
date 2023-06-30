import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
// import Lottie from "lottie-react";
import { motion } from 'framer-motion';
// import animationData from "./assets/progress-bar.json";

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
    <div className="mt-2 flex justify-center">
    <div className="mx-auto my-6">
      <form
  onSubmit={(event) => {
    event.preventDefault();
    if (!loading) {
      handleSubmit(fields);
    }
  }}
>
        
<motion.button
  type="submit"
  className="group relative mx-auto mt-4 inline-flex w-full place-content-center place-items-baseline items-center divide-wadadli whitespace-nowrap rounded-xl bg-zinc-50/70 px-4 pb-5 pt-8 shadow-lg shadow-zinc-950/75 backdrop-blur-sm transition-colors duration-300 ease-linear focus-within:drop-shadow-xl hover:divide-orange-100 hover:bg-zinc-950/90 hover:drop-shadow-xl focus:outline-none"
  disabled={success}
  whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>


  {!success ? (
    <div className="">
      <span className="text-sm font-semibold text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-100 md:text-base">
        {loading ? (
          <>
            {/* <Lottie animationData={animationData} style={{width: "24px", height: "24px"}}  loop  autoplay></Lottie> */}
            <span>submitting</span>
          </>
        ) : (
          "email"
        )}
      </span>
      <span>
        {loading ? null : (
          <input
            className="mx-2 appearance-none bg-transparent px-2 py-1 text-left text-xs font-light text-wadadli ring-1 ring-wadadli placeholder:text-center placeholder:text-wadadli focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-100" 
            id="EMAIL"
            autoFocus
            required
            type="email"
            value={fields.EMAIL}
            onChange={handleFieldChange}
            placeholder=""
          />
        )}
      </span>
    </div>
  ) : (
    <span className="text-xs font-semibold uppercase text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-100 lg:text-lg">
      {message}
    </span>
  )}
  {!success && (
      <ArrowRightCircleIcon className="h-8 w-8 text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-100 md:stroke-2" />
  )}
  {!success && (   <motion.div
        className="absolute top-0 appearance-none pl-4 pt-4 font-semibold text-zinc-950 opacity-0 transition-colors duration-300 ease-linear group-hover:text-wadadli"
        animate={{ opacity: 1, y: -10 }}
        transition={{   ease: "linear",
        duration: .08,
        x: { duration: .15 }}}
        style={{ pointerEvents: 'none' }}
        whileHover={{}}>
      <h3 className="">
      Join the Family
      </h3>
      </motion.div>)}
</motion.button>

        <div className="mt-2 w-auto text-center text-zinc-950">
          {error && <span>{message}</span>}
        </div>
      </form>
    </div>
    </div>
  );
}
