import Footer from "./components/Footer";
import '../styles/globals.css'
import { Metadata } from "next";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
<body className="">
<main>
     {children}
</main>
        {/* Footer */}
</body>
      </html>
    );
  }