import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ServiceBanner = () => {
  return (
<div className="grid grid-cols-4 text-center text-white h-full">
      {/* <h1 className="text-3xl font-bold underline">service</h1> */}
      <Link href="/service/mini-game" className="grid col-span-4 [grid-template-columns:1fr]  md:col-span-2  lg:col-span-1 overflow-hidden">
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
      </Link>
      {/* <Link href="/service/mini-game" ><div className=''>mini game</div> <Image src="/images/main_category_company.jpg" alt="mini game" width={500} height={1000}/></Link>
    <Link href="/service/mobile-game"><div className=''>mobile game</div><Image src="/images/main_category_lab.jpg" alt="mini game" width={500} height={1000}/></Link>
    <Link href="/service/art"><div className=''>art</div><Image src="/images/main_category_culture.jpg" alt="mini game" width={500} height={1000}/></Link>
    <Link href="/service/brand-website"><div className=''>brand website</div><Image src="/images/main_category_in.jpg" alt="mini game" width={500} height={1000}/></Link> */}
    </div>  )
}

export default ServiceBanner