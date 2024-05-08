import GameAnimation from "@/components/game-animation";
import GamePage from "@/components/game-page";
import LogoCarousel from "@/components/logo-carousel";
import OfficeMap from "@/components/office-map";
import OurFranchises from "@/components/our-franchises";
import ServiceBanner from "@/components/service-banner";
import Image from "next/image";
import Link from 'next/link'
// import videoBg from '@/assets/video-bg.mp4'



export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
    {/* Landing page */}
      <section className="relative snap-always snap-start flex w-screen h-screen flex-col items-center justify-between">

      {/* navbar section */}
      <div className="absolute align-middle z-10 text-white hover:bg-white hover:text-black duration-700 w-full">
      <nav className="flex justify-around space-x-12">
      <h1 className="text-3xl font-bold align-bottom">TomiTech24</h1>

        <div className="flex justify-between align-middle h-full space-x-12">

      <Link href="/profile">Profile</Link>
      <Link href="/service">Service</Link>
      <Link href="/news">News</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/about">About</Link>
      <Link href="/contacts">Contacts</Link>

        </div>
      <div className="flex justify-between space-x-2">
        <p>TH</p>
        <p>|</p>
        <p>EN</p>
      </div>
      </nav>
        </div>

    <video src="videoBg.mp4" className="w-full h-full object-cover z-0" autoPlay muted loop></video>
      </section>
      {/* Game Pages */}
      <section className="snap-start w-screen h-screen">
        <GamePage/>
      </section>
      {/* Office Map */}
      <section className="snap-center w-screen h-screen">
        <OfficeMap/>
      </section>
      {/* Game Animation Page */}
      <section className="snap-center w-screen h-screen">
        <GameAnimation/>
      </section>
      <section className="snap-center w-screen h-screen">
        <ServiceBanner/>
      </section>
      <section className="snap-center w-screen h-screen">
        <OurFranchises/>
      </section>


    </main>
  );
}
