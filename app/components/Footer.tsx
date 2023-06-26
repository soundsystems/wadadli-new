import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { InboxArrowDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/20/solid'
import Subscribe from './Subscribe'
import { motion } from 'framer-motion'

type Props = {}

function Footer({}: Props) {
  return (
    <>
    <div className='mx-auto flex flex-col'>
<Subscribe/>
    </div>
   <motion.div  whileHover={{ scale: 1.05}} className="flex justify-between px-6 md:px-20 py-5">
        <motion.div
        whileTap={{ scale: 0.66 }}>
        <SocialIcon
          className="rounded-full backdrop-blur-sm transition duration-75 hover:scale-125"
          url="https://www.facebook.com/WadadliJerkpage/"
          fgColor="rgba(10, 10, 10, 1.0)"
          // bgColor="transparent"
          bgColor="rgba(250, 250, 250, .30)"
        />
        </motion.div>
        <motion.div
        whileTap={{ scale: 0.66 }}>
        <SocialIcon
          className="transition duration-75 hover:scale-125"
          url="https://www.instagram.com/wadadlijerk/?hl=en"
          fgColor= "rgba(10, 10, 10, 1.0)"
          // bgColor="transparent"
          bgColor="rgba(250, 250, 250, .30)"
        />
        </motion.div>
        <motion.div
        whileTap={{ scale: 0.66}}>
        <SocialIcon
          className="rounded-full backdrop-blur-sm transition duration-75 hover:scale-125"
          url="mailto:wadadlijerk@gmail.com"
          fgColor="rgba(10, 10, 10, 1.0)"
          // bgColor="transparent"
          bgColor="rgba(250, 250, 250, .30)"
        />
        </motion.div>
        {/* TODO: submit pull request to use simple phone for tel: html */}
        {/* <SocialIcon
        className='hover:scale-110'
          url="tel:13472405913"
          fgColor="black"
          bgColor="rgba(255, 255, 255, 0.440)" />*/}
          <motion.a href="tel:+1 (347) 240-5913" className='h-[50px] w-[50px] rounded-full bg-zinc-50/30 p-6 backdrop-blur-sm transition duration-75 hover:scale-125'
                    whileTap={{scale: .66}}>
  < PhoneIcon className="-ml-3 -mt-3 h-[24px] w-[24px] text-zinc-950" />
          </motion.a>
    </motion.div>
   </>
  )
}

export default Footer