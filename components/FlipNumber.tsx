"use client";

import { useEffect, useState } from "react";
import useIsMount from "../hooks/useIsMount";
import clsx from "clsx";

type FlipNumberProps = {
  children: number;
};

export default function FlipNumber({ children }: FlipNumberProps) {
  const isMount = useIsMount();
  const [numToShow, setNumToShow] = useState(children);
  const [keyframe, setKeyframe] = useState<"initial" | "moveDown" | "out">(
    "initial",
  );
  const duration = 75;

  useEffect(() => {
    if (!isMount) {
      setTimeout(() => setKeyframe("out"), 0);
      setTimeout(() => setNumToShow(children), duration);
      setTimeout(() => setKeyframe("moveDown"), duration);
      setTimeout(() => setKeyframe("initial"), duration * 2);
    }
  }, [children, isMount, duration]);

  return (
    <span
      className={clsx(
        "inline-flex",
        keyframe === "out" &&
          "-translate-y-3 opacity-0 duration-75 ease-in-out",
        keyframe === "initial" &&
          "translate-y-0 opacity-100 duration-75 ease-in-out",
        keyframe === "moveDown" && "translate-y-3 opacity-0",
      )}
    >
      {numToShow}
    </span>
  );
}
