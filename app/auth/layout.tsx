import { Metadata } from "next";
type AuthProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Authentication | Gerald",
  description: "Login to add snippets",
};

export default function AuthLayout({ children }: AuthProps) {
  return <main className="">{children}</main>;
}
