"use client";

import Image from "next/image";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css";
import { Button } from "@/components/ui/button";
import ParallaxText from "@/components/parallax-text/parallax-text";

export default function App() {
  const [hoverTab, setHoverTab] = useState<any>();
  const [selectedTab, setSelectedTabTab] = useState<any>();
  const [hideButton, setHideButton] = useState(true);
  const [hideButton2, setHideButton2] = useState(false);
  const [hideList, setHideList] = useState(true);
  const [selectedGame, setSelectGame] = useState("");
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const allImage = [
    { src: "/images/EVS_bg.png", alt: "eversoul" },
    { src: "/images/AA_bg.png", alt: "archage" },
    { src: "/images/ER_bg_v1.png", alt: "eternal return" },
    { src: "/images/WF_bg.png", alt: "world flipper" },
  ];

  const handleMouseOver = (item: any) => {
    setScrollSpeed(0.1);
    if (!selectedTab) {
      setHoverTab(item);
      setSelectedTabTab(undefined);
    }
  };

  const handleMouseLeave = () => {
    // setHoverTab(null);
    setScrollSpeed(1);
    if (!selectedTab) {
      setHoverTab(undefined);
    }
  };

  const handleMouseClick = (item: any) => {
    setHideButton(false);
    setSelectedTabTab(item);
    setSelectGame(item.alt);
    console.log(selectedGame);
  };
  const handleClose = () => {
    setHideButton(true);
    setHoverTab(undefined);
    setSelectedTabTab(undefined);
  };

  return (
    <div>
      <main className="w-full h-screen relative bg-black">
        <div
          className={`modal-left z-30 ${selectedTab ? "hide" : "show"}`}
        ></div>
        <div
          className={`modal-right z-30 ${selectedTab ? "hide" : "show"}`}
        ></div>
        <ul
          className={
            hideButton2
              ? "absolute w-screen h-screen  text-white text-5xl z-50 bg-black"
              : "hidden"
          }
        >
          {allImage.map((item) => (
            <li key={item.alt}>{item.alt}</li>
          ))}
        </ul>
        <div className="aboslute z-40">
          <ParallaxText baseVelocity={-0.5}>
            Embark on a new adventure today with Tomitech.
          </ParallaxText>
        </div>
        <Image
          className={`z-40 character w-[90%] h-[100%] ${
            selectedTab ? "hide" : ""
          }`}
          src={"/images/TOMITECH24.svg"}
          alt={"background"}
          width={1200}
          height={700}
        />

        {tabs.map((item, index) => (
          <div
            className=" flex flex-row justify-center items-end"
            key={item?.alt}
          >
            <Image
              className={`z-40 character w-[90%] h-[90%] ${
                item.alt === selectedTab?.alt
                  ? "show"
                  : item.alt === hoverTab?.alt
                  ? "show"
                  : "hide"
              }`}
              src={item.src}
              alt={item.alt}
              width={1200}
              height={700}
            />
            <Image
              className={`z-20 character w-[100%] h-[100%] ${
                item.alt === selectedTab?.alt
                  ? "show"
                  : item.alt === hoverTab?.alt
                  ? "show"
                  : "hide"
              } `}
              src={allImage[index].src}
              alt={allImage[index].alt}
              width={800}
              height={400}
            />
          </div>
        ))}
        <div className="w-full absolute bottom-5 z-50 flex flex-row justify-evenly h-16 bg-black-300 ">
          <div className={hideButton ? "" : "hidden"}>
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
          <div className={hideButton ? "hidden" : "text-white bg-black w-full flex"}>
            <Button onClick={() => handleClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 34"
                width="40"
                height="34"
                preserveAspectRatio="xMidYMid meet"
                // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
              >
                <defs>
                  <clipPath id="__lottie_element_23">
                    <rect width="40" height="34" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_23)">
                  <g
                    transform="matrix(1,0,0,1,19.875,19.3439998626709)"
                    opacity="1"
                    // style="display: block;"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,0.125,-17.437999725341797)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M20,-2 C20,-2 20,2 20,2 C20,2 0.03400000184774399,20.5310001373291 0.03400000184774399,20.5310001373291 C0.03400000184774399,20.5310001373291 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 0.03400000184774399,16.5310001373291 0.03400000184774399,16.5310001373291 C0.03400000184774399,16.5310001373291 20,-2 20,-2z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,19.875,19.3439998626709)"
                    opacity="1"
                    // style="display: block;"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,0.125,-17.437999725341797)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M20,-2 C20,-2 20,2 20,2 C20,2 0.03400000184774399,20.5310001373291 0.03400000184774399,20.5310001373291 C0.03400000184774399,20.5310001373291 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 0.03400000184774399,16.5310001373291 0.03400000184774399,16.5310001373291 C0.03400000184774399,16.5310001373291 20,-2 20,-2z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,19.875,19.3439998626709)"
                    opacity="1"
                    // style="display: block;"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,0.125,-17.437999725341797)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M20,-2 C20,-2 20,2 20,2 C20,2 0.03400000184774399,20.5310001373291 0.03400000184774399,20.5310001373291 C0.03400000184774399,20.5310001373291 -20,2 -20,2 C-20,2 -20,-2 -20,-2 C-20,-2 0.03400000184774399,16.5310001373291 0.03400000184774399,16.5310001373291 C0.03400000184774399,16.5310001373291 20,-2 20,-2z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Button><div className="grid">

            <h1 className=" text-5xl">{selectedGame}</h1>
            <p className="text-yellow-300">
              MOBILE<span className="text-white">RPG</span>
            </p>
            </div>
          </div>
          <ParallaxText baseVelocity={scrollSpeed}>
            {tabs.map((item) => (
              <Button
                key={item.alt}
                className={
                  hideButton
                    ? "text-xl w-96 h-full bg-black text-white hover:bg-slate-600"
                    : "hidden"
                }
                onMouseOver={() => handleMouseOver(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMouseClick(item)}
              >
                {item.alt}

                {item === hoverTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </Button>
            ))}
          </ParallaxText>
        </div>
      </main>
    </div>
  );
}
