import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import {TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax, TimelineMax} from 'gsap';
import ScrollMagic from "../lib/ScrollMagic";

import "particles.js";

import Mountain from '../asset/mountain.png'
import VICLogo from '../asset/VICLogo.png'

import VIC from '../asset/VIC.svg'
import ParticleConfig from '../asset/particle_config.json'


import "../lib/illuminated.js";

const {Vec2, Lamp, Lighting} = window.illuminated
const {Column, Row} = Grid

const moonRadius = 300

const dOriginToHighest = 1.25 * window.innerHeight;
const halfInnerWidth = 0.5 * window.innerWidth;

const frameWidth = Math.floor((((dOriginToHighest)**2) + (moonRadius**2)) ** 0.5 + moonRadius)
const frameHeight = 2 * moonRadius

let canvas
let ctx
let contentHeight = 1000 ** 2
const rotatableAngle =  Math.PI - ( 2 * (Math.acos((halfInnerWidth)/(dOriginToHighest)) - Math.atan(moonRadius/dOriginToHighest)))

class HomePage extends Component{
  state = {
    currentSubheading1Length:0,
    LogoStyle:{
      opacity:0,
      left:0,
      position:"relative"
    },
    contentHeight:0,
    offsetAngle:0
  }
  renderMoon = (angle) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(halfInnerWidth, 1.5 * window.innerHeight)
    ctx.rotate(Math.PI + Math.acos((halfInnerWidth)/(dOriginToHighest)) - Math.atan(moonRadius/dOriginToHighest) + angle)
    const lighting = new Lighting({
      light: new Lamp({
        position: new Vec2(frameWidth - moonRadius, moonRadius),
        distance: moonRadius,
        color: "rgba(254, 252, 215, 0.8)"
      }),
    });
    lighting.compute(canvas.width, canvas.height);
    lighting.render(ctx);
    // requestAnimationFrame(this.renderMoon)
  }
  render = () => (
    <div>
      <div style={{position:"fixed", zIndex: 2, width:"100%", height:"100%", top:0, left:0}} id="background">
        <div style={{position:"fixed",  width:"100%", height:"100%"}}>
          <canvas width={window.innerWidth} height={window.innerHeight} style={{background:"transparent"}} id="sun-moon-background"/>
        </div>
        {/* <img alt="Mountain background" style={{width:"100%", filter:" grayscale(100%) contrast(60%) brightness(20%)", opacity:1, zIndex:4,position:"absolute", left:0, bottom:0}} src={Mountain}/> */}
      </div>
      <div id="content" style={{position:"relative", zIndex:1000}}>
        {/* Web Content Here */}
          <Grid columns={16} centered>
            <Column width={14}>
              <Grid id="main-content">
                <Row>
                  <Column width={8} floated="right">
                    <Grid verticalAlign='middle' centered style={{height:"100vh"}}>
                      <Row stretched>
                        <Column style={{...this.state.LogoStyle}} width={4}>
                          <img alt="Vidvapath logo" src={VICLogo}/>
                        </Column>
                        <Column width={12}>
                          <VIC style={{width:"100%"}}/>
                          <h1 style={{margin:0, color:"#BEBEBE", fontSize: 18}} className="thai small">
                            {"นิสิตทุนคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย".substr(0,Math.floor(this.state.currentSubheading1Length))}
                          </h1>
                        </Column>
                      </Row>
                    </Grid>
                  </Column>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
                <Row>
                  <p className="thai">Voluntary Intania Camp</p><br/>
                </Row>
              </Grid>
            </Column>
          </Grid>
        </div>
    </div>
  )
  componentDidMount = () => {
    canvas = document.getElementById('sun-moon-background');
    ctx = canvas.getContext('2d');
    this.renderMoon((window.scrollY / contentHeight) * rotatableAngle)
    contentHeight = Math.min(contentHeight, document.body.scrollHeight - document.body.offsetHeight)
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY, contentHeight, rotatableAngle)
      this.renderMoon((window.scrollY / contentHeight) * rotatableAngle)
    })
    window.particlesJS("background", ParticleConfig)
    if(ScrollMagic !== null){
      const controller = new ScrollMagic.Controller()

      // <------------ Scene1 --------------->
      const scheduler1 = new TimelineLite()
      const scene1 =  new ScrollMagic.Scene({offset:0, tweenChanges:true})
      // SVG Sections
      for (let charIndex = 1; charIndex < 14; charIndex++) {
        const charSVG = document.querySelector(`path.char_${charIndex}`)
        charSVG.style.stroke = "#fff68f"
        charSVG.style.strokeDasharray = charSVG.getTotalLength()
        charSVG.style.ease = Linear.easeNone
        scheduler1.add(Tween.fromTo(`path.char_${charIndex}`, 0.2,{strokeDashoffset:charSVG.getTotalLength()},{strokeDashoffset:0}),0.2*(charIndex-1))
      }
      scheduler1.add(Tween.fromTo(`path`, 2.6,{fill:"#fff68f00", ease: Expo.easeIn},{fill:"#fff68f", ease: Expo.easeIn}), 0)

      scheduler1.add(Tween.to(this.state, 1, {currentSubheading1Length:47, onUpdate:()=>this.forceUpdate(), ease: Linear.easeInOut}), 2.6)
      scheduler1.add(Tween.to(this.state.LogoStyle, 3, {opacity:1, onUpdate:()=>this.forceUpdate()}), 0)
      scene1.setTween(scheduler1)
      scene1.addTo(controller)
    }
  }
}

export default HomePage
