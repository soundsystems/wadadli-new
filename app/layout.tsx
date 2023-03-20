import Footer from "./components/Footer";
import '../styles/globals.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">

<body className="-z-10 mx-auto h-screen snap-y snap-mandatory overflow-scroll text-zinc-50">
<main>
     {children}
</main>
        {/* Footer */}
        <Footer />
</body>
      </html>
    );
  }