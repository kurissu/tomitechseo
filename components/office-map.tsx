import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Reorder } from "framer-motion";
import { Item } from "@/components/reorder/item";
import { useState } from "react";

const initialItems = ["/images/plan7.png","/images/plan8.png", "/images/plan9.png",];


const OfficeMap = () => {
  const [imgToggle, setImgToggle] = React.useState(0);
  const [items, setItems] = useState(initialItems);

  const maps = ["/images/plan7.png", "/images/plan8.png", "/images/plan9.png"];
  const first = "bottom-[300px]";
  const second = " opacity-25 bottom-[220px]";
  const third = "opacity-25 bottom-[140px]";
  return (
    <div className="grid grid-cols-4 h-[100vh]">
      <div className="grid w-52 col-span-1">
        <div>
          <p className="text-lg">Studio</p>
          <h1 className="text-6xl">MAP</h1>
        </div>

        <ul className="map-container-list-container">
          <li className="label-list">
            <label className=" " alt="Art" onClick={() => setImgToggle(0)}>
              Art
            </label>
          </li>
          <li className="label-list">
            <label
              className=" "
              alt="Marketing"
              onClick={() => setImgToggle(1)}
            >
              Marketing
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Marketing">
              Web
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="HR">
              Admin
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Production">
              Producing
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Programming">
              Programming
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Game design">
              Game design
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Audio">
              Audio
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Streaming Room">
              Streaming Room
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Darts">
              Darts
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Consoles">
              Consoles
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="Kitchen">
              Kitchen
            </label>
          </li>
          <li className="label-list">
            <label className=" " alt="RoofTopTerrace">
              Rooftop Terrace
            </label>
          </li>
        </ul>
        <div className="grid">
          <Button onClick={() => setItems(["/images/plan8.png","/images/plan7.png", "/images/plan9.png",])}>Rooftop</Button>
          <Button onClick={() => setItems(["/images/plan7.png","/images/plan9.png", "/images/plan8.png",])}>Second floor</Button>
          <Button onClick={() => setItems(["/images/plan9.png","/images/plan8.png", "/images/plan7.png",])}>First floor</Button>
        </div>
      </div>
      <div className="grid col-span-3 relative">
        <div className="relative w-full">
          {/* <Image
            src="/images/plan7.png"
            className={`absolute ${first} z-20`}
            alt="demo"
            width={1000}
            height={500}
          />
          <Image
            src="/images/plan9.png"
            className={`absolute  ${second} z-10 `}
            alt="demo"
            width={1000}
            height={500}
          />
          <Image
            src="/images/plan8.png"
            className={`absolute ${third} z-0`}
            alt="demo"
            width={1000}
            height={500}
          /> */}
        </div>
        <Reorder.Group axis="y" className="relative" onReorder={setItems} values={items}>
      {items.map((item:any, index) => (
        <Item key={item} item={item}>
          {/* <div className="relative w-full">    */}
          <Image
        src={item}
        key={item}
        className={`absolute mt-[${index * 80}px] z-20`}
        alt="demo"
        width={500}
        height={500}
      />
          {/* </div> */}
      </Item>
        
      ))}
    </Reorder.Group>
        <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item:any,index) => (
        <Item key={item} item={item}>{index}</Item>
      ))}
    </Reorder.Group>
      </div>
    </div>
  );
};

export default OfficeMap;
