import React, { useEffect, useRef, useState } from "react";
import FluidAnimation from "react-fluid-animation";
import random from "random";
import raf from "raf";
import bowser from "bowser";
import styles from "../styles/styles.module.css";

const Page2 = () => {
  // const [animation, setanimationRef] = useState();
  // console.log(animation);
  // useEffect(() => {
  //   setanimationRef(tick());
  // }, []);

  // const reset = () => {
  //   setanimationRef(addRandomSplats(random.int(100, 180)));
  // };

  // const tick = () => {
  //   const maxSplatRadius = bowser.mobile ? 0.001 : 0.005;
  //   const yOffset = bowser.mobile ? -0.1 * window.innerHeight : 0;

  //   const w = random.int(100, 180);
  //   const h = random.int(100, 180);
  //   const r = (w + h) / 6;

  //   const a = Math.min(1.0, Math.max(0, (new Date() - time + 2000) / 20000));
  //   const s = a * maxSplatRadius + (1.0 - a) * 0.00001;
  //   animation.config.splatRadius = s;

  //   const splats = [];
  //   for (let i = 0; i < 1; ++i) {
  //     const color = [random.float(10), random.float(10), random.float(10)];

  //     const t = random.float(2 * Math.PI);
  //     const cos = Math.cos(t);
  //     const sin = Math.sin(t);
  //     const x = w / 2 + r * cos;
  //     const y = h / 2 + r * sin + yOffset;
  //     const k = random.float() > 0.98 ? random.float(3, 10) : 1;
  //     const dx = k * random.float(-1, 1) * random.float(50, 300) * cos;
  //     const dy = k * random.float(-1, 1) * random.float(50, 300) * sin;
  //     const splat = { x, y, dx, dy, color };
  //     splats.push(splat);
  //   }
  //   setanimationRef(splats);
  // };
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <FluidAnimation  />
    </div>
  );
};

export default Page2;
