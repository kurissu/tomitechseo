import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

import { motion, useTransform, useElementScroll } from "framer-motion";
import { useWindowSize } from "./hook-use-window-size";
import { Box, ContentBox } from "./Box";
import GameAnimation from "../game-animation";
import GameAnimationMobile from "@/app/game-animation-mobile/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";




import GamePage from "../game-page";
import MobileAnimation from "./mobile-animation";

const LINE_VARIANTS = {
  visible: { height: "75vh", transition: { duration: 2 } },
  hidden: { height: "0vh" }
};

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

export const allBgImage = [
  { src: "/images/EVS_bg.png", alt: "eversoul" },
  { src: "/images/AA_bg.png", alt: "archage" },
  { src: "/images/ER_bg_v1.png", alt: "eternal return" },
  { src: "/images/WF_bg.png", alt: "world flipper" },
];


export const allCharImage = [
  { src: "/images/EVS_chr.png", alt: "eversoul" },
  { src: "/images/AA_chr.png", alt: "archage" },
  { src: "/images/ER_chr_v1.png", alt: "eternal return" },
  { src: "/images/WF_chr.png", alt: "world flipper" },

];

const social = [
  { name: "Youtube", link: "https://www.youtube.com" },
  { name: "Facebook", link: "https://www.facebook.com" },
  { name: "Twitter", link: "https://www.youtube.com" },
  { name: "Instagram", link: "https://www.instagram.com/" },
  { name: "Twitch", link: "https://www.twitch.com/" },
];



const Container = ({ children }) => {
  const [hideButton2, setHideButton2] = useState(false);
  const [showFollow, setShowFollow] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  function toggleFollow() {
    if (showFollow) {
      setShowFollow(false);
    } else {
      setShowFollow(true);
    }
  }

  const handleClose = () => {
    setHideButton(true);
    setHoverTab(undefined);
    setSelectedTabTab(undefined);
  };


  const allImage = [
    { src: "/images/EVS_bg.png", alt: "eversoul" },
    { src: "/images/AA_bg.png", alt: "archage" },
    { src: "/images/ER_bg_v1.png", alt: "eternal return" },
    { src: "/images/WF_bg.png", alt: "world flipper" },
  ];

  const windowSize = useWindowSize();
  const ref = useRef();
  const { scrollY, scrollYProgress } = useElementScroll(ref);

  const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
  const lengthRange = ["75vh", "45vh", "50vh", "45vh", "50vh", "100vh"];
  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    scrollY.onChange((v) => setScrollYValue(v));
    scrollYProgress.onChange((v) => setScrollYProgressValue(v));
  }, [scrollY, scrollYProgress]);

  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          fontFamily: "monospace",
          fontWeight: 600,
          zIndex: 50
        }}
      >
        {/* {"height: " +
          calcHeight.get() +
          " | y: " +
          scrollYValue +
          " | percentage: " +
          (scrollYProgressValue * 100).toFixed(0) +
          "% | WindowSize h: " +
          windowSize.height +
          " w: " +
          windowSize.width +
          "   "}
        <button onClick={refreshPage}>refresh</button> */}
        <div
        className={
          hideButton2
            ? "absolute w-72 h-screen right-0  z-30 bg-[#171614]"
            : "hidden"
        }
      >
        <div className="grid pt-[60px] px-5 gap-10">
          <div>
            <p className="text-white text-xxl">Games</p>
            {allImage.map((item) => (
              <Link
                className="grid text-white text-2xl"
                key={item.alt}
                href={"#"}
              >
                {item.alt}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-white text-xxl">More Experience</p>
            <button
              className="text-white text-2xl"
              onClick={() => toggleFollow()}
            >
              Follow us
            </button>
            {social.map((item) => (
              <Link
                className={showFollow ? "text-white text-xxl grid" : "hidden"}
                key={item.name}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-white text-2xl">Partners</p>
            <p className="text-white text-xxl">tomitech24</p>
          </div>
        </div>
      </div>
      <div className="relative border-2 border-green">

        <div className="absolute h-full w-full fill-red text-white">

        </div>
      <nav className="flex justify-between h-[60px] w-screen text-white p-3 border-b-2 border-[#3C3B3A]" style={{borderBottom: "1px solid #3C3B3A"}}>
        <h2 className="text-3xl ">
          Tomitech<span className="font-bold">24</span>
        </h2>
        <div className={hideButton ? " z-30" : "hidden"}>
          <Button
            onClick={() => setHideButton2(true)}
            className={hideButton2 ? "hidden" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 34"
              width="40"
              height="34"
              preserveAspectRatio="xMidYMid meet"
              // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
            >
              <defs>
                <clipPath id="__lottie_element_5">
                  <rect width="40" height="34" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_5)">
                <g
                  transform="matrix(1,0,0,1,20,15.875)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,-13.875)">
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M20,-2 C20,-2 20,2 20,2 C20,2 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 20,-2 20,-2z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,20,30.875)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,-13.875)">
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M20,-2 C20,-2 20,2 20,2 C20,2 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 20,-2 20,-2z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,20,45.875)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,-13.875)">
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M20,-2 C20,-2 20,2 20,2 C20,2 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 20,-2 20,-2z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </Button>
          <Button
            className={hideButton2 ? "" : "hidden"}
            onClick={() => {
              setHideButton2(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 34"
              width="40"
              height="34"
              preserveAspectRatio="xMidYMid meet"
              // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
            >
              <defs>
                <clipPath id="__lottie_element_457">
                  <rect width="40" height="34" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_457)">
                <g
                  transform="matrix(0.7071084380149841,0.7071051001548767,-0.7071051001548767,0.7071084380149841,10.189000129699707,26.81100082397461)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,-13.875)">
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M20,-2 C20,-2 20,2 20,2 C20,2 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 20,-2 20,-2z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,20,30.875)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,-13.875)">
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M2,-2 C2,-2 2,2 2,2 C2,2 -2,2 -2,2 C-2,2 -2,-2 -2,-2 C-2,-2 2,-2 2,-2z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(0.7071084380149841,-0.7071051001548767,0.7071051001548767,0.7071084380149841,29.81100082397461,26.81100082397461)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,-13.875)">
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M20,-2 C20,-2 20,2 20,2 C20,2 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 20,-2 20,-2z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </Button>
        </div>
      </nav>
      </div>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: 20,
          pointerEvents: "none"
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={LINE_VARIANTS}
          style={{ backgroundColor: "black", width: 3, height: calcHeight }}
        />
      </div>
      <SnapParent
        ref={ref}
        style={{
          position: "absolute"
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};

export default function ScrollSample() {


  return (
    <Container>
      <Box full>
        <GameAnimationMobile/>
      </Box>
      {
        allCharImage.map((item,index)=>(
        <Box full>
          <MobileAnimation src={item.src} alt={item.alt} index={index}/>
        </Box>
        ))
      }
      {/* <Box full color="#84B1ED">
        Box 3 (full)
      </Box>
      <Box half triggerOnce transLeft color="#67D5B5">
        Box 4 (half)
      </Box>
      <Box full color="#FDD692">
        Box 5 (full)
      </Box>
      <ContentBox color="white">Box 6 (full)</ContentBox>
      <Box full color="#84B1ED">
        Box 6 (full)
      </Box> */}
    </Container>
  );
}