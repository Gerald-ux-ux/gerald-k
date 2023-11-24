import Section from "@/components/Section";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Section heading="About" headingAlignment="left">
      <div className="flex flex-col gap-6">
        <p>Hello World My name is Gerald Kamau</p>

        <p>
          I have a passion and a mission with the foundation of east africa we
          decided to have ever
        </p>
        <p>
          In addition to coding, I also make{" "}
          <Link
            className="underline"
            href="https://www.youtube.com/channel/@brianruizy"
          >
            YouTube
          </Link>{" "}
          videos, where I focus on tech gear, creative vlogs, and a bit of
          personal development.
        </p>
        <p>
          When I&apos;m not at my desk I am probably lifting weights, playing
          soccer, or at a coffee shop
        </p>
      </div>
    </Section>
  );
}
