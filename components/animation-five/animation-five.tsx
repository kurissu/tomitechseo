import React from "react";
// import * as index from './index.js'
import Script from "next/script";
import "./style.css";

const AnimationFive = () => {
  return (
    <>
      {/* <Script src="http://localhost:3000/scripts/easeljs-0.7.1.min.js"></Script>
    <Script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></Script> */}
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></Script>

      <div id="example">
        <canvas id="c"></canvas>
        <Script src="/scripts/animation-five.js"></Script>
      </div>
    </>
  );
};

export default AnimationFive;
