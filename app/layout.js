import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/footer";
import Future from "@/component/build-future";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Skills 2 Evolve",
  description: "Skills 2 Evolve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
        className={`${inter.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Future />
        <Footer />
      </body>
    </html>
  );
}
