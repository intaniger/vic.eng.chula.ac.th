import React, { Component } from 'react'
import { Link } from 'react-static';
import { Grid, Image, Icon, Button, Reveal } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax, TimelineMax } from 'gsap';
import { isMobile, isTablet } from 'react-device-detect';
import Slider from "react-slick";

import ScrollMagic from "../../lib/ScrollMagic";
import VIC_1 from "../../asset/camp_history/vic-2-1-ios.png";
import VIC_2 from "../../asset/camp_history/vic-2-2-ios.png";
import VIC_3 from "../../asset/camp_history/vic-2-3-ios.png";
import VIC_4 from "../../asset/camp_history/vic-2-4-ios.png";
import VIC_5 from "../../asset/camp_history/vic-2-5-ios.png";

import './VIC2017.css'

import "../../lib/illuminated";

const { Column, Row } = Grid

class VIC2018 extends Component {
  state={
    imageHeight:"20%"
  }
  componentDidMount(){
    this.setState({imageHeight:this.state.elem.offsetHeight/5})
  }
  render = () => (
    <div style={{ width: "100%", height: this.state.imageHeight, overflowX:"scroll", overflowY:"scroll" }} ref={elem => {
      this.state.elem = elem
    }}>
      <Image centered src={VIC_1} />
      <Image centered src={VIC_2} style={{marginTop:"10px"}} />
      <Image centered src={VIC_3} style={{marginTop:"10px"}} />
      <Image centered src={VIC_4} style={{marginTop:"10px"}} />
      <Image centered src={VIC_5} style={{marginTop:"10px"}} />
    </div>
  )
}

export default VIC2018