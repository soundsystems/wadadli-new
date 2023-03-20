import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Footer({}: Props) {
  return (
    <div>
              <SocialIcon
          className="hover:scale-110"
          url="https://www.facebook.com/WadadliJerkpage/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:scale-110"
          url="https://www.instagram.com/wadadlijerk/?hl=en"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:scale-110"
          url="https://www.yelp.com/biz/wadadli-jerk-brooklyn-3"
          fgColor="white"
          bgColor="transparent"
        />
    </div>
  )
}

export default Footer