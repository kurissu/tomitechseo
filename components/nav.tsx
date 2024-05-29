import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Nav = (props: Props) => {
  return (
      <div className="absolute align-middle z-10 text-white lg:hover:bg-white lg:hover:text-black duration-700 w-full">
        <nav className="flex lg:justify-around justify-between space-x-12">
            <Image className="lg:hidden" src="/images/hamburger.svg" alt="logo" width={32} height={32}/>
          <h1 className="text-3xl font-bold align-bottom">TomiTech24</h1>

          <div className="flex justify-between align-middle h-full space-x-12 max-lg:hidden">
            <Link href="/profile">Profile</Link>
            <Link href="/service">Service</Link>
            <Link href="/news">News</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about">About</Link>
            <Link href="/contacts">Contacts</Link>
          </div>
          <div className="flex justify-between space-x-2 max-lg:hidden">
            <p>TH</p>
            <p>|</p>
            <p>EN</p>
          </div>
          <Image className="lg:hidden" src="/images/globe.svg" alt="logo" width={32} height={32}/>
        </nav>
      </div>  );
};

export default Nav;
