import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo } from 'gsap';
import "particles.js";

import ScrollMagic from "../lib/ScrollMagic";

import BackgroundAnimation from "../scenes/Background"

import Mountain from '../asset/mountain.png'
import VICLogo from '../asset/VICLogo.png'
import pic1 from '../asset/pic1.jpg'
import VIC from '../asset/VIC.svg'
import ParticleConfig from '../asset/particle_config.json'


import "../lib/illuminated.js";
/* import { white } from '../../node_modules/ansi-colors'; */

const { Vec2, Lamp, Lighting } = window.illuminated
const { Column, Row } = Grid

const moonRadius = 300
const dOriginToHighest = 1.25 * window.innerHeight;
const halfInnerWidth = 0.5 * window.innerWidth;
const rotatableAngle = Math.PI - (2 * (Math.acos((halfInnerWidth - moonRadius) / (dOriginToHighest))))
const imageStyle = { width: "75%", height: "75%", display: "block", marginLeft: "auto", marginRight: "auto" };
class HomePage extends Component {
  state = {
    currentSubheading1Length: 0,
    LogoStyle: {
      opacity: 0,
      left: 0,
      position: "relative"
    },
    contentHeight: 0,
    offsetAngle: 0
  }
  renderMoon = () => {
    console.log(Math.acos((halfInnerWidth - moonRadius) / (dOriginToHighest)), Math.atan((moonRadius - 50) / dOriginToHighest))
    const canvas = document.getElementById('sun-moon-background');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(halfInnerWidth, 1.5 * window.innerHeight)
    ctx.rotate(Math.PI + Math.acos((halfInnerWidth - moonRadius) / (dOriginToHighest)) - Math.atan((moonRadius - 50) / dOriginToHighest))
    const lighting = new Lighting({
      light: new Lamp({
        position: new Vec2(dOriginToHighest, moonRadius),
        distance: moonRadius,
        color: "rgba(254, 252, 215, 0.8)"
      }),
    });
    lighting.compute(canvas.width, canvas.height);
    lighting.render(ctx);
  }
  render = () => (

    <div>
      <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", top: 0, left: 0 }} id="background">
        <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
          <canvas width={window.innerWidth} height={1.5 * window.innerHeight} style={{ background: "transparent", transform: "rotate(0deg)", transformOrigin: "50% 100%" }} id="sun-moon-background" />
        </div>
        <img alt="Mountain background" id="mountain-background" style={{ width: "100%", filter: " grayscale(100%) contrast(60%) brightness(20%)", opacity: 1, zIndex: 4, position: "absolute", left: 0, bottom: 0 }} src={Mountain} />
      </div>
      <div id="content" style={{ position: "absolute", top: 0, left: 0, zIndex: 1000 }}>
        {/* Web Content Here */}
        <Grid columns={16} centered>
          <Column width={14} centered >
            <Grid id="้head-content">
              <Row stretched verticalAlign='middle' centered style={{ height: "100vh" }}>
                <Column style={{ ...this.state.LogoStyle }} width={4}>
                  <img alt="Vidvapath logo" src={VICLogo} />
                </Column>
                <Column width={12}>
                  <VIC style={{ width: "100%" }} />
                  <h1 style={{ margin: 0, color: "#BEBEBE", fontSize: "2.5vw" }} className="thai small">
                    {"นิสิตทุนคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย".substr(0, Math.floor(this.state.currentSubheading1Length))}
                  </h1>
                </Column>
              </Row>
            </Grid>
            <Grid id="content1" verticalAlign='middle' centered>
              <Row centered>
                <h1 style={{ margin: "10vh", padding: 0, color: "#ffffff", textAlign: 'center', fontSize: 80 }} className="thai small">
                  {"จุดเริ่มต้นของค่ายวิศวพัฒน์"}
                </h1>
              </Row>
              <Row style={{ marginBottom: "10vh", padding: 0,}}>
                <Column width={7} floated="right">
                  <img style={imageStyle} alt="Start pic" src={pic1} />
                </Column>
                <Column width={7} floated="left">
                  <h1 style={{ color: "#ffffff", textAlign: 'center', fontSize: 20 }} className="thai small">
                    {"จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์"}
                  </h1>
                </Column>
              </Row>
              <Row style={{ marginBottom: "10vh", padding: 0, }}>
                <Column width={7} floated="right">
                  <h1 style={{ color: "#ffffff", textAlign: 'center', fontSize: 20 }} className="thai small">
                    {"จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์"}
                  </h1>
                </Column>
                <Column width={7} floated="left">
                  <img style={imageStyle} alt="Start pic" src={pic1} />
                </Column>
              </Row>
              <Row style={{ marginBottom: "10vh", padding: 0, }}>
                <Column width={7} floated="right">
                  <img style={imageStyle} alt="Start pic" src={pic1} />
                </Column>
                <Column width={7} floated="left">
                  <h1 style={{ color: "#ffffff", textAlign: 'center', fontSize: 20 }} className="thai small">
                    {"จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์"}
                  </h1>
                </Column>
              </Row>
            </Grid>
          </Column>
        </Grid>
      </div>
    </div>
  )
  componentDidMount = () => {
    this.renderMoon()
    window.particlesJS("background", ParticleConfig)
    if (ScrollMagic !== null) {
      const controller = new ScrollMagic.Controller()
      // <------------ Background --------------->
      controller.addScene(BackgroundAnimation(rotatableAngle))
      // <------------ Scene1 --------------->
      {
        const scene1 = new ScrollMagic.Scene({ offset: 0, tweenChanges: true })
        const scheduler1 = new TimelineLite() // Animation time schedule

        // SVG Sections --> "วิศวพัฒน์" text drawing
        for (let charIndex = 1; charIndex < 14; charIndex++) {
          const charSVG = document.querySelector(`path.char_${charIndex}`)
          charSVG.style.stroke = "#fff68f"
          charSVG.style.strokeDasharray = charSVG.getTotalLength()
          charSVG.style.ease = Linear.easeNone
          scheduler1.add(Tween.fromTo(`path.char_${charIndex}`, 0.2, { strokeDashoffset: charSVG.getTotalLength() }, { strokeDashoffset: 0 }), 0.2 * (charIndex - 1))
        }
        // Fill "วิศวพัฒน์" text with #fff68f (bright yellow) color
        scheduler1.add(Tween.fromTo(`path`, 2.6, { fill: "#fff68f00", ease: Expo.easeIn }, { fill: "#fff68f", ease: Expo.easeIn }), 0)

        // Printing "นิสิตทุนคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย" text
        scheduler1.add(Tween.to(this.state, 1, { currentSubheading1Length: 47, onUpdate: () => this.forceUpdate(), ease: Linear.easeInOut }), 2.6)

        // Displaying VIC logo image
        scheduler1.add(Tween.to(this.state.LogoStyle, 3, { opacity: 1, onUpdate: () => this.forceUpdate() }), 0)
        // Add schedule to scene
        scene1.setTween(scheduler1)

        // Add scene to controller
        controller.addScene(scene1)
      }
    }
  }
}

export default HomePage
