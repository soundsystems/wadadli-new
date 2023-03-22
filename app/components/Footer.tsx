import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { InboxArrowDownIcon } from '@heroicons/react/24/outline'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='flex flex-col p-6'>
    <button className="group relative mx-auto mb-8 flex items-center justify-center divide-x divide-orange-500 rounded-xl bg-zinc-50/60 p-4 leading-none shadow-lg shadow-zinc-900/75 transition duration-700 hover:divide-orange-200 hover:bg-zinc-900/90 hover:shadow-md">
      <span className="pr-2">
      <InboxArrowDownIcon className="h-8 w-8 text-orange-500 transition duration-500 group-hover:text-orange-100" />
      </span>
      <span className="px-2 text-lg font-semibold uppercase text-orange-500 transition duration-500 group-hover:text-orange-100 md:inline-flex lg:text-lg">
        Subscribe &rarr;
        <input className="px-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-orange-500 text-sm placeholder-orange-500" type="text" placeholder="Enter your email" />
      </span>
    </button>
   <div className="flex justify-between px-11 pb-6">
        <SocialIcon
          className="hover:scale-110"
          url="https://www.facebook.com/WadadliJerkpage/"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)"
        />
        <SocialIcon
          className="hover:scale-110"
          url="https://www.instagram.com/wadadlijerk/?hl=en"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)"
        />
        <SocialIcon
          className="hover:scale-110"
          url="mailto:wadadlijerk@gmail.com"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)"
        />
        {/* TODO: change to phone, tap to call, add phone SVG */}
        <SocialIcon
        className='hover:scale-110'
          url="tel:+13472405913"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)"
        />
    </div>
    </div>
   
  )
}

export default Footer