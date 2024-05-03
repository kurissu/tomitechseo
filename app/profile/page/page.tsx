import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='grid grid-cols-4'>
      <div className='grid gap-10 w-52 col-span-1'>
        <div>
          <p className='text-lg'>Studio</p>
          <h1 className='text-6xl'>MAP</h1>
        </div>
        <ul>
          <li>ART</li>
          <li>MARKETING</li>
          <li>WEB</li>
          <li>ADMIN</li>
          <li>PRODUCING</li>
          <li>PROGRAMMING</li>
          <li>GAME DESIGN</li>
          <li>AUDIO</li>
          <li>STREAMING ROOM</li>
          <li>DARTS</li>
          <li>CONSOLES</li>
          <li>KITCHEN</li>
          <li>ROOFTOP TERRACE</li>
        </ul>
      </div>
      <Image src="/images/plan8.png" className='col-span-3' alt='demo' width={1000} height={500}/>
    </main>
  )
}

export default page