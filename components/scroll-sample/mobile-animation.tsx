import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

export interface Props {
    src: string;
    alt: string;
    index: number;
};

const cardVariants: Variants = {
    offscreen: {
    //   y: "100%",
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        // type: "spring",
        // bounce: 0.4,
        delay: .8,
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
    const {src, alt, index} = props
  return (
    <div className="grid w-screen h-screen bg-black text-white">
      <section className="h-[calc(100vh-500px)]">
        <div className="h-[69px]">Nav line bar</div>
        <div className="grid row-span-1 justify-center">
          <div className="grid text-center gap-4 h-10">
            <h1>{alt}</h1>
            <p className="flex gap-1 justify-center">
              <span>Mobile</span>
              <span>rpg</span>
            </p>
          </div>
          <div className="flex justify-center h-10">
            <Button>home</Button>
            <Button>Play</Button>
            <Button>Apple</Button>
          </div>
        </div>
        
        <motion.div
          className=" h-full"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute w-full h-56 bg-black z-10 element">

            </div>
            <motion.div variants={cardVariants} className="absolute z-20 w-full h-full">
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
        </motion.div>
      </section>
    </div>
  );
};

export default MobileAnimation;
