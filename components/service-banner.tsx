import React from "react";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <div className="grid grid-cols-1 h-full lg:w-[calc(100%-500px)] md:grid-cols-2 lg:grid-cols-4 text-center text-white lg:h-[700px]">
      <Link
        href={"/service/mini-game"}
        className={
          "grid items-center card-zoom overflow-hidden"
        }
      >
        <div className="w-full h-full relative">
          <div className="w-full h-full relative bg-company bg-cover card-zoom-image">
          </div>
          <div className="absolute w-full h-full lg:h-1/2 bottom-0">
            <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <div className="text-2xl lg:card-zoom-text">Mini game</div>
              <hr className="align-middle hidden lg:card-zoom-desc"/>
              <div className="text-xxl lg:hidden card-zoom-desc">description</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href={"/service/mini-game"}
        className={
          "grid items-center card-zoom overflow-hidden"
        }
      >
        <div className="w-full h-full relative">
          <div className="w-full h-full relative bg-culture bg-cover card-zoom-image">
          </div>
          <div className="absolute w-full h-full lg:h-1/2 bottom-0">
            <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className="text-2xl lg:card-zoom-text">Mini game</div>
              <hr className="align-middle hidden lg:card-zoom-desc"/>
              <div className="text-xxl lg:hidden card-zoom-desc">description</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href={"/service/mini-game"}
        className={
          "grid items-center card-zoom overflow-hidden"
        }
      >
        <div className="w-full h-full relative">
          <div className="w-full h-full relative bg-in bg-cover card-zoom-image">
          </div>
          <div className="absolute w-full h-full lg:h-1/2 bottom-0">
            <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className="text-2xl lg:card-zoom-text">Mini game</div>
              <hr className="align-middle hidden lg:card-zoom-desc"/>
              <div className="text-xxl lg:hidden card-zoom-desc">description</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href={"/service/mini-game"}
        className={
          "grid items-center card-zoom overflow-hidden"
        }
      >
        <div className="w-full h-full relative">
          <div className="w-full h-full relative bg-lab bg-cover card-zoom-image">
          </div>
          <div className="absolute w-full h-full lg:h-1/2 bottom-0">
            <div className="absolute w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className="text-2xl lg:card-zoom-text">Mini game</div>
              <hr className="align-middle hidden lg:card-zoom-desc"/>
              <div className="text-xxl lg:hidden card-zoom-desc">description</div>
            </div>
          </div>
        </div>
      </Link>

     
      {/* <h1 className="text-3xl font-bold underline">service</h1> */}
      {/* <Link href="/service/mini-game" className="grid col-span-4 [grid-template-columns:1fr]  md:col-span-2  lg:col-span-1 overflow-hidden">
        <span className="flex justify-center md:block [grid-column:1] [grid-row:1] hover:scale-125 hover:z-0 object-fill duration-700">
          <Image
          className='object-contain'
            src="/images/main_category_company.jpg"
            alt="mini game"
            width={2000}
            height={1000}
          />
        </span>
        <div className="sm:text-3xl [grid-column:1] [grid-row:1] place-self-center text-2xl text-white-400 md:bottom-[35rem] md:left-[40%] left-24 overflow-hidden z-10">
          Mini game
        </div>
      </Link>
      <Link href="/service/mobile-game" className="grid col-span-4 [grid-template-columns:1fr] md:col-span-2  lg:col-span-1 overflow-hidden">
        <span className="flex justify-center md:block [grid-column:1] [grid-row:1] hover:scale-125 hover:z-0 object-fill duration-700	">
          <Image
            src="/images/main_category_lab.jpg"
            alt="mini game"
            width={2000}
            height={1000}
          />
        </span>
        <div className="sm:text-3xl [grid-column:1] [grid-row:1] place-self-center text-2xl text-white-400 md:bottom-[35rem] md:left-[40%] left-24 overflow-hidden z-10">
          Mobile game
        </div>
      </Link>
      <Link href="/service/art" className="grid col-span-4 [grid-template-columns:1fr] md:col-span-2 lg:col-span-1 overflow-hidden">
        <span className="flex justify-center md:block [grid-column:1] [grid-row:1] hover:scale-125 hover:z-0 object-fill duration-700	">
          <Image
            src="/images/main_category_culture.jpg"
            alt="mini game"
            width={2000}
            height={1000}
          />
        </span>
        <div className="sm:text-3xl [grid-column:1] [grid-row:1] place-self-center text-2xl text-white-400 md:bottom-[35rem] md:left-[40%] left-24 overflow-hidden z-10">
        Art
        </div>
      </Link>
      <Link href="/service/brand-website" className="grid col-span-4 [grid-template-columns:1fr] md:col-span-2  lg:col-span-1 overflow-hidden">
        <span className="flex justify-center md:block [grid-column:1] [grid-row:1] hover:scale-125 hover:z-0 object-fill duration-700	">
          <Image
            src="/images/main_category_in.jpg"
            alt="mini game"
            width={2000}
            height={1000}
          />
        </span>
        <div className="sm:text-3xl [grid-column:1] [grid-row:1] place-self-center text-2xl text-white-400 md:bottom-[35rem] md:left-[40%] left-24 overflow-hidden z-10">
        Brand website
        </div>
      </Link> */}
      {/* <Link href="/service/mini-game" ><div className=''>mini game</div> <Image src="/images/main_category_company.jpg" alt="mini game" width={500} height={1000}/></Link>
    <Link href="/service/mobile-game"><div className=''>mobile game</div><Image src="/images/main_category_lab.jpg" alt="mini game" width={500} height={1000}/></Link>
    <Link href="/service/art"><div className=''>art</div><Image src="/images/main_category_culture.jpg" alt="mini game" width={500} height={1000}/></Link>
    <Link href="/service/brand-website"><div className=''>brand website</div><Image src="/images/main_category_in.jpg" alt="mini game" width={500} height={1000}/></Link> */}
    </div>
  );
};

export default ServiceBanner;
