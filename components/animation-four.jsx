'use client'
import React, { useEffect, useRef } from 'react';
import anime from 'animejs'; // Assuming you have animejs installed

const AnimationFour = () => {
  const canvasRef = useRef(null);
  let ctx;
  let cH;
  let cW;
  let bgColor = "#FF6138";
  let animations = [];
  let circles = [];

  const colorPicker = {
    colors: ["#FF6138", "#FFBE53", "#2980B9", "#282741"],
    index: 0,
    next() {
      this.index = this.index++ < this.colors.length - 1 ? this.index : 0;
      return this.colors[this.index];
    },
    current() {
      return this.colors[this.index];
    }
  };

  const removeAnimation = (animation) => {
    const index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  };

  const calcPageFillRadius = (x, y) => {
    const l = Math.max(x - 0, cW - x);
    const h = Math.max(y - 0, cH - y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
  };

  const handleEvent = (e) => {
    if (e.touches) {
      e.preventDefault();
      e = e.touches[0];
    }
    const currentColor = colorPicker.current();
    const nextColor = colorPicker.next();
    const targetR = calcPageFillRadius(e.pageX, e.pageY);
    const rippleSize = Math.min(200, (cW * .4));
    const minCoverDuration = 750;

    const pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: nextColor
    });
    const fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration: Math.max(targetR / 2, minCoverDuration),
      easing: "easeOutQuart",
      complete: function () {
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });

    const ripple = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    const rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: removeAnimation
    });

    const particles = [];
    for (let i = 0; i < 32; i++) {
      const particle = new Circle({
        x: e.pageX,
        y: e.pageY,
        fill: currentColor,
        r: anime.random(24, 48)
      });
      particles.push(particle);
    }
    const particlesAnimation = anime({
      targets: particles,
      x: function (particle) {
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function (particle) {
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000, 1300),
      complete: removeAnimation
    });
    animations.push(fillAnimation, rippleAnimation, particlesAnimation);
  };

  const extend = (a, b) => {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  };

  const Circle = function (opts) {
    extend(this, opts);
  };

  Circle.prototype.draw = function () {
    ctx.globalAlpha = this.opacity || 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    if (this.stroke) {
      ctx.strokeStyle = this.stroke.color;
      ctx.lineWidth = this.stroke.width;
      ctx.stroke();
    }
    if (this.fill) {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
    ctx.closePath();
    ctx.globalAlpha = 1;
  };

  useEffect(() => {
    ctx = canvasRef.current.getContext('2d');
    cW = window.innerWidth;
    cH = window.innerHeight;
    canvasRef.current.width = cW * window.devicePixelRatio;
    canvasRef.current.height = cH * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const animate = anime({
      duration: Infinity,
      update: function () {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function (anim) {
          anim.animatables.forEach(function (animatable) {
            animatable.target.draw();
          });
        });
      }
    });

    const resizeCanvas = () => {
      cW = window.innerWidth;
      cH = window.innerHeight;
      canvasRef.current.width = cW * window.devicePixelRatio;
      canvasRef.current.height = cH * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleInactiveUser = () => {
      const inactive = setTimeout(function () {
        fauxClick(cW / 2, cH / 2);
      }, 2000);

      const clearInactiveTimeout = () => {
        clearTimeout(inactive);
        document.removeEventListener("mousedown", clearInactiveTimeout);
        document.removeEventListener("touchstart", clearInactiveTimeout);
      };

      document.addEventListener("mousedown", clearInactiveTimeout);
      document.addEventListener("touchstart", clearInactiveTimeout);
    };

    const startFauxClicking = () => {
      setTimeout(function () {
        fauxClick(anime.random(cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
        startFauxClicking();
      }, anime.random(200, 900));
    };

    const fauxClick = (x, y) => {
      const fauxClick = new Event("mousedown");
      fauxClick.pageX = x;
      fauxClick.pageY = y;
      document.dispatchEvent(fauxClick);
    };

    const addClickListeners = () => {
      document.addEventListener("touchstart", handleEvent);
      document.addEventListener("mousedown", handleEvent);
    };

    window.addEventListener("resize", resizeCanvas);
    addClickListeners();
    handleInactiveUser();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("touchstart", handleEvent);
      document.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default AnimationFour;
