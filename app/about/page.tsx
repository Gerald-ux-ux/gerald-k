import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gerald ",
  description: "I am a passionate front-end developer",
};

export default function About() {
  return (
    <main className="bg-red-200">
      <h3>My name is about page</h3>
    </main>
  );
}
