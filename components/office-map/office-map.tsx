import React from "react";
import "@/components/reorder/style.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { Reorder } from "framer-motion";
import { Item } from "@/components/reorder/item";
import { useState } from "react";

const initialItems = [
  "/images/plan7.png",
  "/images/plan8.png",
  "/images/plan9.png",
];

const mapPositions = [
  { img: "/images/art.jpg", alt: "ART"},
  { img: "/images/marketing.jpg", alt: "MARKETING"},
  { img: "/images/prog.jpg", alt: "WEB"},
  { img: "/images/producer.jpg", alt: "PRODUCER"},
  { img: "/images/gamedesign.jpg", alt: "GAME DESIGN"},
];

const OfficeMap = () => {
  const [imgToggle, setImgToggle] = useState(0);
  const [items, setItems] = useState(initialItems);
  const [index, setIndex] = useState(0);
  {
    console.log(index);
  }

  return (
    <div className="relative w-screen h-screen">
      <div className="w-[730px] pt-[55px] ml-[230px]">
        <div>
          <p className="text-lg">Studio</p>
          <h1 className="text-6xl">MAP</h1>
        </div>

        <ul className="map-container-list-container">
          <li className="label-list">
            <label className=" " onClick={() => setImgToggle(0)}>
              Art
            </label>
          </li>
          <li className="label-list">
            <label className=" " onClick={() => setImgToggle(1)}>
              Marketing
            </label>
          </li>
          <li className="label-list">
            <label className=" "  onClick={() => setImgToggle(2)}>Web</label>
          </li>
          <li className="label-list">
            <label className=" ">Admin</label>
          </li>
          <li className="label-list">
            <label className=" " onClick={() => setImgToggle(3)}>Producing</label>
          </li>
          <li className="label-list">
            <label className=" " onClick={() => setImgToggle(2)}>Programming</label>
          </li>
          <li className="label-list">
            <label className=" " onClick={() => setImgToggle(4)}>Game design</label>
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
        <div className="relative w-[700px] h-[130px]">
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
                  setItems([
                    "/images/plan8.png",
                    "/images/plan7.png",
                    "/images/plan9.png",
                  ]);
                  setIndex(0);
                }}
              >
                Rooftop
              </Button>
              <Button
                variant={"link"}
                className={`hover:no-underline hover:text-[#cfbf9c] focus:text-[20px] focus:text-[#cfbf9c]`}
                onClick={() => {
                  setItems([
                    "/images/plan7.png",
                    "/images/plan9.png",
                    "/images/plan8.png",
                  ]);
                  setIndex(1);
                }}
              >
                Second floor
              </Button>
              <Button
                variant={"link"}
                className={`hover:no-underline hover:text-[#cfbf9c] focus:text-[20px] focus:text-[#cfbf9c]`}
                onClick={() => {
                  setItems([
                    "/images/plan9.png",
                    "/images/plan8.png",
                    "/images/plan7.png",
                  ]);
                  setIndex(2);
                }}
              >
                First floor
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/4">
        <Reorder.Group
          axis="y"
          className="relative w-[1061px]"
          onReorder={setItems}
          values={items}
        >
          {items.map((item: any, index) => (
            <Item key={item} item={item}>
              <div className=" w-full">
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
                <div className="absolute w-[284px] h-[224px] p-3">
                  <Image src={`${mapPositions[imgToggle].img}`} width={1000} height={500} alt={mapPositions[imgToggle].alt} />
                </div>
                <div className="absolute p-5 top-44 right-6 w-[236px] h-[300px] bg-white ">
                  <button className="absolute text-[#cfbf9c] top-1 right-2">
                    X
                  </button>
                  <h5 className=" text-[#cfbf9c] top-15">{mapPositions[imgToggle].alt}</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              {/* </>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeMap;
