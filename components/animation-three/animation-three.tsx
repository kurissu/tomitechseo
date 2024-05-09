import React from 'react'
// import * as index from './index.js'
import Script from 'next/script'
import './style.css'


const AnimationThree = () => {

  return (
    <>
        {/* <Script src="https://code.createjs.com/easeljs-0.7.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script> */}
        {/* <Script src="http://localhost:3000/easeljs-0.7.1.min.js"></Script>
    <Script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></Script> */}


    <div id="large-header" className="large-header">
  <canvas id="demo-canvas"></canvas>
    <h1 className="main-title">Connect <span className="thin">Three</span></h1>
    <Script src='scripts/animation-three.js'></Script>

</div>
    </>
)
}

export default AnimationThree