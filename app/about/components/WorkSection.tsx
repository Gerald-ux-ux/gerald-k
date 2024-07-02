import Section from "@/components/Section";
import cblogo from "@/public/work/cblogo.png";
import cloudpaylogo from "@/public/work/cplogo.png";
import Link from "next/link";
import Avatar from "@/public/geraldavatar.jpeg";

import WorkPlaces from "./WorkPlaces";

export default function WorkSection() {
  return (
    <Section heading="Work" headingAlignment="left">
      <div className="flex w-full flex-col gap-8">
        <p>
          {new Date().getFullYear() - 2022} + year(s) of professional software
          development experience.
        </p>

        <p>This are the different companies i have worked for.</p>
        <WorkPlaces items={workplaces} />
      </div>
    </Section>
  );
}

const workplaces = [
  {
    title: "FullStack Engineer",
    company: "Free lance",
    time: "May 2024 - ",
    imageSrc: Avatar,
  },
  {
    title: "Full Stack Engineer",
    company: "Creative Brands",
    time: "2022 - June 2024",
    imageSrc: cblogo,
    link: "https://www.thecbgroup.io/",
  },
  {
    title: "Fronted end Engineer",
    company: "Cloudpay Finance",
    time: "2022 - June 2024 ",
    imageSrc: cloudpaylogo,
    link: "https://cloudpay.finance/",
  },
];
