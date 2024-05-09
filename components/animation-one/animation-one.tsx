import React from 'react'
// import * as index from './index.js'
import Script from 'next/script'
import './style.css'


const TestTwo = () => {

  return (
    <>
        <Script src="http://localhost:3000/scripts/easeljs-0.7.1.min.js"></Script>
    <Script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></Script>
    <div id='example'>
        <canvas id="projector">Your browser does not support the Canvas element.</canvas>
        <Script src='/scripts/animation-one.js'></Script>
    </div>
    </>
)
}

export default TestTwo