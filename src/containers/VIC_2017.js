import React, { Component } from 'react'
import { Link } from 'react-static';
import { Grid, Image, Icon, Button, Reveal } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax, TimelineMax } from 'gsap';
import { isMobile } from 'react-device-detect';
import Slider from "react-slick";

import ScrollMagic from "../lib/ScrollMagic";


import './VIC2017.css'

import "../lib/illuminated.js";

const { Column, Row } = Grid

class VIC2017 extends Component {
  render = () => (
  <div >
    <h1 id="pinContainer" style={{position:"fixed", zIndex:150}}>ค่ายวิศวพัฒน์</h1>
    <div className="panel blue">
      <h1>ONE</h1>
    </div>
    <div className="panel turqoise">
      <h1>TWO</h1>
    </div>
    <div className="panel green">
      <h1>THREE</h1>
    </div>
    <div className="panel bordeaux">
      <h1>FOUR</h1>
    </div>
  </div>
  )
  componentDidMount = async () => {
    if (ScrollMagic !== null) {
      const controller = new ScrollMagic.Controller()
      const wipeAnimation = new TimelineMax()
			.fromTo("div.panel.turqoise", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("div.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("div.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

      // create scene to pin and link animation
      new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "30000%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);
    }
  }
}

export default VIC2017
