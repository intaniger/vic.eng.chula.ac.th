import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax } from 'gsap';
import "particles.js";

import ScrollMagic from "../lib/ScrollMagic";

import BackgroundAnimation from "../scenes/Background"

import Mountain from '../asset/mountain.png'
import VICLogo from '../asset/VICLogo.png'
import Moon from '../asset/moon.png'
import pic1 from '../asset/pic1.jpg'
import section_1_img_1 from '../asset/section1_1.jpg'
import section_1_img_3 from '../asset/section1_3.jpg'
import section_1_img_4 from '../asset/section1_4.jpg'
import section_1_img_5 from '../asset/section1_5.jpg'
import section_1_img_6 from '../asset/section1_6.jpg'
import VIC from '../asset/VIC.svg'
import ParticleConfig from '../asset/particle_config.json'


import "../lib/illuminated.js";
/* import { white } from '../../node_modules/ansi-colors'; */

const {Column, Row} = Grid

const R = 300
const acos = Math.acos
const sin = Math.sin;
const W = window.innerWidth
const H = window.innerHeight
const MoonFactor = (H < W) ? 1:0.5
const factor = (H < W) ? 1.5 * Math.ceil(H / W) : 0.7
const RotateRadius = (factor * H)
const firstMoonHoffset = (factor * H)  - (RotateRadius)*sin(acos(W / (2 * RotateRadius)));
const rotatableAngle =  Math.PI - ( 2 * (Math.acos((W /(2 * RotateRadius)))));
const imageStyle = { width: "75%", height: "75%", display: "block", marginLeft: "auto", marginRight: "auto" };

