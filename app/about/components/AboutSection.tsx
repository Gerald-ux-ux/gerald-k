import Section from "@/components/Section";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Section heading="About" headingAlignment="left">
      <div className="flex flex-col gap-6">
        <p className="text-lg font-medium">
          Hi, I&apos;m Gerald Kamau, a passionate Full-Stack Developer with a keen eye for creating elegant, user-centric solutions.
        </p>

        <p>
          With expertise in modern web technologies and a strong foundation in both frontend and backend development, 
          I specialize in building scalable applications that deliver exceptional user experiences. My approach combines 
          technical excellence with creative problem-solving, ensuring that every project I undertake is both robust and innovative.
        </p>

        <p>
          Beyond the code, I bring a unique perspective to development through my experience as a music producer. 
          Having produced tracks for artists across the US and sharing my work on{" "}
          <Link
            className="underline hover:text-blue-600 transition-colors"
            href="https://www.youtube.com/channel/UCAszclBzNqvwJpM4F1OdhXQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </Link>
          , I understand the importance of creativity, attention to detail, and user engagement – principles that I seamlessly 
          integrate into my development work.
        </p>

        <p>
          When I&apos;m not crafting code or producing music, you&apos;ll find me spending quality time with my family or 
          indulging in my passion for Formula One racing. These diverse interests help me maintain a balanced perspective 
          and bring fresh ideas to every project I undertake.
        </p>
      </div>
    </Section>
  );
}
