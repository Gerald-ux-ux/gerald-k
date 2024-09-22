import { PAGE_HEADER } from "@/lib/uiConstants";
import { Metadata } from "next";
import Image from "next/image";
import Family from "@/public/gallery/family.jpg";
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import WorkSection from "./components/WorkSection";
import meet from "@/public/gallery/meet.jpeg";
import { TechStack } from "./components/tech";

export const metadata: Metadata = {
  title: "About | Gerald ",
  description: "A glimpse of my work life ",
};

export default function About() {
  return (
    <main className="mx-auto  flex max-w-[700px] flex-col gap-16 px-6 md:gap-24">
      <div>
        <h1 className={PAGE_HEADER}>About Me</h1>

        <p className="animate-in text-secondary">Just a quick glimpse.</p>
      </div>
      {/* Photos to show on mobile view */}
      <div className="mb-8 lg:hidden">
        <div className="animate-in">
          <Image
            src={Family}
            alt={"family photo"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md"
          />
        </div>

        <div className="animate-in">
          <Image
            src={meet}
            alt={"family photo"}
            width={324}
            height={129}
            className="pointer-events-none absolute inset-0 -top-44 left-[20%] h-72 w-64 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
          />
        </div>
      </div>
      {/* Photos to show on desktop */}
      <div className="hidden lg:block">
        <Gallery />
      </div>

      <div className="flex animate-in flex-col gap-16 md:gap-24">
        <AboutSection />
        <TechStack />

        <WorkSection />
        <ConnectSection />
      </div>
    </main>
  );
}
