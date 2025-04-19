import type { Metadata } from "next";
import Navbar from "./components/Navbar"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "fyndd",
  description: "fyndd – your go-to fashion brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Use Navbar component */}
        {children}
      </body>
    </html>
  );
}
