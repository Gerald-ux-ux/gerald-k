import Section from "@/components/Section";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Section heading="About" headingAlignment="left">
      <div className="flex flex-col gap-6">
        <p>Hello World My name is Gerald Kamau</p>

        <p>
          From crafting elegant solutions to embracing the occasional debugging
          adventure, I enjoy writing code
        </p>
        <p>
          Beyond coding, I find joy in crafting music and producing songs for
          various artists across the US. I also occasionally upload beats on{" "}
          <Link
            className="underline"
            href="https://www.youtube.com/channel/UCAszclBzNqvwJpM4F1OdhXQ"
          >
            YouTube
          </Link>
        </p>
        <p>
          The few times that I&apos;m not at my desk, i am out spending time
          with my family or playing basketball
        </p>
      </div>
    </Section>
  );
}
