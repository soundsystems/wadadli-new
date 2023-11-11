import '../styles/globals.css'
import { Unbounded } from 'next/font/google'


<link rel="manifest" href="/site.webmanifest" />
export const metadata = {
  title: {default: 'Wadadli Jerk',
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
    return (

      <html lang="en" className={unbounded.className}>
<body className='background h-full w-full pl-safe-left pr-safe-right'>
     {children}
</body>
      </html>
    );
  }