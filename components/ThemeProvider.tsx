/**
 * I have imported NextThemesProvider to facilitate dark mode
 * Heres a youtube tutorial: "https://youtu.be/PHDRKXQzyrU?si=f13p36m2-819Nsfk"
 */
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    /** I have two defined themes. You can have as many as you would like */
    <NextThemesProvider themes={["light", "dark"]} {...props}>
      {children}
    </NextThemesProvider>
  );
}
