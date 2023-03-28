import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

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
  <div className="my-6 mx-auto flex-col justify-center text-center"> 
    <form onSubmit={event => {
        event.preventDefault();
        handleSubmit(fields);
    }}
        > 
<button 
  type="submit" 
  className="group relative w-48 sm:w-56 md:w-96 mx-auto inline-flex items-center justify-center divide-x divide-orange-500 rounded-xl bg-zinc-50/60 py-1 px-40 sm:px-44 sm:py-2 leading-none shadow-lg shadow-zinc-900/75 transition duration-500 hover:divide-orange-200 hover:bg-zinc-900/90 hover:shadow-md overflow-hidden"  
>         
<span 
    className="px-2 inline-flex text-xs sm:text-sm md:text-lg lg:text-xl font-semibold uppercase text-orange-500 transition duration-500 group-hover:text-orange-100" 
  > 
            Subscribe
          </span> 
          <span className="px-2 inline-flex"> 
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
                  </span> 
          <span className="px-2 ml-auto inline-flex"> 
            <InboxArrowDownIcon className="h-8 w-8 text-orange-500 transition duration-500 group-hover:text-orange-100" /> 
          </span> 
        </button> 
      {loading && "submitting"}
      {error && message}
      {success && message}
      </form> 
    
  </div>  
  );
}


