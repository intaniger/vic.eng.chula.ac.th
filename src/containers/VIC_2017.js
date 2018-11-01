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

import './VIC2017.css'

import "../lib/illuminated.js";

const { Column, Row } = Grid

class VIC2017 extends Component {
  render = () => (
    <div>

      <div className="panel vic2017-slide-4" style={{ zIndex: -4 }}>
        <div style={{ position: "fixed", zIndex: -3, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_4}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
        <div style={{ position: "relative", zIndex: -2 }}>
          <Grid>
            <Column width={7}>
              <Grid verticalAlign="middle" style={{ height: "100vh" }}>
                <Row stretched>
                  <Column>
                    <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">SURVEY TEAM</h1>
                  </Column>
                </Row>
              </Grid>
            </Column>
            <Column width={7}>
              <Grid style={{ height: "60vh", padding: "10vh 0" }}>
                <Row verticalAlign='top'>
                  <Column width={16}>
                    <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ทีมสำรวจข้อมูลครัวเรือน</h1>
                  </Column>
                </Row>
                <Row centered verticalAlign='bottom'>
                  <Column width={14}>
                    <h3 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "left"}} className="thai resize">เพื่อเก็บข้อมูลชุมชน ประกอบการทำระบบ GIS <br /> แล้วนำส่งให้ผู้นำชุมชนเพื่อใช้เป็นข้อมูล <br /> ในการแก้ไขปัญหาภายในชุมชนต่อไป </h3>
                  </Column>
                </Row>
              </Grid>
            </Column>
          </Grid>
          <div style={{ position: "fixed", bottom: "5vh", right: "5vw" }}>
            <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
              <Icon name="map pin" />ตำบลสะเนียน อำเภอเมือง จ.น่าน
            </h2>
          </div>
        </div>
      </div>
      <div id="pinContainer">
        {/* <div className="panel vic2017-slide-1" style={{backgroundImage:`url('${VIC_1}')`, backgroundSize:"cover", backgroundPosition:"center"}} >
      <h1>ONE</h1>
    </div> */}
        <div className="panel vic2017-slide-1" style={{ zIndex: 10 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_1}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(2px) brightness(0.9) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid style={{ backgroundColor: "#ffffff6e", height: "100vh" }}>
              <Row columns={16} style={{ marginTop: "50vh" }}>
                <Column width={7}>
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">17 - 29 DEC 2017</h1>
                </Column>
                <Column width={8}>
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white" }} className="thai resize">ค่ายวิศวพัฒน์ ครั้งที่ 1</h1>
                  <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                    ตำบลสะเนียน อำเภอเมือง จ.น่าน <br />
                    ตำบลเมืองจัง อำเภอภูเพียง จ.น่าน
              </h2>
                </Column>
              </Row>
              <Row centered>
                {/* <div style={{ position: "fixed", bottom: "5vh" }}>
            </div> */}
              </Row>
            </Grid>
          </div>
        </div>
        <div className="panel vic2017-slide-2" style={{ zIndex: 9 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_2}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid style={{ height: "100vh" }}>
              <Row columns={16} style={{ marginTop: "10vh" }}>
                <Column width={7}>
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">EDUCATION TEAM</h1>
                </Column>
                <Column width={7}>
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ทีมเสริมสร้างทักษะการเรียนรู้</h1>
                </Column>
              </Row>
              <div style={{ position: "fixed", bottom: "5vh", right: "5vw" }}>
                <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                  <Icon name="map pin" /> โรงเรียนบ้านวังตาว ตำบลสะเนียน <br /> อำเภอเมือง จ.น่าน
                </h2>
              </div>
            </Grid>
          </div>
        </div>
        <div className="panel vic2017-slide-3" style={{ zIndex: 8 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_3}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>

            <Grid style={{ height: "100vh" }}>
              <Row columns={16} style={{ marginTop: "10vh" }}>
                <Column width={7}>
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">SURVEY TEAM</h1>
                </Column>
                <Column width={7}>
                  <Grid style={{ height: "80vh"}}>
                    <Row verticalAlign='top'>
                      <Column width={16}>
                        <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ทีมสำรวจข้อมูลครัวเรือน</h1>
                      </Column>
                    </Row>
                    <Row centered verticalAlign='bottom'>
                      <Column width={14}>
                        <h3 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "left"}} className="thai resize">เพื่อเก็บข้อมูลชุมชน ประกอบการทำระบบ GIS <br /> แล้วนำส่งให้ผู้นำชุมชนเพื่อใช้เป็นข้อมูล <br /> ในการแก้ไขปัญหาภายในชุมชนต่อไป </h3>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Row>
            </Grid>
            <div style={{ position: "fixed", bottom: "5vh", right: "5vw" }}>
              <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                <Icon name="map pin" />ตำบลสะเนียน อำเภอเมือง จ.น่าน
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
        .fromTo("div.panel.vic2017-slide-1", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=0.33")  // in from left
        .fromTo("div.panel.vic2017-slide-2", 1, { x: "0%" }, { x: "-100%", ease: Linear.easeNone }, "+=0.66")  // in from right
        .fromTo("div.panel.vic2017-slide-3", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=1"); // in from top

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
