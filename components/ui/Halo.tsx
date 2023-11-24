/** This component creates a Halo effect on its children */

"use client";

import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
//
import useMousePosition from "@/hooks/usemouseposition";

type HaloProps = {
  children: ReactNode | ReactNode[];
  size?: number;
  strength?: number;
  className?: string;
};

export default function Hallo({
  children,
  size = 600,
  strength = 10,
  className,
}: HaloProps) {
  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = size / 2;
  return (
    <motion.div
      ref={ref}
      className={clsx("relative h-full w-full overflow-hidden", className)}
      whileHover="hover"
    >
      <motion.div
        style={
          {
            "--x": `${x ? x - offset : -offset}px`,
            "--y": `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background:
              "radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)",
          } as React.CSSProperties
        }
        className="pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity "
        variants={{
          hover: {
            opacity: strength / 100,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
