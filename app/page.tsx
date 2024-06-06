"use client";
import GameAnimation from "@/app/game-animation/page";
import GameAnimationMobile from "@/app/game-animation-mobile/page";
import GamePage from "@/components/game-page";
import LogoCarousel from "@/components/logo-carousel";
import OfficeMap from "@/components/office-map/office-map";
import OurFranchises from "@/components/our-franchises";
import ServiceBanner from "@/components/service-banner";
import Image from "next/image";
import AnimationFour from "@/components/animation-four";
import AnimationOne from "@/components/animation-one/animation-one";
import Link from "next/link";
import AnimationTwo from "@/components/animation-two/animation-two";
import AnimationThree from "@/components/animation-three/animation-three";
import AnimationFive from "@/components/animation-five/animation-five";
import ParallaxText from "@/components/parallax-text/parallax-text";
import Nav from "@/components/nav";
import ScrollSample from "@/components/scroll-sample/test";
// import videoBg from '@/assets/video-bg.mp4'

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden no-scrollbar">
      {/* Landing page */}
      <section className="relative snap-always snap-start flex w-screen h-screen flex-col items-center ">
      <Nav />
        <video
          src="videoBg.mp4"
          className="w-full h-full object-cover z-0 max-lg:hidden"
          autoPlay
          muted
          loop
        ></video>
        <Image
        className="lg:hidden w-full h-[571px] object-cover"
          src="/images/bdBackground.png"
          alt="logo"  
          width={5000}
          height={1000}
        />
      </section>
      {/* Game Pages */}
      <section className="snap-start w-screen h-screen">
        <GamePage />
      </section>
      {/* Office Map */}
      <section className="snap-start w-screen h-screen">
        <OfficeMap />
      </section>
      {/* Game Animation Page */}
      <section className="max-lg:hidden snap-start w-screen h-dvh">
        <GameAnimation />
      </section>
      <section className="relative lg:hidden snap-start w-screen">
        {/* <GameAnimationMobile /> */}
        <ScrollSample/>
      </section>
      <section className="snap-center w-screen h-screen">
        {/* <ServiceBanner /> */}

      </section>
      <section className="snap-center w-screen h-screen">
        <OurFranchises />
      </section>
      <section className="snap-center w-screen h-screen">
        {/* <AnimationOne /> */}
      </section>
      <section className="snap-center w-screen h-screen">
        {/* <AnimationTwo /> */}
      </section>
      <section className="snap-center w-screen h-screen">
        {/* <AnimationThree /> */}
      </section>
      <section className="snap-center w-screen h-screen">
        {/* <AnimationFour /> */}
      </section>
      <section className="snap-center w-screen h-screen"></section>
    </main>
  );
}
