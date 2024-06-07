"use client";
import Image from "next/image";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";




export default function App() {
  const [showFollow, setShowFollow] = useState(false);
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

  const social = [
    { name: "Youtube", link: "https://www.youtube.com" },
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Twitter", link: "https://www.youtube.com" },
    { name: "Instagram", link: "https://www.instagram.com/" },
    { name: "Twitch", link: "https://www.twitch.com/" },
  ];

  function toggleFollow() {
    if (showFollow) {
      setShowFollow(false);
    } else {
      setShowFollow(true);
    }
  }

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
    <div className="relative h-screen bg-[#171614] text-white">
      <section className="h-[calc(100vh-80px)]">
      
      

      
        <div className="grid pt-40 mx-10  h-full">
          <h1 className="text-5xl h-[20px]">
            Embark on a new adventure today with Tomitech.
          </h1>
          <div className="h-full">
            <div className="flex justify-center items-end h-full">
              <div className="flex justify-center items-center">

              <Link className="absolute text-sm" href={""}>
                VIEW OUR GAMES
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 138"
                width="120"
                height="138"
                preserveAspectRatio="xMidYMid meet"
                // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
              >
                <defs>
                  <clipPath id="__lottie_element_29">
                    <rect width="120" height="138" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_29)">
                  <g
                    transform="matrix(1,0,0,1,3.5,0)"
                    opacity="1"
                    // style="display: block;"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,56.172000885009766,24.25)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M-0.5,24 C-0.5,24 0.5,24 0.5,24 C0.5,24 0.5,-24 0.5,-24 C0.5,-24 -0.5,-24 -0.5,-24 C-0.5,-24 -0.5,24 -0.5,24z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(0.9766867160797119,-0.21466965973377228,0.21466965973377228,0.9766867160797119,56.172000885009766,48.75)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M-16,0.5 C-16,0.5 16,0.5 16,0.5 C16,0.5 16,-0.5 16,-0.5 C16,-0.5 -16,-0.5 -16,-0.5 C-16,-0.5 -16,0.5 -16,0.5z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(0.9766867160797119,-0.21466965973377228,0.21466965973377228,0.9766867160797119,56.172000885009766,87.75)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M-16,0.5 C-16,0.5 16,0.5 16,0.5 C16,0.5 16,-0.5 16,-0.5 C16,-0.5 -16,-0.5 -16,-0.5 C-16,-0.5 -16,0.5 -16,0.5z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,56.172000885009766,112.2509994506836)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M-0.5,24.000999450683594 C-0.5,24.000999450683594 0.5,24.000999450683594 0.5,24.000999450683594 C0.5,24.000999450683594 0.5,-24.000999450683594 0.5,-24.000999450683594 C0.5,-24.000999450683594 -0.5,-24.000999450683594 -0.5,-24.000999450683594 C-0.5,-24.000999450683594 -0.5,24.000999450683594 -0.5,24.000999450683594z"
                      ></path>
                    </g>
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,56.17100143432617,131.73899841308594)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M0.08500000089406967,5.2179999351501465 C0.08500000089406967,5.2179999351501465 -9.644000053405762,-4.511000156402588 -9.644000053405762,-4.511000156402588 C-9.644000053405762,-4.511000156402588 -8.935999870300293,-5.2179999351501465 -8.935999870300293,-5.2179999351501465 C-8.935999870300293,-5.2179999351501465 0.08500000089406967,3.803999900817871 0.08500000089406967,3.803999900817871 C0.08500000089406967,3.803999900817871 8.937000274658203,-5.047999858856201 8.937000274658203,-5.047999858856201 C8.937000274658203,-5.047999858856201 9.644000053405762,-4.341000080108643 9.644000053405762,-4.341000080108643 C9.644000053405762,-4.341000080108643 0.08500000089406967,5.2179999351501465 0.08500000089406967,5.2179999351501465z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full h-screen bg-pink-500">

      </section> */}
      {/* eversoul */}
      {/* <section className="bg-black h-screen">
        <div>
          <div>
            <h1>Eversoul</h1>
            <p>
              <span>MOBILE</span>
              <span>RPG</span>
            </p>
          </div>
          <div>
            <Link href={""}>Home</Link>
            <Link href={""}>Play store</Link>
            <Link href={""}>App Store</Link>
          </div>
        </div>
      </section> */}

      {/* <main className="w-full h-screen relative bg-black">
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
      </main> */}
    </div>
  );
}
