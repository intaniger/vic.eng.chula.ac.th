import React, { Component } from 'react'
import { Link } from 'react-static';
import { Grid, Image, Icon, Button, Reveal } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax, TimelineMax } from 'gsap';
import { isMobile, isTablet } from 'react-device-detect';
import Slider from "react-slick";

import ScrollMagic from "../lib/ScrollMagic";
import VIC_1 from "../asset/vic-2-1.jpg";
import VIC_2 from "../asset/vic-2-2.jpg";
import VIC_3 from "../asset/vic-2-3.jpg";
import VIC_4 from "../asset/vic-2-4.jpg";
import VIC_5 from "../asset/vic-2-5.jpg";

import './VIC2018.css'

import "../lib/illuminated.js";

const { Column, Row } = Grid

class VIC2018 extends Component {
  render = () => (
    <div>
      <div style={{ position: "fixed", zIndex: 0, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_5}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div id="pinContainer">
        {/* <div className="panel vic2018-slide-1" style={{backgroundImage:`url('${VIC_1}')`, backgroundSize:"cover", backgroundPosition:"center"}} >
      <h1>ONE</h1>
    </div> */}
        <div className="panel vic2018-slide-1" style={{ zIndex: 10 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_1}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(0.5px) brightness(0.9) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid style={{ backgroundColor: "#ffffff33", height: "105vh" }}>
              <Row columns={16} style={{ marginTop: "10vh" }}>
                <Column computer={6} mobile={16} floated="left">
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ค่ายวิศวพลัส ครั้งที่ 1 (ค่ายเล็ก)</h1>
                </Column>
              </Row>
              <Row columns={16}>
                <Column computer={6} mobile={16} floated="right">
                  <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">19 - 20 MAY 2018 </h1>
                </Column>
              </Row>
              <Row centered>
                <div style={{ position: "fixed", bottom: "20vh" }}>
                  <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center", marginTop: "5vh" }} className="thai resize">
                    โรงเรียนเทศบาลวัดศาลาปูน ตำบลภูเขาทอง  <br />
                    อำเภอพระนครศรีอยุธยา จังหวัดพระนครศรีอยุธยา
                  </h2>
                </div>
              </Row>
              <Row centered>
                <div style={{ position: "fixed", bottom: "0vh" }}>
                  <h2 style={{ color: "#03243c", padding: 5, backgroundColor: "#ffffff70", textAlign: "center", }} className="thai resize">
                    Scroll Down
                    <br /> <Icon name="arrow circle down" size="large" />
                  </h2>
                </div>
              </Row>
            </Grid>
          </div>
        </div>
        <div className="panel vic2018-slide-2" style={{ zIndex: 9 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_2}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid>
              <Column width={6}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column>
                      <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">PAINTING</h1>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={7} floated="right">
                <Grid style={{ height: "90vh", padding: "10vh 0" }}>
                  <Row centered verticalAlign='bottom'>
                    <Column width={16}>
                      <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "left" }} className="thai resize">
                        ปรับปรุงสีของห้องเรียน<br />
                        ที่เสื่อมสภาพจากเหตุอุทกภัยใหญ่ พ.ศ. 2554 </h2>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
          </div>
        </div>
        <div className="panel vic2018-slide-3" style={{ zIndex: 8 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_3}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid>
              <Column width={6}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column>
                      <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">ELECTRIC</h1>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={7} floated="right">
                <Grid style={{ height: "90vh", padding: "10vh 0" }}>
                  <Row centered verticalAlign='bottom'>
                    <Column width={16}>
                      <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "left" }} className="thai resize">
                        ปรับปรุงระบบไฟฟ้า เปลี่ยนพัดลม/หลอดไฟที่เสียหาย <br />
                        จากการหมดอายุการใช้งาน </h2>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
          </div>
        </div>
        <div className="panel vic2018-slide-4" style={{ zIndex: 7 }}>
          <div style={{ position: "fixed", zIndex: 2, width: "100vw", height: "100vh", backgroundImage: `url('${VIC_4}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) sepia(0.2)" }} />
          <div style={{ position: "relative", zIndex: 3 }}>
            <Grid>
              <Column width={6}>
                <Grid style={{ height: "70vh", padding: "10vh 0" }}>
                  <Row verticalAlign='top'>
                    <Column>
                      <h1 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "center" }} className="thai resize">PLUMBING</h1>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={7} floated="right">
                <Grid style={{ height: "90vh", padding: "10vh 0" }}>
                  <Row centered verticalAlign='bottom'>
                    <Column width={16}>
                      <h2 style={{ backgroundColor: "#03243c7d", padding: 10, color: "white", textAlign: "left" }} className="thai resize">
                        เปลี่ยนท่อน้ำ/ก็อกน้ำ ที่ชำรุดเสียหาย <br />
                        จากการหมดอายุการใช้งาน
                      </h2>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
  componentDidMount = async () => {
    if (ScrollMagic !== null) {
      const controller = new ScrollMagic.Controller()
      const wipeAnimation = new TimelineMax()
        .fromTo("div.panel.vic2018-slide-1", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=0.33")
        .fromTo("div.panel.vic2018-slide-2", 1, { x: "0%" }, { x: "-100%", ease: Linear.easeNone }, "+=0.66")
        .fromTo("div.panel.vic2018-slide-3", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }, "+=1")
        .fromTo("div.panel.vic2018-slide-4", 1, { y: "0%" }, { y: "100%", ease: Linear.easeNone }, "+=1.33")

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

export default VIC2018
