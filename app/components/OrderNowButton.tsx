import { TruckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {}

const OrderNowButton = (props: Props) => {
  return (
    <Link href="https://www.doordash.com/store/wadadli-jerk-brooklyn-24265924/" className="group relative mr-4">
    <div className="absolute -inset-1 animate-tilt rounded-xl bg-gradient-to-t from-orange-300 via-wadadli to-orange-600 opacity-40 blur-md group-hover:opacity-20 group-hover:transition-shadow">
    </div>
    <button className="group relative mx-auto flex w-full items-center divide-x divide-zinc-950/90 rounded-xl bg-zinc-50/70 py-2 text-base leading-none shadow-lg shadow-zinc-950/75 backdrop-blur-sm transition-shadow focus:text-wadadli group-hover:divide-wadadli group-hover:bg-zinc-950/90 group-hover:shadow-md dark:bg-zinc-950/90 dark:divide-wadadli dark:group-hover:divide-zinc-50">
      <span className="pr-2">
      <TruckIcon className="h-6 w-8 pl-2 text-wadadli transition-colors group-hover:text-orange-50 dark:text-orange-50 dark:group-hover:text-wadadli" />
      </span>
      <span className="px-2 text-sm font-semibold text-wadadli transition-colors group-hover:text-zinc-50 dark:text-zinc-50 dark:group-hover:text-wadadli md:inline-flex">
        Order Now
      </span>
    </button>
  </Link>
  )
}

export default OrderNowButton