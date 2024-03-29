"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import localFont from "next/font/local";
import clsx from "clsx";
import Hallo from "@/components/ui/Halo";
import outside from "@/public/gallery/outside.jpeg";
import image from "@/public/gallery/image.jpg";
import meet from "@/public/gallery/meet.jpeg";

const ticketingFont = localFont({
  src: "../../../public/ticketing.woff2",
  display: "swap",
});

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: "left" | "right";
  children?: ReactNode;
};

function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-2xl overflow-hidden";
  return (
    <motion.div
      className={`over:before:h-[300px] absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:w-[calc(100%+55px)]`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative h-full w-full rounded-2xl shadow-md will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 8,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl bg-gray-400 object-cover"
          />
          {children}
        </div>
        <div
          className={clsx(
            shared,
            "flex items-center overflow-hidden rounded-2xl bg-[#00499d]/20",
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Hallo strength={50} className="flex items-center">
            <span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[url('/photopaper.png')] bg-[length:280px] bg-repeat" />
            <div className="z-[1] px-6">
              <div
                className={clsx(
                  ticketingFont.className,
                  "flex flex-col gap-1 uppercase",
                )}
              >
                <p className="text-sm text-secondary">{fileName}</p>
                {meta && <p className="text-sm text-secondary">{meta}</p>}
              </div>
            </div>
          </Hallo>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <>
      <section className="relative flex h-[268px] gap-4">
        <Photo
          src={outside}
          meta="2022-05-20"
          alt="Coding..."
          width={240}
          height={235}
          rotate={-5.4}
          left={360}
          index={3}
        />
        <Photo
          src={image}
          meta="2023-02-11"
          alt="me"
          width={250}
          height={259}
          rotate={-6}
          left={-86}
          index={1}
        />
        <Photo
          src={meet}
          meta="2023-09-04"
          alt="me making music"
          width={250}
          height={270}
          rotate={10}
          left={120}
          index={2}
          flipDirection="left"
        />

      </section>
    </>
  );
}
