import React from "react";
import Image from "next/image";
const OurFranchises = () => {

    const games = [
        { src: '/images/franchise-sonic.webp', alt: 'sonic', title: 'title of Our Franchises' },
        { src: '/images/franchise-fm.webp', alt: 'Facebook', title: 'title of Our Franchises' },
        { src: '/images/franchise-samba.webp', alt: 'Facebook', title: 'title of Our Franchises' },
        { src: '/images/franchise-totalwar.webp', alt: 'Facebook', title: 'title of Our Franchises' },
        { src: '/images/franchise-twopoint.webp', alt: 'Facebook', title: 'title of Our Franchises' },
      ]
  return (
    <div>
      <h1 className="text-3xl">Our Franchises</h1>
      <div className="grid grid-cols-5">
        {
            games.map((game, key) => (
                <div key={key} className="grid grid-span-1 hover:translate-y-[-10px] duration-200">
                    <Image
                        src={game.src}
                        width={300}
                        height={300}
                        alt={game.alt}
                        className="rounded-xl"
                    />
                    <p>{game.title}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default OurFranchises;
