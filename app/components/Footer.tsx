import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { InboxArrowDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/20/solid'
import Subscribe from './Subscribe'
type Props = {}

function Footer({}: Props) {
  return (
    <>
    <div className='mx-auto flex flex-col pt-2'>
<Subscribe/>
    </div>
   <div className="flex justify-between px-11 pt-6 pb-3">
        <SocialIcon
          className="transition duration-75 hover:scale-125 backdrop-blur-sm rounded-full"
          url="https://www.facebook.com/WadadliJerkpage/"
          fgColor="rgba(10, 10, 10, 1.0)"
          // bgColor="transparent"
          bgColor="rgba(250, 250, 250, .30)"
        />
        <SocialIcon
          className="transition duration-75 hover:scale-125"
          url="https://www.instagram.com/wadadlijerk/?hl=en"
          fgColor= "rgba(10, 10, 10, 1.0)"
          // bgColor="transparent"
          bgColor="rgba(250, 250, 250, .30)"
        />
        <SocialIcon
          className="transition duration-75 hover:scale-125 backdrop-blur-sm rounded-full"
          url="mailto:wadadlijerk@gmail.com"
          fgColor="rgba(10, 10, 10, 1.0)"
          // bgColor="transparent"
          bgColor="rgba(250, 250, 250, .30)"
        />
        {/* TODO: submit pull request to use simple phone for tel: html */}
        {/* <SocialIcon
        className='hover:scale-110'
          url="tel:13472405913"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)" />*/}
          <a href="tel:+1 (347) 240-5913" className='h-[50px] w-[50px] bg-zinc-50/30 backdrop-blur-sm rounded-full p-6 transition duration-75 hover:scale-125'>
  < PhoneIcon className="h-[24px] w-[24px] -mt-3 -ml-3 text-zinc-950" />
          </a>
    </div>
   </>
  )
}

export default Footer