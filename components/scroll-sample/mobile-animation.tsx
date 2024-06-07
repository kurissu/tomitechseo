import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

export interface Props {
  src: string;
  alt: string;
  index: number;
  percent: number;
}

const cardVariants: Variants = {
  offscreen: {
    //   y: "100%",
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      delay: 0.8,
      duration: 2,
    },
  },
};
const cardVariant2: Variants = {
  offscreen: {
    transform: "polygon(0 0, 100% 0%, 100% 50%, 0 50%);"
  },
  onscreen: {
    transform: "polygon(0 0, 100% 0%, 100% 30%, 0 70%);",
    transition: {
      // type: "spring",
      // bounce: 0.4,
      delay: 1.2,
      duration: 2,
    },
  },
};
export const allBgImage = [
  { src: "/images/EVS_bg.png", alt: "eversoul" },
  { src: "/images/AA_bg.png", alt: "archage" },
  { src: "/images/ER_bg_v1.png", alt: "eternal return" },
  { src: "/images/WF_bg.png", alt: "world flipper" },
];

const MobileAnimation = (props: Props) => {
  const { src, alt, index } = props;

  return (
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.8 }} 
    className="w-screen h-screen bg-[#171614] text-white ">
      {/* <section className="h-[calc(100vh-500px)] border-2 border-yellow-400"> */}
      {/* <div className={`relative h-[69px] w-full `}>
        <div style={{ width: `${(index + 1)/4 * 100}%`, borderRight: "1px solid #3C3B3A" }} className={`absolute bg-[#0e0e0e] h-full`}></div>
      </div> */}
      <div className="h-full">
        <div className="grid row-span-1 justify-center h-1/2">
          <div className="grid self-center text-center gap-4 h-36 ">
            <h1>{alt}</h1>
            <p className="flex gap-1 justify-center">
              <span>Mobile</span>
              <span>rpg</span>
            </p>
          <div className="flex justify-center h-10">
            <Button>home</Button>
            <Button>Play</Button>
            <Button>Apple</Button>
          </div>
          </div>
        </div>
        <div className="h-full">
          <div className="relative w-full h-1/2">
            <div className="absolute w-full h-96 bg-[#171614] z-10 element">

            </div>
            {/* <AnimatedElement/> */}
            <motion.div
              variants={cardVariants}
              className="absolute z-20 w-full h-full"
            >
              <Image
                className="w-full h-full object-cover"
                fill
                src={src}
                alt={alt}
              />
            </motion.div>
            <Image
              className="w-full z-0 h-full object-cover"
              src={allBgImage[index]?.src}
              fill
              alt={allBgImage[index]?.alt}
            />
          </div>
        </div>
      </div>
      {/* </section> */}
    </motion.div>
  );
};

export default MobileAnimation;
