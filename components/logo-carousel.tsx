import Image from 'next/image'


export default function LogoCarousel() {

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
  const tagline = 'Embark on a new adventure today with Tomitech.'

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-infinite-scroll">
        {tagline.split(" ").map((word, index) => (
          <li key={index}>
            {/* <div className='text-white'>{word}</div> */}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {tagline.split(" ").map((word, index) => (
          <li key={index}>
            <div className='text-white'>{word}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}