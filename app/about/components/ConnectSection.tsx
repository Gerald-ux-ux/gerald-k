import Section from "@/components/Section";
import Link from "next/link";

export default function ConnectSection(){
    return (
      <Section heading="Connect" headingAlignment="left">
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
      </Section>
    );
}
