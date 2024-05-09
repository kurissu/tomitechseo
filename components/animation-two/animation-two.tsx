import React from 'react'
// import * as index from './index.js'
import Script from 'next/script'
import './style.css'


const AnimationTwo = () => {

  return (
    <>
        {/* <Script src="https://code.createjs.com/easeljs-0.7.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script> */}
        {/* <Script src="http://localhost:3000/easeljs-0.7.1.min.js"></Script>
    <Script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></Script> */}
    <div id='example'>
    <canvas id="canvas"></canvas>
        <Script src='scripts/animation-two.js'></Script>
    </div>
    </>
)
}

export default AnimationTwo