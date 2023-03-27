import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { FormEventHandler, FormEvent, useState } from "react";

export default function Subscribe() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        setErrorMsg(data.error || "Oops! Something went wrong.");
        setState("error");
      }
    } catch (e) {
      console.error("Error subscribing to newsletter", e);
      setErrorMsg("Oops! Something went wrong.");
      setState("error");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <div className="my-6 mx-auto"> 
    {state === "success" ? (
      <p className="mt-4 text-center text-xl font-medium text-green-800">
        Thanks for joining the club. You will now be notified of upcoming events.
      </p> 
    ) : (
      <form onSubmit={subscribe}> 
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
                      value={email}
                      onChange={handleChange}
                      placeholder="Join the club"
                    /> 
                  </span> 
          <span className="px-2 ml-auto inline-flex"> 
            <InboxArrowDownIcon className="h-8 w-8 text-orange-500 transition duration-500 group-hover:text-orange-100" /> 
          </span> 
        </button> 
        {state === "error" && (
          <p className="mt-3 text-center text-red-500">{errorMsg}</p> 
        )} 
      </form> 
    )} 
  </div>  
  );
}


