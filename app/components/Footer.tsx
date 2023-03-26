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
    <div className='flex flex-col p-6'>
<Subscribe/>
    </div>
   <div className="flex justify-between px-11 pb-6">
        <SocialIcon
          className="hover:scale-110"
          url="https://www.facebook.com/WadadliJerkpage/"
          fgColor="black"
          bgColor="transparent"
          // bgColor="rgba(255, 255, 255, 0.440)"
        />
        <SocialIcon
          className="hover:scale-110"
          url="https://www.instagram.com/wadadlijerk/?hl=en"
          fgColor="black"
          bgColor="transparent"
          // bgColor="rgba(255, 255, 255, 0.440)"
        />
        <SocialIcon
          className="hover:scale-110"
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
          <a
          href="tel:13472405913">
  < PhoneIcon className="h-6 w-6 mt-3 text-black" />
          </a>
    </div>
   </>
  )
}

export default Footer