class HomePage extends Component{
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
  render = () => (
    <div>
      <div style={{position:"fixed", zIndex: 2, width:"100%", height:"100%", top:0, left:0}} id="background">
        <div style={{position:"fixed",  width:window.innerWidth, height: RotateRadius, transform: `rotate(0deg) translate(-${0.5 * MoonFactor * R}px, ${firstMoonHoffset}px)`, transformOrigin: "50% 100%"}} id="sun-moon-background">
          <img alt="Moon" src={Moon} style={{width:`${MoonFactor * R}px`}} />
        </div>
        <img alt="Mountain background" id="mountain-background" style={{width:"100%", filter:" grayscale(100%) contrast(60%) brightness(20%)", opacity:1, zIndex:4,position:"absolute", left:0, bottom:0}} src={Mountain}/>
      </div>
      <div id="content" style={{position:"relative", zIndex:1000}}>
        {/* Web Content Here */}
        <Grid columns={16} centered>
          <Column width={14} centered >
            <Grid>
              <Row id="head1">
                <Column computer={8} mobile={16} floated="right">
                  <Grid verticalAlign='middle' centered style={{height:"100vh"}}>
                    <Row stretched>
                      <Column style={{...this.state.LogoStyle}} width={4}>
                        <img alt="Vidvapath logo" src={VICLogo}/>
                      </Column>
                      <Column width={12}>
                        <VIC style={{width:"100%"}}/>
                        <h1 style={{margin:0, color:"#BEBEBE"}} className="thai small subheading">
                          {/* fontSize will be 2.5vw in case mobile */}
                          {"นิสิตทุนคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย".substr(0,Math.floor(this.state.currentSubheading1Length))}
                        </h1>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Row>
            </Grid>
            <div style={{paddingBottom:300}}>
              <Grid id="intro" verticalAlign='middle' centered>
                {/* <Row centered>
                  <h1 style={{ margin: "10vh", padding: 0, color: "#ffffff", textAlign: 'center', fontSize: 80 }} className="thai small">
                    ค่ายวิศวพัฒน์ คืออะไร?
                  </h1>
                </Row> */}
                <Row style={{ margin: "10vh 0", padding: 0,}} centered>
                  <Column width={16}>
                    <p  className="thai small intro-head" id="intro_paragraph" >
                      ถือกำเนิดขึ้นจากการรวมกลุ่มกันของนิสิตทุนวิศวฯ จุฬาฯ เพื่อทำกิจกรรมตอบแทนมหาวิทยาลัย และสังคมภายนอก
                      เนื่องด้วยความตระหนักและมีจิตสำนึกในฐานะการเป็นผู้รับ ที่ได้รับโอกาสทางการศึกษาจากจุฬาลงกรณ์มหาวิทยาลัย และต้องการส่งต่อ แบ่งปันโอกาสด้วยความรู้ความสามารถของตน
                    </p><br/><br/>
                    <p  className="thai small intro-sub" id="intro_paragraph">
                      &nbsp;&nbsp;&nbsp;&nbsp;ค่ายวิศวพัฒน์จึงถือกำเนิดขึ้นมา เพื่อเปิดโอกาสให้นิสิตทุน และนิสิตวิศวฯจุฬาฯ ได้นำความสามารถที่มี ออกไปช่วยเหลือสังคมในหลากหลายมิติ และในบริบทต่างๆโดยไม่จำกัด และไม่ปิดกั้นความเฉพาะของงาน
                      ไม่ว่าจะเป็นงานโยธา งานวิชาการ งานเทคโนโลยี หรืองานที่ต้องใช้องค์ความรู้ทางวิศวกรรมด้านต่างๆ โดยเน้นการมีส่วนร่วมกับชุมชน ด้วยหลักของการ <strong>“เข้าถึง เข้าใจ และพัฒนา”</strong> เพื่อช่วยเหลือ และพัฒนาได้ตรงสาเหตุที่แท้จริงของปัญหาเหล่านั้น นำไปสู่การสร้างชุมชนที่เข้มแข็ง
                    </p>
                  </Column>
                </Row>
                <Row style={{ marginBottom: "10vh", padding: 0, }}>
                  <Image.Group size="large" id="HistoryImageGroup">
                    <Image src={section_1_img_3} id="HistoryImage" />
                    <Image src={section_1_img_4} id="HistoryImage" />
                    <Image src={section_1_img_5} id="HistoryImage" />
                    <Image src={section_1_img_1} id="HistoryImage" />
                    <Image src={section_1_img_6} id="HistoryImage" />
                  </Image.Group>
                </Row>
              </Grid>
            </div>
            {
              [...Array(20).keys()].map(()=>(
                <Row style={{ marginBottom: "10vh", padding: 0, }}>
                  <Column width={7} floated="right">
                    <img style={imageStyle} alt="Start pic" src={pic1} />
                  </Column>
                  <Column width={7} floated="left">
                    <h1 style={{ color: "#ffffff", textAlign: 'center', fontSize: 20 }} className="thai small">
                      {"จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์จุดเริ่มต้นของค่ายวิศวพัฒน์"}
                    </h1>
                  </Column>
                </Row>))
            }
          </Column>
        </Grid>
      </div>
    </div>
  )
  componentDidMount = () => {
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
      // <------------ History Animation --------------->
      const HistoryFadeInScene = new ScrollMagic.Scene({triggerElement:"#intro_paragraph", duration:0.5 * H, offset:-0.3 * H}).setTween(
        TweenMax.staggerFromTo("#intro_paragraph", 0.2, {x:-50, opacity:0}, {x:0, opacity:1}, 0.5),
      )
      const HistoryFadeOutScene = new ScrollMagic.Scene({triggerElement:"#intro_paragraph", duration:0.2 * H, offset:-0.3 * H}).setTween(
        "#head1", {opacity:0}
      )
      const HistoryImageScene = new ScrollMagic.Scene({triggerElement:"#HistoryImageGroup", duration:0.5 * H, offset:-0.2 * H}).setTween(
        TweenMax.staggerFromTo("#HistoryImage", 1, {opacity:0, height:0}, {opacity:1, height:300}, 0.5)
      )
      controller.addScene(HistoryFadeInScene)
      controller.addScene(HistoryFadeOutScene)
      controller.addScene(HistoryImageScene)
    }
    this.forceUpdate()
  }
}

export default HomePage
