import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/footer";
import Future from "@/component/build-future";
import { Inter } from "next/font/google";
import AOSWrapper from "@/component/AOSWrapper"; 

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
    <html lang="en">
      <body className={`${inter.variable} antialiased`} cz-shortcut-listen="true">
        <AOSWrapper>
          <Header />
          {children}
          <Future />
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
