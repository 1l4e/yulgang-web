// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import Header from "@/components/sections/headers";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import background from '@/public/bg2.jpg';
import { NextAuthProvider } from "./providers";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
import NextTopLoader from 'nextjs-toploader';

const title = "Hiệp khách giang hồ";
const description =
  "Một sản phẩm của chậm thôi.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL(process.env.PUBLIC_HOME),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.variable} `}>
        
        <NextAuthProvider >
        <NextTopLoader />
        <Header />
        <Toaster />
        <Suspense fallback="Loading...">
          <AuthStatus />
        </Suspense>

        <Hero />
        <main className="flex flex-col min-h-screen pb-4" style={{
      backgroundImage: `url(${background.src})`,
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover"
    }}>
           <section className="bg-transparent flex items-center justify-center relative mt-24 md:mt-24">
           {children}
           </section>
        </main>
        <Footer />
        </NextAuthProvider>
       
      </body>
    </html>
  );
}
