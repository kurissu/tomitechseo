import React from "react";
import "@/components/reorder/style.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { Reorder } from "framer-motion";
import { Item } from "@/components/reorder/item";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: "-100%",
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      duration: 0.8,
    },
  },
};
const cardVariant2: Variants = {
  offscreen: {
    y: "-20%",
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      duration: 0.8,
    },
  },
};

const initialItems = [
  "/images/plan7.png",
  "/images/plan8.png",
  "/images/plan9.png",
];

const mapPositions = [
  { img: "/images/art.jpg", alt: "ART" },
  { img: "/images/marketing.jpg", alt: "WEB & MARKETING" },
  { img: "/images/prog.jpg", alt: "PROGRAMMING" },
  { img: "/images/producer.jpg", alt: "PRODUCTION" },
  { img: "/images/gamedesign.jpg", alt: "GAME DESIGN" },
];

const OfficeMap = () => {
  const [imgToggle, setImgToggle] = useState<any>(null);
  const [items, setItems] = useState(initialItems);
  const [index, setIndex] = useState(0);
  {
    console.log(index);
  }
  function roofTop() {
    setItems(["/images/plan8.png", "/images/plan7.png", "/images/plan9.png"]);
    setIndex(0);
  }
  function secondFloor() {
    setItems(["/images/plan7.png", "/images/plan9.png", "/images/plan8.png"]);
    setIndex(1);
  }
  function firstFloor() {
    setItems(["/images/plan9.png", "/images/plan8.png", "/images/plan7.png"]);
    setIndex(2);
  }

  return (
    <div className="relative w-screen h-screen">
      <div className="grid grid-rows-3 grid-flow-col gap-4 lg:pl-40 md:pl-40">
        <motion.div className="max-sm:row-span-1 col-span-2 md:col-span-3 lg:text-left md:text-left text-center">
          <motion.div variants={cardVariants}>
            <p className="text-lg">Studio</p>
            <h1 className="text-6xl">MAP</h1>
          </motion.div>
        </motion.div>
        <div className="row-span-2 lg:row-span-2">
          <motion.div
            className="w-[150px] lg:pt-[55px] lg-[230px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.div variants={cardVariant2}>
              <ul className="map-container-list-container ">
                <li className="label-list">
                  <label
                    className=" "
                    onClick={() => {
                      setImgToggle(0), firstFloor();
                    }}
                  >
                    Art
                  </label>
                </li>
                <li className="label-list">
                  <label
                    className=" "
                    onClick={() => {
                      setImgToggle(1), secondFloor();
                    }}
                  >
                    Marketing
                  </label>
                </li>
                <li className="label-list">
                  <label
                    className=" "
                    onClick={() => {
                      setImgToggle(1), secondFloor();
                    }}
                  >
                    Web
                  </label>
                </li>
                <li className="label-list">
                  <label className=" ">Admin</label>
                </li>
                <li className="label-list">
                  <label
                    className=" "
                    onClick={() => {
                      setImgToggle(3), secondFloor();
                    }}
                  >
                    Producing
                  </label>
                </li>
                <li className="label-list">
                  <label
                    className=" "
                    onClick={() => {
                      setImgToggle(2), firstFloor();
                    }}
                  >
                    Programming
                  </label>
                </li>
                <li className="label-list">
                  <label
                    className=" "
                    onClick={() => {
                      setImgToggle(4), secondFloor();
                    }}
                  >
                    Game design
                  </label>
                </li>
                <li className="label-list">
                  <label className=" ">Audio</label>
                </li>
                <li className="label-list">
                  <label className=" ">Streaming Room</label>
                </li>
                <li className="label-list">
                  <label className=" ">Darts</label>
                </li>
                <li className="label-list">
                  <label className=" ">Consoles</label>
                </li>
                <li className="label-list">
                  <label className=" ">Kitchen</label>
                </li>
                <li className="label-list">
                  <label className=" ">Rooftop Terrace</label>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        <div className="col-span-2 lg:row-span-1">
          <motion.div
            className="relative w-[300px] max-lg:w-[500px] h-[130px]"
            variants={cardVariant2}
          >
            <div className="absolute bottom-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 fill-[#cfbf9c]"
                viewBox="0 0 90 244"
              >
                <path id="line_1_" d="M27.5 0h5v244h-5z"></path>
                <g id="lift_1_" transform={`translate(0, ${index * 76.8})`}>
                  <path
                    className={index === 0 ? `opacity-25` : ``}
                    id="arrow-top_1_"
                    d="M77.5 22.5c-.8 0-1.6.4-2.1 1.1l-10 15c-.5.8-.6 1.8-.1 2.6s1.3 1.3 2.2 1.3h20c.9 0 1.8-.5 2.2-1.3s.4-1.8-.1-2.6l-10-15c-.5-.7-1.3-1.1-2.1-1.1zm-5.3 15l5.3-8 5.3 8H72.2z"
                  ></path>
                  <path
                    className={index === 2 ? `opacity-25` : ``}
                    id="arrow-bottom_1_"
                    d="M87.5 47.5h-20c-.9 0-1.8.5-2.2 1.3s-.4 1.8.1 2.6l10 15c.5.7 1.2 1.1 2.1 1.1s1.6-.4 2.1-1.1l10-15c.5-.8.6-1.8.1-2.6s-1.3-1.3-2.2-1.3zm-10 13l-5.3-8h10.7l-5.4 8z"
                  ></path>
                  <path
                    id="lift-all_1_"
                    d="M2.5 90h55c1.4 0 2.5-1.1 2.5-2.5v-85C60 1.1 58.9 0 57.5 0h-55C1.1 0 0 1.1 0 2.5v85C0 88.9 1.1 90 2.5 90zm30-85H55v80H32.5V5zM5 5h22.5v80H5V5z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-0 left-24 text-[#cfbf9c] z-50">
              <div className="grid">
                <Button
                  variant={"link"}
                  className={`hover:no-underline hover:text-[#cfbf9c] ${
                    index === 0 ? `text-[20px] text-[#cfbf9c]` : ``
                  }`}
                  onClick={() => {
                    roofTop();
                    setImgToggle(null);
                  }}
                >
                  Rooftop
                </Button>
                <Button
                  variant={"link"}
                  className={`hover:no-underline hover:text-[#cfbf9c] focus:text-[20px] focus:text-[#cfbf9c]`}
                  onClick={() => {
                    secondFloor();
                    setImgToggle(null);
                  }}
                >
                  Second floor
                </Button>
                <Button
                  variant={"link"}
                  className={`hover:no-underline hover:text-[#cfbf9c] focus:text-[20px] focus:text-[#cfbf9c]`}
                  onClick={() => {
                    firstFloor();
                    setImgToggle(null);
                  }}
                >
                  First floor
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="row-span-1 col-span-2 lg:col-span-9">
          <div className="relative">
            <div className="absolute top-0 ">
              <Reorder.Group
                axis="y"
                className="relative w-[1061px] max-lg:w-[350px]"
                onReorder={setItems}
                values={items}
              >
                {items.map((item: any, index) => (
                  <Item key={item} item={item}>
                    <div>
                      <Image
                        src={item}
                        key={item}
                        alt="demo"
                        className="w-full h-full"
                        width={5000}
                        height={500}
                      />
                    </div>
                  </Item>
                ))}
              </Reorder.Group>
              <div className="absolute z-50 right-0">
                <div className="relative w-[284px] ">
                  {/* {mapPositions.map((item, index) => (
              <> */}
                  {imgToggle !== null && (
                    <>
                      <div className="absolute w-[284px] h-[224px] p-3">
                        <Image
                          src={`${mapPositions[imgToggle].img}`}
                          width={1000}
                          height={500}
                          alt={mapPositions[imgToggle].alt}
                        />
                      </div>
                      <div className="absolute p-5 top-44 right-6 w-[236px] h-[300px] bg-white ">
                        <button
                          className="absolute text-[#cfbf9c] top-1 right-2"
                          onClick={() => setImgToggle(null)}
                        >
                          X
                        </button>
                        <h5 className=" text-[#cfbf9c] top-15">
                          {mapPositions[imgToggle].alt}
                        </h5>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </>
                  )}
                  {/* </>
            ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeMap;
