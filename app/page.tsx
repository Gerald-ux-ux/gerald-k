import Connect from "@/components/home/Connect";
import Timezone from "@/components/Timezone";

export default async function Home() {
  return (
    <div className="mx-auto flex max-w-[700px] flex-col gap-8 px-6">
      <div className="flex animate-in flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Gerald Kamau</h1>
          <p className="animate-in text-secondary">
            Software Engineer based in Nairobi <Timezone /> crafting delightful
            user experiences. Primarily developing applications in
            Javascript/Typescript with React and Rails. When building
            applications that are expected to scale and make money I use Ruby on
            Rails as the backend paired with a React frontend.
          </p>
        </div>

        <div className="flex animate-in flex-col gap-2">
          <h3 className="animate-in  font-medium">Connect</h3>
          <p className="animate-in text-secondary">
            Reach out to me at{" "}
            <a href="mailto:kamaugerald36@gmail.com" className="text-link">
              kamaugerald36@gmail.com
            </a>{" "}
            for business.
          </p>
          <Connect />
        </div>

        <div className="flex  animate-in flex-col gap-2">
          <h3 className="animate-in  font-medium">Experience</h3>
          <p className="  animate-in leading-relaxed text-secondary">
            I currently automate financial operations through system integration
            and custom software at JQC, connecting disparate systems and
            modernizing legacy infrastructure for businesses that can&apos;t
            afford downtime. I architect payment rails and reconciliation
            pipelines where idempotency, exactly-once delivery, and audit trails
            are non-negotiable.
          </p>
        </div>
      </div>
    </div>
  );
}
