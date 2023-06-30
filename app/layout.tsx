import '../styles/globals.css'
import { Unbounded } from 'next/font/google'


<link rel="manifest" href="/site.webmanifest" />
export const metadata = {
  title: 'Welcome to Wadadli',
  description: 'Wadadli Jerk is a family owned and operated business that specializes in authentic Jamaican Jerk cuisine. We are located in the heart of the Brooklyn, New York.',
  icons: {
    icon: "/_next/static/media/metadata/apple-touch-icon.png",
    // icon: "/_next/static/media/metadata/favicon-32x32.png",
    // icon: "/_next/static/media/metadata/favicon-16x16.png",
  },
// manifest: "/site.webmanifest",
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
<body className='background'>
     {children}
</body>
      </html>
    );
  }