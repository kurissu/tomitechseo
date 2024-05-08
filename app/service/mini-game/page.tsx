"use client";
import React, { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const miniGame = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="w-full h-[100vh] bg-[#171614]">
      <Image
        src="/images/TOMITECH24.svg"
        className="fixed top-[30%]"
        alt="game"
        width={1700}
        height={900}
      />
      {/* <Image src="/images/EVS_chr.png" alt='game' className='animate-fade-up animate-duration-1000 animate-delay-500 animate-ease-out' width={1700} height={900}/> */}
      {isShown && (
        <div>
          <Image
            src="/images/EVS_chr.png"
            alt="game"
            className="animate-fade-up animate-ease-in-out animate-delay-300 animate-normal	z-0"
            width={1700}
            height={900}
          />
        </div>
      )}
      <Button
        className="fixed top-[80%]"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        EVERSOUL
      </Button>

     
    </div>
  );
};

export default miniGame;
