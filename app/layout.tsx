import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notepad_Pro | Redix Systems",
  description: "Your Modern Code & Notes Editor. Experience seamless multi-tab editing, dark mode, and a built-in file explorer.",
};

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
