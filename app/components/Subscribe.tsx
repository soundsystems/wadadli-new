import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { SpinnerInfinity } from 'spinners-react';
import { motion } from 'framer-motion';

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
  className={`group relative mx-auto inline-flex w-auto place-content-center place-items-baseline items-center divide-wadadli whitespace-nowrap rounded-xl bg-zinc-50/70 px-4 pb-5 pt-10 shadow-lg shadow-zinc-950/75 backdrop-blur-sm transition-colors duration-300 ease-linear focus-within:drop-shadow-xl hover:divide-orange-50 hover:bg-zinc-950/90 hover:drop-shadow-xl focus:outline-none dark:bg-zinc-950/90 ${error ? 'hidden' : ''}`}
  disabled={success}
  whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>

  {!success ? (
    <div className="">
      <span className="text-sm font-semibold text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-50 md:text-base">
        {loading ? (
            <SpinnerInfinity size={50} thickness={148} speed={140} color="rgba(253, 111, 0, 1)" secondaryColor="rgba(253, 111, 0, 0.08)" />
        ) : (
          "email"
        )}
      </span>
      <span>
        {loading ? null : (
          <input
            className="mx-2 w-48 appearance-none bg-transparent px-2 py-1 text-left text-[1rem] font-light text-wadadli ring-1 ring-wadadli placeholder:text-center placeholder:text-wadadli focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-50 md:w-auto" 
            id="EMAIL"
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
    <span className="text-xs font-semibold uppercase text-wadadli dark:text-orange-50 transition-colors duration-300 ease-linear group-hover:text-orange-50 dark:group-hover:text-wadadli lg:text-lg">
      {message}
    </span>
  )}
  {!success && (
      <ArrowRightCircleIcon className={`h-8 w-8 text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-50 md:stroke-2 ${loading ? 'hidden' : ''}`} />
  )}
  {!success && (   <motion.div
        className="absolute top-0 appearance-none pl-4 pt-4 font-semibold text-zinc-950 opacity-0 transition-colors duration-300 ease-linear group-hover:text-wadadli dark:text-zinc-50 dark:group-hover:text-wadadli"
        animate={{ opacity: 1, y: -10 }}
        transition={{   ease: "linear",
        duration: .08,
        x: { duration: .15 }}}
        style={{ pointerEvents: 'none' }}
        whileHover={{}}>
      <h3 className={`${loading ? 'hidden' : ''}`}>
      Join the Family
      </h3>
      </motion.div>)}
</motion.button>

        <div className="mx-auto mt-2 flex w-auto flex-wrap items-center text-center text-zinc-950 dark:text-wadadli">
          {error && <span>Please toggle <br/> <span className="font-semibold">Turn Off Content Blockers</span> <br/> if using Safari on iOS</span>}
        </div>
      </form>
    </div>
    </div>
  );
}
