/**
 * I am using headless ui, framer motion, react icons & react hero icons.
 * Headless ui: "https://headlessui.com/react/listbox".
 * Framer motion: "https://www.framer.com/motion/animate-presence/"
 * React hero icons: "https://www.npmjs.com/package/@heroicons/react"
 * React icons: "https://react-icons.github.io/react-icons"
 */
"use client";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, CheckIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { CiLaptop } from "react-icons/ci";

export default function ThemeSwitcher() {
  /** Get the theme set from next-themes */
  const { theme, setTheme, resolvedTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        {/* Map the values in the list box */}
        {({ open }) => {
          /** Defined styles for the icon. Why its defined in the jsx is due to access of  "open"   */
          const iconClassName = clsx(
            "w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors",
            open ? "text-primary" : "text-secondary"
          );
          return (
            <div className="relative">
              {/* Button responsible for opening the theme toggle */}
              <Listbox.Button
                className={clsx(
                  "relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none"
                )}
              >
                {resolvedTheme === "dark" ? (
                  <MoonIcon className={iconClassName} />
                ) : resolvedTheme === "system" ? (
                  <CiLaptop className={iconClassName} />
                ) : (
                  <SunIcon className={iconClassName} />
                )}
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                    className="absolute right-0  p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-white dark:bg-black focus:outline-none sm:text-sm capitalize"
                  >
                    {themes.map((theme) => (
                      <Listbox.Option
                        value={theme}
                        key={theme}
                        className={({ active }) =>
                          clsx(
                            "relative cursor-pointer select-none py-2 pl-10 pr-4 rounded-md",
                            active ? "bg-tertiary" : ""
                          )
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {theme === "system" ? "Automatic" : theme}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          );
        }}
      </Listbox>
    </>
  );
}
