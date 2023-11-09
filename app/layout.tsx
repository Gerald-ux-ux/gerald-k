import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Gerald",
  description: "Passionate front-end software developer",
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
          "antialiased bg-primary text-primary width-full"
        )}
      >
        <Navigation />

        <div className="flex max-w-[700px] px-6 pt-16 mx-auto md:pt-20 md:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
