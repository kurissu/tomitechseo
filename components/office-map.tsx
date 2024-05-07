import React from "react";
import Image from "next/image";

const OfficeMap = () => {
  return (
    <div className="grid grid-cols-4 h-[100vh]">
      <div className="grid w-52 col-span-1">
        <div>
          <p className="text-lg">Studio</p>
          <h1 className="text-6xl">MAP</h1>
        </div>
        <ul>
          <li>ART</li>
          <li>MARKETING</li>
          <li>WEB</li>
          <li>ADMIN</li>
          <li>PROGRAMMING</li>
          <li>GAME DESIGN</li>
          <li>AUDIO</li>
          <li>KITCHEN</li>
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
