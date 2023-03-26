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
    <div>
      {state === "success" ? (
        <p className="mt-4 text-xl font-medium text-green-800 text-center">
          Thanks for joining the club. You will now be notified of upcoming events.
        </p>
      ) : (
        <form onSubmit={subscribe} className="mb-9 mt-4 flex flex-col">
          <button
            type="submit"
            className="group relative mx-auto mb-8 flex items-center justify-center divide-x divide-orange-500 rounded-xl bg-zinc-50/60 p-4 leading-none shadow-lg shadow-zinc-900/75 transition duration-700 hover:divide-orange-200 hover:bg-zinc-900/90 hover:shadow-md"
          >
            <span className="px-2 text-lg font-semibold uppercase text-orange-500 transition duration-500 group-hover:text-orange-100 md:inline-flex lg:text-lg">
              Subscribe &rarr;
              <input
                className="bg-transparent px-4 text-sm text-orange-500 placeholder:text-orange-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="EMAIL"
                autoFocus
                required
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Join the club"
              />
            </span>
            <span className="pl-2">
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
