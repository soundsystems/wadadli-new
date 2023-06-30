import { TruckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {}

const OrderNowButton = (props: Props) => {
  return (
    <Link href="https://www.doordash.com/store/wadadli-jerk-brooklyn-24265924/" className="group relative mr-4">
    <div className="absolute -inset-1 animate-tilt rounded-xl bg-gradient-to-t from-wadadli to-orange-700 opacity-50 blur-md group-hover:opacity-30 group-hover:transition-shadow group-hover:duration-700 ">
    </div>
    <button className="group relative mx-auto flex w-full items-center divide-x divide-wadadli rounded-xl bg-zinc-50/70 py-2 text-base leading-none shadow-lg shadow-zinc-950/75 backdrop-blur-sm transition-colors duration-300 ease-linear focus:text-wadadli group-hover:divide-orange-100 group-hover:bg-zinc-950/90 group-hover:shadow-md">
      <span className="pr-2">
      <TruckIcon className="h-6 w-8 pl-2 text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-100" />
      </span>
      <span className="px-2 text-sm font-semibold text-wadadli transition-colors duration-300 ease-linear group-hover:text-orange-100 md:inline-flex">
        Order Now
      </span>
    </button>
  </Link>
  )
}

export default OrderNowButton