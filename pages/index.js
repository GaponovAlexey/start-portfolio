import React, { Component } from "react";

import { disableBodyScroll } from "body-scroll-lock";
import bowser from "bowser";
import raf from "raf";
import random from "random";

import FluidAnimation from "react-fluid-animation";
import Typed from "typed.js";

import SocialLinks from "../SocialLinks";

import styles from "../styles/styles.module.css";

const minSplatRadius = 0.00001;
const maxSplatRadius = bowser.mobile ? 0.001 : 0.005;
const yOffset = bowser.mobile ? -0.1 * window.innerHeight : 0;

export default class App extends Component {
  constructor(props) {
    super(props);

    disableBodyScroll(this._body);

    this._reset();
    this._tick();
  }

  componentWillMount() {
    this._time = Date.now();
    this._direction = 1;
  }

  componentWillUnmount() {
    if (this._tickRaf) {
      raf.cancel(this._tickRaf);
      this._tickRaf = null;
    }
  }

  render() {
    return (
      <div className={styles.container} ref={this._bodyRef}>
        <FluidAnimation animationRef={this._animationRef} />

        <div className={styles.overlay}>
          <h1 className={styles.title}>Алексей Гапонов</h1>
        </div>

        <div className={styles.links}>
          <SocialLinks />
        </div>
      </div>
    );
  }

  _animationRef = (ref) => {
    this._animation = ref;
    this._reset();
  };

  _subtitleRef = (ref) => {
    this._subtitle = ref;
  };

  _bodyRef = (ref) => {
    this._body = ref;
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }

  _tick = () => {
    if (this._animation) {
      const w = this._animation.width;
      const h = this._animation.height;
      const r = (w + h) / 6;

      const a = Math.min(
        1.0,
        Math.max(0, (new Date() - this._time + 2000) / 20000)
      );
      const s = a * maxSplatRadius + (1.0 - a) * minSplatRadius;
      this._animation.config.splatRadius = s;

      const splats = [];
      for (let i = 0; i < 1; ++i) {
        const color = [random.float(10), random.float(10), random.float(10)];

        const t = random.float(2 * Math.PI);
        const cos = Math.cos(t);
        const sin = Math.sin(t);
        const x = w / 2 + r * cos;
        const y = h / 2 + r * sin + yOffset;
        const k = random.float() > 0.98 ? random.float(3, 10) : 1;
        const dx = k * random.float(-1, 1) * random.float(50, 300) * cos;
        const dy = k * random.float(-1, 1) * random.float(50, 300) * sin;
        const splat = { x, y, dx, dy, color };
        splats.push(splat);
      }

      this._animation.addSplats(splats);
    }

    this._tickRaf = raf(this._tick);
  };
}
