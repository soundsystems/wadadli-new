import '../styles/globals.css'
import { Unbounded } from 'next/font/google'
import { getImageProps } from 'next/image'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
 
function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

<link rel="manifest" href="/site.webmanifest" />
export const metadata = {
  title: {
  default: 'Wadadli Jerk',
  template: '%s | Wadadli Jerk',
},
  description: 'Authentic Antiguan Jerk Cuisine made fresh in the heart of Brooklyn, NY',

manifest: "/site.webmanifest",
/* appleWebApp: {
  title: 'Wadadli Jerk',
  statusBarStyle: 'black-translucent',
  startupImage: [
    '/assets/startup/apple-touch-startup-image-768x1004.png',
    {
      url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
      media: '(device-width: 768px) and (device-height: 1024px)',
    },
  ],
}, */
verification: {
  google: '5Oh5qsbuJLK9CLudPwoUuWGtz9elOE4T-qnup9H90Og',
/*   yandex: 'yandex',
  yahoo: 'yahoo',
  other: {
    me: ['my-email', 'my-link'],
  }, */
},
}
;

const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
});
 
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    // How can I add a listener that changes the background image srcSet with only built in web apis? useState and useEffect are not allowed.
  // const common = { alt: 'treasure map wallpaper', width: 3000, height: 4000 }
  // const { props: { srcSet: dark } } = getImageProps({ ...common, src: '/bg-dark.png' })
  // const { props: { srcSet: light, ...rest } } = getImageProps({ ...common, src: '/bg.webp' })

    const { props: { srcSet } } = getImageProps({ alt: '', 
                                                  width: 3000, 
                                                  height: 2000, 
                                                  src: '/bg.png', 
                                                  quality: 90,
                                                  priority: true, 
                                                  className: 'dark'
                                                })
    
    const backgroundImage = getBackgroundImage(srcSet)
  
    const style = { height: '100vh', 
                    width: '100vw', 
                    backgroundColor: '#BFBFBF',
                    // '#D4A883', 
                    backgroundPosition: 'center top', 
                    backgroundSize: '100%',
                    backgroundRepeat: 'no repeat',  
                    backgroundImage 
                  }

    return (

<html lang="en" className={unbounded.className}>
  <body style={style} className='pl-safe-left pr-safe-right'>
     {children}
     <Analytics />
     <SpeedInsights/>
  </body>
</html>
    );
  }