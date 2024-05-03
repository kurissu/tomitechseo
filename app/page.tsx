import Image from "next/image";
import Link from 'next/link'
// import videoBg from '@/assets/video-bg.mp4'
const videoJsOptions = {
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};


export default function Home() {
  return (
    <main className="flex w-full h-[100vh] flex-col items-center justify-between">

      {/* navbar section */}
      <div className="fixed align-middle z-10 text-white hover:bg-white hover:text-black duration-700 w-full h-[70px]">
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

    {/* Landing page */}
    <video src="videoBg.mp4" className="w-full h-full object-cover z-0" autoPlay muted loop></video>



    </main>
  );
}
