import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const OfficeMap = () => {
  return (
    <div className="grid grid-cols-4 h-[100vh]">
      <div className="grid w-52 col-span-1">
        <div>
          <p className="text-lg">Studio</p>
          <h1 className="text-6xl">MAP</h1>
        </div>
        <ul>
          <li>
            <Button>ART</Button></li>
          <li>
            <Button>MARKETING</Button></li>
          <li>
            <Button>WEB</Button></li>
          <li>
            <Button>ADMIN</Button></li>
          <li>
            <Button>PROGRAMMING</Button></li>
          <li>
            <Button>GAME DESIGN</Button></li>
          <li>
            <Button>AUDIO</Button></li>
          <li>
            <Button>KITCHEN</Button></li>
        </ul>
      </div>
      <Image
        src="/images/plan8.png"
        className="col-span-3 self-center"
        alt="demo"
        width={1000}
        height={500}
      />
    </div>
  );
};

export default OfficeMap;
