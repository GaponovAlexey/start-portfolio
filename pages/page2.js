import React, { useEffect, useRef, useState } from "react";
import FluidAnimation from "react-fluid-animation";
import random from "random";
import raf from "raf";
import bowser from "bowser";
import styles from "../styles/styles.module.css";

const Page2 = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <FluidAnimation />
    </div>
  );
};

export default Page2;
