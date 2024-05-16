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

const OfficeMap = () => {
  const [imgToggle, setImgToggle] = React.useState(0);
  const [items, setItems] = useState(initialItems);
  const [index, setIndex] = useState(0);

  const maps = ["/images/plan7.png", "/images/plan8.png", "/images/plan9.png"];
  const first = "bottom-[300px]";
  const second = " opacity-25 bottom-[220px]";
  const third = "opacity-25 bottom-[140px]";
  return (
    <div className="grid m-44 grid-cols-4 h-[100vh]">
      <div className="grid w-full col-span-1">
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
        <div className="grid grid-cols-2">
        <div className="flex justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 fill-[#cfbf9c]"
            viewBox="0 0 90 244"
          >
            <path id="line_1_" d="M27.5 0h5v244h-5z"></path>
            <g id="lift_1_" className={`translate-y-[${index * 4.8}rem]`}>
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
          <div className=" grid text-[#cfbf9c] h-52">
          <Button
          variant={"link"}
          className={`hover:no-underline hover:text-[#cfbf9c] ${index === 0 ? `text-[20px] text-[#cfbf9c]` : ``}`}
            onClick={() =>{

              setItems([
                "/images/plan8.png",
                "/images/plan7.png",
                "/images/plan9.png",
              ])
              setIndex(0)
            }
            }
          >
            Rooftop
          </Button>
          <Button
          variant={"link"}
          className={`hover:no-underline hover:text-[#cfbf9c] focus:text-[20px] focus:text-[#cfbf9c]`}
            onClick={() =>{   
              setItems([
                "/images/plan7.png",
                "/images/plan9.png",
                "/images/plan8.png",
              ])
              setIndex(1)
            }
            }
          >
            Second floor
          </Button>
          <Button
          variant={'link'}
          className={`hover:no-underline hover:text-[#cfbf9c] focus:text-[20px] focus:text-[#cfbf9c]`}
            onClick={() =>{
              setItems([
                "/images/plan9.png",
                "/images/plan8.png",
                "/images/plan7.png",
              ])
              setIndex(2)
            }
            }
          >
            First floor
          </Button>
          </div>
    
        </div>
      </div>
      <div className="grid col-span-3 relative">
        {/* <div className="relative w-full"> */}
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
        {/* </div> */}
        <Reorder.Group
          axis="y"
          className="relative w-full"
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
        <div className="absolute z-50 top-0 left w-full h-full ">
            <Image src={'/images/art.jpg'} width={500} height={200} alt={'demo'}/>
            <div className="absolute p-5 bottom-5 left-5 w-[450px] h-[500px] bg-white ">
              <Button className="absolute text-[#cfbf9c] right-5">X</Button>
              <h5 className=" text-[#cfbf9c] top-15">ART</h5>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        
        
      </div>
    </div>
  );
};

export default OfficeMap;
