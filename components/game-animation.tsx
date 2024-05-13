"use client";
import React, { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ParallaxText from "./parallax-text/parallax-text";

const GameAnimation = () => {
  const [isShown, setIsShown] = useState(false);
  const [freezeImg, setFreezeImg] = useState(false);
  const [bgImage, setbgImage] = useState(false);



  function whenClick() {
    // setIsShown(true)
    setFreezeImg(true);
    setbgImage(true);
  }
  function whenClose() {
    setIsShown(false);
    setFreezeImg(false);
    setbgImage(false);
  }
  return (
    <div className="relative w-screen h-screen bg-[#171614]">
      {bgImage ? (
        <Image
          src={"/images/EVS_bg.png"}
          className="absolute h-screen w-screen animate-fade-up animate-ease-in-out animate-delay-300 animate-normal"
          alt="game"
          width={1700}
          height={900}
        />
      ) : (
        <Image
          src={"/images/TOMITECH24.svg"}
          className="absolute h-screen w-screen"
          alt="game"
          width={1700}
          height={900}
        />
      )}
      {(isShown || freezeImg) && (
        <div>
          <Image
            src="/images/EVS_chr.png"
            alt="game"
            className="animate-fade-up animate-ease-in-out animate-delay-300 animate-normal h-screen w-screen z-20"
            width={1700}
            height={900}
          />
        </div>
      )}
      {freezeImg && (
        <Button className="absolute top-[80%]" onClick={() => whenClose()}>
          Close
        </Button>
      )}
      <div className="absolute top-10 z-0">
        <ParallaxText
          baseVelocity={-1}
          children={"Embark on a new adventure today with Tomitech."}
        />
      </div>
      <div className="absolute bottom-0">
        <ParallaxText
          baseVelocity={1}
          children={
            <>
              {!freezeImg && (
                <Button
                  className="text-white text-[64px]"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={() => whenClick()}
                  variant={"ghost"}
                >
                  EVERSOUL
                </Button>
              )}
            </>
          }
        />
      </div>
    </div>
  );
};

export default GameAnimation;
