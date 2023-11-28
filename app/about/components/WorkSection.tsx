import Section from "@/components/Section";
import Link from "next/link";
import WorkPlaces from "./WorkPlaces";
import cblogo from "@/public/work/cblogo.png";
import cloudpaylogo from "@/public/work/cplogo.png";

export default function WorkSection() {
  return (
    <Section heading="Work" headingAlignment="left">
      <div className="flex w-full flex-col gap-8">
        <p>
          {new Date().getFullYear() - 2022} + year(s) of professional software
          development experience.
        </p>

        <p>
          I kicked off my tech adventure by immersing myself in an intensive
          bootcamp, mastering the foundational aspects of software development.
          This journey led me to a rewarding role as a full-stack software
          developer, with a special focus on front-end expertise at{" "}
          <Link href="https://www.creativebrands.co.ke/" className="underline">
            Creative Brands
          </Link>
        </p>
        <WorkPlaces items={workplaces} />
      </div>
    </Section>
  );
}

const workplaces = [
  {
    title: "Full Stack Engineer",
    company: "Creative Brands",
    time: "2022 -",
    imageSrc: cblogo,
    link: "https://www.creativebrands.co.ke/",
  },
  {
    title: "Fronted end software Engineer",
    company: "Cloudpay Finance",
    time: "2022 - ",
    imageSrc: cloudpaylogo,
    link: "https://cloudpay.finance/",
  },
];
