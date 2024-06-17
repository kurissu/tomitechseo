import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Props = {};

const Nav = (props: Props) => {
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(0);

  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setShow(false);
        setShowList(0);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function handleClick(index: number) {
    if(index === showList) {
      setShowList(0);
    }else{
      setShowList(index);
    }
  }

  console.log(show);

  return (
    <>
      <div
        className={`absolute top-0 left-0 h-full w-[375px] bg-white z-20 px-5 lg:invisible ${
          show ? "visible" : "invisible h-0"
        }`}
        ref={menuRef}
      >
        <div className="absolute top-5" onClick={() => setShow(!show)}>
          X
        </div>
        <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 top-8">
          PEARL ABYSS
        </div>
        <div className="h-full grid py-7 border-2 border-red-500 mt-16">
          <ul className="w-full">
            <li>
              <div
                className={`flex justify-left items-center w-full h-14 mt-1 mb-1 px-4 border-b-2 ${showList === 1 ? "border-black" : ""}`}
                onClick={() => handleClick(1)}
              >
                Introduction
              </div>
              <div
                className={`pt-2 transition-[height] ${
                  showList === 1 ? "visible" : "invisible h-0"
                }`}
              >
                <ul>
                  <li className="p-4">About Us</li>
                  <li className="p-4">Global Lab</li>
                  <li className="p-4">CCP</li>
                </ul>
              </div>
            </li>
            <li>
              <div
                className={`flex justify-left items-center w-full h-14 mt-1 mb-1 px-4 border-b-2 ${showList === 2 ? "border-black" : ""}`}
                onClick={() => handleClick(2)}
              >
                Games
              </div>
              <div
                className={`pt-2 ${
                  showList === 2 ? "visible" : "invisible h-0"
                }`}
              >
                <ul>
                  <li className="p-4">Black Desert</li>
                  <li className="p-4">Black Desert Mobile</li>
                  <li className="p-4">Crimson Desert</li>
                  <li className="p-4">DokeV</li>
                  <li className="p-4">PLAN 8</li>
                </ul>
              </div>
            </li>
            <li>
              <div
                className={`flex justify-left items-center w-full h-14 mt-1 mb-1 px-4 border-b-2 ${showList === 3 ? "border-black" : ""}`}
                onClick={() => handleClick(3)}
              >
                Media
              </div>
              <div
                className={`pt-2 ${
                  showList === 3 ? "visible" : "invisible h-0"
                }`}
              >
                <ul>
                  <li className="p-4">Press Releases</li>
                  <li className="p-4">Global Lab</li>
                </ul>
              </div>
            </li>
            <li>
              <div
                className={`flex justify-left items-center w-full h-14 mt-1 mb-1 px-4 border-b-2 ${showList === 4 ? "border-black" : ""}`}
                onClick={() => handleClick(4)}
              >
                Culture
              </div>
              <div
                className={`pt-2 ${
                  showList === 4? "visible" : "invisible h-0"
                }`}
              >
                <ul>
                  <li className="p-4">About Us</li>
                  <li className="p-4">Global Lab</li>
                  <li className="p-4">CCP</li>
                </ul>
              </div>
            </li>
            <li>
              <div
                className={`flex justify-left items-center w-full h-14 mt-1 mb-1 px-4 border-b-2 ${showList === 5 ? "border-black" : ""}`}
                onClick={() => handleClick(5)}
              >
                Careers
              </div>
              <div
                className={`pt-2 ${
                  showList === 5 ? "visible" : "invisible h-0"
                }`}
              >
                <ul>
                  <li className="p-4">About Us</li>
                  <li className="p-4">Global Lab</li>
                  <li className="p-4">CCP</li>
                </ul>
              </div>
            </li>
            <li>
              <div
                className={`flex justify-left items-center w-full h-14 mt-1 mb-1 px-4 border-b-2 ${showList === 6 ? "border-black" : ""}`}
                onClick={() => handleClick(6)}
              >
                Investor
              </div>
              <div
                className={`pt-2 ${
                  showList === 6 ? "visible" : "invisible h-0"
                }`}
              >
                <ul>
                  <li className="p-4">About Us</li>
                  <li className="p-4">Global Lab</li>
                  <li className="p-4">CCP</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute align-middle z-10 text-white lg:hover:bg-white lg:hover:text-black duration-700 w-full px-5">
        <nav className="flex lg:justify-around justify-between items-center space-x-12 h-12">
          <Image
            className="lg:hidden"
            src="/images/hamburger.svg"
            alt="logo"
            width={32}
            height={32}
            onClick={() => setShow(!show)}
          />
          <h1 className="text-3xl font-bold align-bottom">TomiTech24</h1>
          <div className="flex justify-between align-middle items-center h-full space-x-12 max-lg:hidden">
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
          <Image
            className="lg:hidden"
            src="/images/globe.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </nav>
      </div>
    </>
  );
};

export default Nav;
