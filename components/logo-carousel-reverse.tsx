import Image from 'next/image'
import { Button } from './ui/button'


export default function LogoCarouselReverse({
  children,
}: {
  children: React.ReactNode;
}) {

  const logos = [
    { src: 'Facebook', alt: 'Facebook' },
    { src: 'Disney', alt: 'Disney' },
    { src: 'Airbnb', alt: 'Airbnb' },
    { src: 'Apple', alt: 'Apple' },
    { src: 'Spark', alt: 'Spark' },
    { src: 'Samsung', alt: 'Samsung' },
    { src: 'Quora', alt: 'Quora' },
    { src: 'Sass', alt: 'Sass' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse">
        {logos.map((logo, index) => (
          <li key={index}>
            {/* <div className='text-white'>{logo.src}</div> */}
            {children}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            {/* <div className='text-white'>{logo.src}</div> */}
            {children}
          </li>
        ))}
      </ul>
    </div>
  )
}