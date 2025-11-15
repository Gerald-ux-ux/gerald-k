import Section from "@/components/Section";
import React from "react";

const techs = [
  "JavaScript",
  "Docker",
  "Firebase",
  "NextAuth.js",
  "Vercel",
  "Shadcn ui",
  "Storybook",
  "GraphQL",
  "Figma",
  "Babel",
  "Sentry",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Nest.js",
  "Rest Apis",
  "Ruby on Rails",
  "Clerk",
];

export const TechStack = (props: {}) => {
  return (
    <Section heading="Tech Stack" headingAlignment="left">
      <div className="flex w-full flex-col gap-8">
        <p>
          I use a diverse set of tools to turn ideas into reality. Here’s a
          glimpse of the technologies I have worked with{" "}
        </p>
        <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-3">
          {techs.map((tech) => (
            <li className=" col-span-1 transition-opacity" key={tech}>
              <div
                className="inline-grid w-full rounded-lg border border-primary
                p-2 no-underline"
              >
                <div className=" flex items-center gap-3 text-primary">
                  {tech}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
