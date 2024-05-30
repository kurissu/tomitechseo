import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: "-100%",
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      duration: 0.8,
    },
  },
};
const cardVariant2: Variants = {
  offscreen: {
    y: "-10%",
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      duration: 0.8,
    },
  },
};

const GamePage = () => {
  // const [shouldShowActions, setShouldShowActions] = useState(false);
  // const [lastYPos, setLastYPos] = useState(0);

  // React.useEffect (() => {
  //   function handleScroll() {
  //     const yPos = window.scrollY;
  //     const isScrollingUp = yPos < lastYPos;

  //     setShouldShowActions(isScrollingUp);
  //     setLastYPos(yPos);
  //   }
  //   window.addEventListener('scroll', handleScroll, false);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll, false);
  //   };
  // }, [lastYPos]);
  // console.log(lastYPos)

  return (
    <div className="relative">
      <div className="absolute text-center md:text-left h-full md:left-40 z-10 md:bg-gray-800 md:bg-opacity-5 px-4">
        <motion.div
          className=" mt-32"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
        >
         
            <motion.div variants={cardVariants}>
            <p className="text-white">Game</p>

            <h1 className="text-4xl text-white">ENDLESS DUNGEON</h1>
          </motion.div>
          <motion.div variants={cardVariant2}>

            <video
              src="../videoBg.mp4"
              className="w-[410px] h-[230px] mx-auto md:w-[700px] md:h-[500px] object-contain"
              controls
            ></video>
                      </motion.div>
                      <motion.div variants={cardVariants}>

            <p className=" text-lg text-white w-[700px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              tempora beatae dicta deleniti illum voluptas eligendi, accusantium
              sunt vel. Harum voluptates dolor molestiae nisi deleniti tempore
              sunt doloremque vero sapiente?
            </p>
            </motion.div>

            <motion.div variants={cardVariants}>

            <Button
              variant="ghost"
              className="text-white border-2 border-white"
            >
              BUY NOW
            </Button>
            <Button
              variant="ghost"
              className="text-white border-2 border-white"
            >
              JOIN THE COMMUNITY
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <video
        src="../video1.mp4"
        className="w-full h-[100vh] object-cover z-0"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default GamePage;
