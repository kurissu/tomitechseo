"use client";

import Image from "next/image";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css";

export default function App() {
  const [hoverTab, setHoverTab] = useState();
  const [selectedTab, setSelectedTabTab] = useState();

  const handleMouseOver = (item) => {
    setHoverTab(item);
    setSelectedTabTab(null);
  };

  const handleMouseLeave = () => {
    if (selectedTab) {
      setHoverTab(null);
    }
  };

  const handleMouseClick = (item) => {
    setSelectedTabTab(item);
  };

  return (
    <div>
      <main>
        <div className={`modal-left ${selectedTab ? "hide" : "show"}`}></div>
        <div className={`modal-right ${selectedTab ? "hide" : "show"}`}></div>
        {tabs.map((item) => (
          <div
            className=" flex flex-row justify-center items-end"
            key={item?.alt}
          >
            <Image
              className={` z-40 character ${
                item.alt === selectedTab?.alt
                  ? "show"
                  : item.alt === hoverTab?.alt
                  ? "show"
                  : "hide"
              }`}
              src={item.src}
              alt={item.alt}
              width={800}
              height={400}
            />
          </div>
        ))}
      </main>

      <div className=" w-full absolute bottom-0 z-50 flex flex-row justify-evenly h-16 bg-red-300">
        {tabs.map((item) => (
          <button
            key={item.alt}
            className={item === hoverTab ? "selected" : ""}
            onMouseOver={() => handleMouseOver(item)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseClick(item)}
          >
            {item.alt}

            {item === hoverTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
