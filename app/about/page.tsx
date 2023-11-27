import { PAGE_HEADER } from "@/lib/uiConstants";
import { Metadata } from "next";
import Image from "next/image";
import Family from "@/public/gallery/family.jpg";
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import WorkSection from "./components/WorkSection";

export const metadata: Metadata = {
  title: "About | Gerald ",
  description: "I am a passionate front-end developer",
};

export default function About() {
  return (
    <main className="flex  px-6 flex-col mx-auto max-w-[700px] gap-16 md:gap-24">
      <div>
        <h1 className={PAGE_HEADER}>About Me</h1>

        <p className="animate-in text-secondary">Just a quick glimpse.</p>
      </div>
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
            src={Family}
            alt={"family photo"}
            width={324}
            height={139}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <Gallery />
      </div>

      <div className="flex animate-in flex-col gap-16 md:gap-24">
        <AboutSection />
        <ConnectSection />
        <WorkSection />
      </div>
    </main>
  );
}
