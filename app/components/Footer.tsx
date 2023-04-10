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
    <div className='mx-auto flex flex-col p-2'>
<Subscribe/>
    </div>
   <div className="flex justify-between px-11 pb-2">
        <SocialIcon
          className="transition duration-75 hover:scale-125"
          url="https://www.facebook.com/WadadliJerkpage/"
          fgColor="black"
          bgColor="transparent"
          // bgColor="rgba(255, 255, 255, 0.440)"
        />
        <SocialIcon
          className="transition duration-75 hover:scale-125"
          url="https://www.instagram.com/wadadlijerk/?hl=en"
          fgColor="black"
          bgColor="transparent"
          // bgColor="rgba(255, 255, 255, 0.440)"
        />
        <SocialIcon
          className="transition duration-75 hover:scale-125"
          url="mailto:wadadlijerk@gmail.com"
          fgColor="black"
          bgColor="transparent"
          // bgColor="rgba(255, 255, 255, 0.440)"
        />
        {/* TODO: submit pull request to use simple phone for tel: html */}
        {/* <SocialIcon
        className='hover:scale-110'
          url="tel:13472405913"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)" />*/}
          <a href="tel:+1 (347) 240-5913" className='h-[50px] w-[50px] text-center'>
  < PhoneIcon className="m-auto mt-3 h-[24px] w-[24px] text-black transition duration-75 hover:scale-125" />
          </a>
    </div>
   </>
  )
}

export default Footer