import { Metadata } from "next";
type AuthProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Authentication | Gerald",
  description: "Login to add snippets",
};

export default function AuthLayout({ children }: AuthProps) {
  return (
    <main className="mx-auto flex max-w-[700px] animate-in flex-col gap-8 px-6">
      {children}
    </main>
  );
}
