"use client";
import React, { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { initialTabs as tabs } from "./test-fruit/images";
import { initialTabs as tabs2 } from "./test-fruit/background";
import { motion, AnimatePresence } from "framer-motion";
import "./test-fruit/style.css";

const chImgBg = [
  "/images/EVS_bg.png",
  "/images/AA_bg.png",
  "/images/ER_bg.png",
  "/images/WF_bg.png",
];
const chImg = [
  "/images/EVS_chr.png",
  "/images/AA_chr.png",
  "/images/ER_chr.png",
  "/images/WF_chr.png",
];

const GameAnimation = () => {
  const [isShown, setIsShown] = useState(false);
  const [freezeImg, setFreezeImg] = useState(false);
  const [bgImage, setbgImage] = useState(false);

  const [selectedTab, setSelectedTab] = useState<any>("");
  const [selectedTab2, setSelectedTab2] = useState(tabs2[0]);

  function whenClick() {}
  function whenEnter(item: any, index: any) {
    setSelectedTab(item);
    setSelectedTab2(item);
  }
  function whenClose() {
    setIsShown(false);
    setFreezeImg(false);
    setbgImage(false);
  }
  return (
    <div className="window">
      <main>
        <AnimatePresence mode="wait">
          {selectedTab !== "" && (
            <motion.div
              key={selectedTab ? selectedTab.alt : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {
                <Image
                  src={selectedTab.src}
                  alt="game"
                  width={500}
                  height={500}
                />
              }
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.alt}
              className={item === selectedTab ? "selected" : ""}
              onMouseOver={() => setSelectedTab(item)}
              // onClick={() => whenClick()}
              onMouseLeave={() => setSelectedTab("")}
            >
              {`${item.alt}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
    //   <div className="relative w-screen h-screen bg-[#171614]">
    //     {bgImage ? (
    //       <Image
    //         src={"/images/EVS_bg.png"}
    //         className="absolute h-screen w-screen animate-fade-up animate-ease-in-out animate-delay-300 animate-normal"
    //         alt="game"
    //         width={1700}
    //         height={900}
    //       />
    //     ) : (
    //       <Image
    //         src={"/images/TOMITECH24.svg"}
    //         className="absolute h-screen w-screen"
    //         alt="game"
    //         width={1700}
    //         height={900}
    //       />
    //     )}
    //     {(isShown || freezeImg) && (
    //       <div>
    //         <Image
    //           src="/images/EVS_chr.png"
    //           alt="game"
    //           className="animate-fade-up animate-ease-in-out animate-delay-300 animate-normal h-screen w-screen z-20"
    //           width={1700}
    //           height={900}
    //         />
    //       </div>
    //     )}
    //     {freezeImg && (
    //       <Button className="absolute top-[80%]" onClick={() => whenClose()}>
    //         Close
    //       </Button>
    //     )}
    //     <div className="absolute top-10 z-0">
    //       <ParallaxText
    //         baseVelocity={-.5}
    //         children={"Embark on a new adventure today with Tomitech."}
    //       />
    //     </div>
    //     <div className="absolute bottom-0">
    //       <ParallaxText
    //         baseVelocity={5}
    //         children={
    //           <>
    //             {!freezeImg && (
    //               <Button
    //                 className="text-white text-[64px]"
    //                 onMouseEnter={() => setIsShown(true)}
    //                 onMouseLeave={() => setIsShown(false)}
    //                 onClick={() => whenClick()}
    //                 variant={"ghost"}
    //               >
    //                 EVERSOUL
    //               </Button>
    //             )}
    //           </>
    //         }
    //       />
    //     </div>
    //   </div>
  );
};

export default GameAnimation;
