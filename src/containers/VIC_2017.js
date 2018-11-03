import React, { Component } from 'react'
import { Link } from 'react-static';
import { Grid, Image, Icon, Button, Reveal } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax, TimelineMax } from 'gsap';
import { isMobile, isTablet } from 'react-device-detect';
import Slider from "react-slick";

import ScrollMagic from "../lib/ScrollMagic";
import VIC_1 from "../asset/vic-1-1.jpg";
import VIC_2 from "../asset/vic-1-2.jpg";
import VIC_3 from "../asset/vic-1-3.jpg";
import VIC_4 from "../asset/vic-1-4.jpg";
import VIC_5 from "../asset/vic-1-5.jpg";

import './VIC2017.css'

import "../lib/illuminated.js";

const { Column, Row } = Grid

class VIC2017 extends Component {
  render = () => (
    <div>
      <div style={{ position: "fixed", zIndex: 0, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_5}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div id="pinContainer">
        {/* <div className="panel vic2017-slide-1" style={{backgroundImage:`url('${VIC_1}')`, backgroundSize:"cover", backgroundPosition:"center"}} >
      <h1>ONE</h1>
    </div> */}
        <div className="panel vic2017-slide-1" style={{ zIndex: 10 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_1}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(1px) brightness(0.9) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", height: "100vh" }}>
              <Row columns={16} style={{ marginTop: "10vh" }}>
                <Column computer={6} mobile={16} floated="left">
                  <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ค่ายวิศวพัฒน์ ครั้งที่ 1</h1>
                </Column>
              </Row>
              <Row columns={16}>
                <Column computer={6} mobile={16} floated="right">
                  <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">17 - 29 DEC 2017</h1>
                </Column>
              </Row>
              <Row centered>
                <div style={{ position: "fixed", bottom: "15vh" }}>
                  <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                    ตำบลสะเนียน อำเภอเมือง จ.น่าน <br />
                    ตำบลเมืองจัง อำเภอภูเพียง จ.น่าน
                  </h2>
                </div>
              </Row>
              <Row centered>
                <div style={{ position: "fixed", bottom: "0vh" }}>
                  <h2 style={{ color: "rgba(3, 36, 60, 1)", padding: 5, backgroundColor: "rgba(255,255,255,0.44)", textAlign: "center", }} className="thai resize">
                    Scroll Down
                    <br /> <Icon name="arrow circle down" size="large" />
                  </h2>
                </div>
              </Row>
            </Grid>
          </div>
        </div>
        <div className="panel vic2017-slide-2" style={{ zIndex: 9 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_2}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid>
              <Column width={6}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column>
                      <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">EDUCATION TEAM</h1>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={7}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column width={16}>
                      <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ทีมเสริมสร้างทักษะการเรียนรู้</h1>
                    </Column>
                  </Row>
                  <Row centered verticalAlign='bottom'>
                    <Column width={16}>
                      <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "left" }} className="thai resize">
                        ให้ความรู้เชิงวิชาการแก้เด็กนักเรียน <br />
                        เพื่อเป็นพื้นฐานใช้ต่อยอดการเรียนรู้ </h2>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
            <div style={{ position: "fixed", bottom: "5vh", right: "5vw" }}>
              <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                <Icon name="map pin" /> โรงเรียนบ้านวังตาว ตำบลสะเนียน <br /> อำเภอเมือง จ.น่าน
                </h2>
            </div>
          </div>
        </div>
        <div className="panel vic2017-slide-3" style={{ zIndex: 8 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_3}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid>
              <Column width={6}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column>
                      <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">SURVEY TEAM</h1>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={7}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column width={16}>
                      <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ทีมสำรวจข้อมูลครัวเรือน</h1>
                    </Column>
                  </Row>
                  <Row centered verticalAlign='bottom'>
                    <Column width={16}>
                      <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "left" }} className="thai resize">
                        เก็บข้อมูลชุมชนเข้าสู่ระบบ GIS <br />
                        เพื่อใช้เป็นข้อมูล ในการบริหารจัดการภายในชุมชนต่อไป </h2>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
            <div style={{ position: "fixed", bottom: "5vh", right: "5vw" }}>
              <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                <Icon name="map pin" />ตำบลสะเนียน อำเภอเมือง จ.น่าน
            </h2>
            </div>
          </div>
        </div>
        <div className="panel vic2017-slide-4" style={{ zIndex: 7 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_4}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid>
              <Column width={6}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column>
                      <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">SENSOR TEAM</h1>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={7}>
                <Grid style={{ height: "60vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column width={16}>
                      <h1 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ทีมติดตั้งระบบเซ็นเซอร์</h1>
                    </Column>
                  </Row>
                  <Row centered verticalAlign='bottom'>
                    <Column width={16}>
                      <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "left" }} className="thai resize">
                        สร้างสถานีวัดระดับน้ำด้วยระบบเซนเซอร์ 4 แห่ง <br />
                        เพื่อให้ชุมชนใช้เป็นข้อมูลในการบริหารจัดการน้ำอย่างมีประสิทธิภาพ </h2>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
            <div style={{ position: "fixed", bottom: "5vh", right: "5vw" }}>
              <h2 style={{ backgroundColor: "rgba(3, 36, 60, 0.49)", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                <Icon name="map pin" />ตำบลเมืองจัง อำเภอภูเพียง จ.น่าน
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  componentDidMount = async () => {
    if (ScrollMagic !== null) {
      const controller = new ScrollMagic.Controller()
      const wipeAnimation = new TimelineMax()
        .fromTo("div.panel.vic2017-slide-1", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=0.33")
        .fromTo("div.panel.vic2017-slide-2", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=0.33")
        .fromTo("div.panel.vic2017-slide-3", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=0.33")
        .fromTo("div.panel.vic2017-slide-4", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=0.33")

      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "400%"
      })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);
    }
  }
}

export default VIC2017