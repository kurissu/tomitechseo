import React from "react";
import { Button } from "@/components/ui/button";

const mobileGame = () => {
  return (
    <section>
      <div className="fixed h-full left-40 z-10 bg-gray-800 bg-opacity-5 px-4">
        <div className=" mt-32">
          <p className="text-white">Game</p>
          <h1 className="text-4xl text-white">ENDLESS DUNGEON</h1>
          <video
            src="../videoBg.mp4"
            className="w-[700px] h-[500px]"
            controls
          ></video>
          <p className=" text-lg text-white w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            tempora beatae dicta deleniti illum voluptas eligendi, accusantium
            sunt vel. Harum voluptates dolor molestiae nisi deleniti tempore
            sunt doloremque vero sapiente?
          </p>
          <Button variant="ghost" className="text-white border-2 border-white">
            BUY NOW
          </Button>
          <Button variant="ghost" className="text-white border-2 border-white">
            JOIN THE COMMUNITY
          </Button>
        </div>
      </div>
      <video
        src="../video1.mp4"
        className="w-full h-[100vh] object-cover z-0"
        autoPlay
        muted
        loop
      ></video>
    </section>
  );
};

export default mobileGame;
