/**
 * App entry point (in plain react this would be the "index.js" file)
 * In this app every file that contains the  "use client" boundary is a client side component ("https://react.dev/reference/react/use-client")
 * I have also practiced different codding practices like:
 * Code splitting("https://nextjs.org/learn-pages-router/foundations/how-nextjs-works/code-splitting") so you will get to see different components inside other components
 * Make sure to head over to the next.config.js and configure your external links in the domain array
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/ui/Footer";
import { Tooltip } from "react-tooltip";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

/**
 * Clsx is just like using the $ to set the styles of a certain element based on a specific condition.
 * I will be using it for the most part of the project
 * For example:  className={`flex items-start justify-start ${ open ? "bg-red-200" : "bg-blue-200" }`}
 * Can also be: className={clsx("flex items-start justify-start", open ? "bg-red-200" : "bg-blue-200")}
 */

// Static metadata
export const metadata: Metadata = {
  title: "Home | Gerald",
  description: "Passionate software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "width-full bg-primary text-primary antialiased",
        )}
      >
        {/* Wrap the whole app in the ThemeProvider & Set some props */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="md:px-6  mx-auto flex flex-col px-6 pt-16 md:pt-16">
            {children}

            {/* <Footer /> */}
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
