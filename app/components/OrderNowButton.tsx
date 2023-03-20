import { TruckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {}

const OrderNowButton = (props: Props) => {
  return (
    <Link href="https://www.doordash.com/store/wadadli-jerk-brooklyn-24265924/" className="group relative mr-4">
    <div className="absolute -inset-0.5 animate-tilt rounded-md bg-gradient-to-br from-orange-600 to-zinc-900 opacity-30 blur-sm transition duration-1000 group-hover:-inset-1 group-hover:opacity-40 group-hover:duration-700 ">
    </div>
    <button className="group relative flex items-center divide-x divide-orange-500 rounded-xl bg-zinc-50/60 py-1 px-2 leading-none shadow-lg shadow-zinc-900/75 transition duration-700 hover:divide-orange-200 hover:bg-zinc-900/90 hover:shadow-md">
      <span className="pr-2">
      <TruckIcon className="h-8 w-8 text-orange-500 transition duration-500 group-hover:text-orange-100" />
      </span>
      <span className="pl-2 text-lg font-semibold uppercase text-orange-500 transition duration-500 group-hover:text-orange-100 md:inline-flex lg:text-lg">
        &larr; Order Delivery
      </span>
    </button>
  </Link>
  )
}

export default OrderNowButton