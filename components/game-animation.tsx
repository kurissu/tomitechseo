'use client'
import React, { useState } from 'react';

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const GameAnimation = () => {
    const [isShown, setIsShown] = useState(false);
    const [bgImage, setbgImage] = useState('/images/TOMITECH24.svg');
    function whenClick() {
        setIsShown(true)
        setbgImage('/images/EVS_bg.png')
    }
    return (
    <div className="relative w-full h-[100vh] bg-[#171614]">
      <Image src={bgImage} className='absolute h-screen w-screen animate-fade-up animate-ease-in-out animate-delay-300 animate-normal' alt='game' width={1700} height={900}/>
      {/* <Image src="/images/EVS_chr.png" alt='game' className='animate-fade-up animate-duration-1000 animate-delay-500 animate-ease-out' width={1700} height={900}/> */}
      {isShown && (
      <div>
      <Image src="/images/EVS_chr.png" alt='game' className="animate-fade-up animate-ease-in-out animate-delay-300 animate-normal h-screen w-screen" width={1700} height={900}/>
      </div>
    )}
      <Button className='absolute top-[80%]' onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} onClick={() => whenClick()}>EVERSOUL</Button>
    </div>  )
}

export default GameAnimation