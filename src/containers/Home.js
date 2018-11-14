import React, { Component } from 'react'
import { Link } from 'react-static';
import { Grid, Image, Icon, Button, Reveal } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax } from 'gsap';
import "particles.js";
import { isMobile, isTablet, isIOS } from 'react-device-detect';
import Slider from "react-slick";

import ScrollMagic from "../lib/ScrollMagic";
import { FBLoadAPI, GMapLoadAPI } from "../lib/APILoader";
import GoogleMap from "./Map";
import BackgroundAnimation from "../scenes/Background"

import Mountain from '../asset/mountain.png'
import VICLogo from '../asset/VICLogo.png'
import Moon from '../asset/moon.png'
import section_1_img_1 from '../asset/section1_1.jpg'
import section_1_img_2 from '../asset/section1_2.jpg'
import interview_1 from "../asset/interview/interview1.jpg";
import interview_2 from "../asset/interview/interview2.jpg";
import interview_3 from "../asset/interview/interview3.jpg";
import interview_4 from "../asset/interview/interview4.jpg";
import interview_5 from "../asset/interview/interview5.jpg";
import interview_6 from "../asset/interview/interview6.jpg";
import background from "../asset/background.jpg";

import VIC from '../asset/VIC.svg'
import ToolIcon from '../asset/activity_icon/tools.svg'
import ActivityIcon from '../asset/activity_icon/sprout.svg'

import AnnouncedIcon from '../asset/timeline_icon/announced.svg'
import CampdateIcon from '../asset/timeline_icon/campdate.svg'
import FirstmeetIcon from '../asset/timeline_icon/firstmeet.svg'
import RegisterIcon from '../asset/timeline_icon/registeration.svg'

import ParticleConfig from '../asset/particle_config.json'
import './style.css'
import QA from './Q&A';
import "../lib/illuminated.js";
import Loading from './Loading';
import VIC2017IOS from "./camp_history/VIC_2017_IOS";
import VIC2018IOS from "./camp_history/VIC_2018_IOS";

const { Column, Row } = Grid

const R = 300
const acos = Math.acos
const sin = Math.sin;
const W = window.innerWidth
const H = window.innerHeight
const MoonFactor = (H < W) ? 1 : 0.5
const factor = (H < W) ? 1.5 * Math.ceil(H / W) : 0.7
const RotateRadius = (factor * H)
const firstMoonHoffset = (factor * H) - (RotateRadius) * sin(acos(W / (2 * RotateRadius)));
const rotatableAngle = Math.PI - (2 * (Math.acos((W / (2 * RotateRadius)))));
const QAList = [
  {
    q: "อยู่คณะอื่น เข้าร่วมค่ายได้หรือไม่",
    a: <p className="thai">สามารถเข้าร่วมกิจกรรมค่ายได้<br />
      แล้วพบกันในวันเฟิร์สมีทค่ายวิศวพัฒน์ครับ 😃</p>
  },
  {
    q: "ค่ายนี้ต้องเสียค่าใช้จ่ายใดๆหรือไม่",
    a: <p style={{ fontSize: "2vh" }} className="thai">ไม่ต้องเสียค่าใช้จ่ายใดๆ<br />ทั้งในการสมัครค่ายและการขึ้นค่ายครับ</p>
  },
  {
    q: "รายละเอียดของกิจกรรมในแต่ละวันมีอะไรบ้าง",
    a: <p style={{ fontSize: "2vh" }} className="thai">ข้อมูลส่วนนี้จะมีการชี้แจงรายละเอียด<br />ในวันเฟิร์สมีท ค่ายวิศวพัฒน์ครับ</p>
  },
  {
    q: "ต้องเตรียมของใช้อะไรขึ้นค่ายบ้าง",
    a: <p style={{ fontSize: "1.5vh" }} className="thai">เตรียมเฉพาะของใช้ส่วนตัว และอุปกรณ์การนอน<br />โดยทางค่ายจะมีอุปกรณ์<br />ที่เกี่ยวข้องกับการทำงานเพิ่มเติมให้</p>
  },
  // {
  //   q: "ลักษณะที่พักเป็นอย่างไร",
  //   a: <p style={{ fontSize: "2vh" }} className="thai">ข้อมูลส่วนนี้ต้องขออุบไว้ก่อนนะครับ <br /> แต่รับรองว่าไม่นอนกลางป่าแน่นอน</p>
  // }
]

class HomePage extends Component {
  state = {
    currentSubheading1Length: 0,
    allAPILoaded: false
  }
  componentWillMount = () => {
    console.log("Mount")
  }
  render = () => (
    <div>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", top: 0, left: 0 }} id="background">
        <div style={{ position: "fixed", width: window.innerWidth, height: RotateRadius, transform: `rotate(0deg) translate(-${0.5 * MoonFactor * R}px, ${firstMoonHoffset}px)`, transformOrigin: "50% 100%" }} id="sun-moon-background">
          <img alt="Moon" src={Moon} style={{ width: `${MoonFactor * R}px` }} />
        </div>
        <img alt="Mountain background" id="mountain-background" style={{ width: "100%", filter: " grayscale(100%) contrast(60%) brightness(20%)", opacity: 1, zIndex: 4, position: "absolute", left: 0, bottom: 0 }} src={Mountain} />
      </div>
      <div id="content" style={{ position: "relative", zIndex: 100 }}>
        {/* Web Content Here */}
        <Grid columns={16} centered>
          <Column width={14}>
            <Grid id="cover">
              <Row>
                <Column computer={8} mobile={16} floated="right">
                  <Grid verticalAlign='middle' centered style={{ height: "100vh" }}>
                    {
                      this.state.allAPILoaded ?
                        <Row stretched>
                          <Column id="VICLogo" width={4}>
                            <img alt="Vidvapath logo" src={VICLogo} />
                          </Column>
                          <Column width={12}>
                            <VIC style={{ width: "100%" }} />
                            <h1 style={{ margin: 0, color: "#BEBEBE" }} className="thai small subheading">
                              {/* fontSize will be 2.5vw in case mobile */}
                              {"นิสิตทุนคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย".substr(0, Math.floor(this.state.currentSubheading1Length))}
                            </h1>
                          </Column>
                        </Row> :
                        <Loading open />
                    }
                  </Grid>
                </Column>
              </Row>
            </Grid>
            <Grid id="intro" style={{ padding: "100px 0" }} verticalAlign='middle' centered>
              <Grid stackable id="intro_paragraph" verticalAlign="middle">
                <Column floated="right" computer={8} mobile={8} tablet={16}>
                  <p className="thai small intro-head">
                    ถือกำเนิดขึ้นจากการรวมกลุ่มกันของนิสิตทุนวิศวฯ จุฬาฯ เพื่อทำกิจกรรมตอบแทนมหาวิทยาลัย และสังคมภายนอก
                    เนื่องด้วยความตระหนักและมีจิตสำนึกในฐานะการเป็นผู้รับ ที่ได้รับโอกาสทางการศึกษาจากจุฬาลงกรณ์มหาวิทยาลัย และต้องการส่งต่อ แบ่งปันโอกาสด้วยความรู้ความสามารถของตน
                      </p>
                </Column>
                <Column floated="left" computer={8} mobile={8} tablet={16}>
                  <Grid>
                    <Row centered>
                      <Column width={10}>
                        <Image style={{ justifyContent: 'center', alignItems: 'center' }} src={section_1_img_1} />
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Grid>
              <Grid stackable id="intro_paragraph" verticalAlign="middle">
                <Column floated="left" computer={8} mobile={8} tablet={16}>
                  <Grid>
                    <Row centered>
                      <Column width={10}>
                        <Image style={{ justifyContent: 'center', alignItems: 'center' }} src={section_1_img_2} />
                      </Column>
                    </Row>
                  </Grid>
                </Column>
                <Column floated="right" computer={8} mobile={8} tablet={16}>
                  <p className="thai small intro-sub">
                    &nbsp;&nbsp;&nbsp;&nbsp;ค่ายวิศวพัฒน์จึงถือเป็นค่ายที่เปิดโอกาสให้นิสิตทุน และนิสิตวิศวะ จุฬาฯ ได้นำความสามารถที่มี ออกไปช่วยเหลือสังคมในหลากหลายมิติ และในบริบทต่างๆโดยไม่จำกัด และไม่ปิดกั้นความเฉพาะของงาน
                        ไม่ว่าจะเป็นงานโยธา งานวิชาการ งานเทคโนโลยี หรืองานที่ต้องใช้องค์ความรู้ทางวิศวกรรมด้านต่างๆ โดยเน้นการมีส่วนร่วมกับชุมชน ด้วยหลักของการ <strong>“เข้าถึง เข้าใจ และพัฒนา”</strong> เพื่อช่วยเหลือ และพัฒนาได้ตรงสาเหตุที่แท้จริงของปัญหาเหล่านั้น นำไปสู่การสร้างชุมชนที่เข้มแข็ง
                      </p>
                </Column>
              </Grid>
            </Grid>

            <Grid id="camphistory" columns={16} centered verticalAlign="middle">
              <Row centered className="historycontent1" id="historycontent">
                <Column width={16} style={{ marginBottom: "10px" }} >
                  <div style={{ width: isMobile ? "60%" : "30%", backgroundColor: "rgba(3, 36, 60,0.49)", margin: "0 auto", borderRadius: "50%" }}>
                    <h1 style={{ textAlign: "center", color: "white", padding: 30 }} className="thai" >ธันวาคม 2017</h1>
                  </div>
                </Column>
                <Column computer={10} mobile={16} tablet={16} >
                  {
                    isIOS ? (() => {
                      setTimeout(() => {
                        window.LoadedAPI.iframe1 = true
                      }, 500)
                      return <VIC2017IOS />
                    })() :
                      <iframe onLoad={() => window.ExternalAPILoaded("iframe1")} title="ค่ายวิศวพัฒน์ครั้งที่ 1" src="/VIC2017" style={{ width: "100%", height: isMobile ? "30vh" : (isTablet ? "40vh" : "60vh") }} />
                  }
                </Column>
              </Row>
              <Row centered >
                <div style={{ display: "block", width: "3px", height: "300px" }}>
                  <div style={{ width: "3px", backgroundColor: "white", height: "0%" }} id="hisline" className="hisline1" />
                </div>
              </Row>
              <Row centered className="historycontent2" id="historycontent">
                <Column width={16} style={{ marginBottom: "10px" }} >
                  <div style={{ width: isMobile ? "60%" : "30%", backgroundColor: "rgba(3, 36, 60,0.49)", margin: "0 auto", borderRadius: "50%" }}>
                    <h1 style={{ textAlign: "center", color: "white", padding: 30 }} className="thai" >พฤษภาคม 2018</h1>
                  </div>
                </Column>
                <Column computer={10} mobile={16} tablet={16} >
                  {
                    isIOS ? (() => {
                      setTimeout(() => {
                        window.LoadedAPI.iframe2 = true
                      }, 500)
                      return <VIC2018IOS />
                    })() :
                      <iframe onLoad={() => window.ExternalAPILoaded("iframe2")} title="ค่ายวิศวพลัสครั้งที่ 1" src="/VIC2018" style={{ width: "100%", height: isMobile ? "30vh" : (isTablet ? "40vh" : "60vh") }} />
                  }
                </Column>

              </Row>
              <Row centered>
                <div style={{ display: "block", width: "3px", height: "300px" }}>
                  <div style={{ width: "3px", backgroundColor: "white", height: "0%" }} id="hisline" className="hisline2" />
                </div>
              </Row>
            </Grid>

            <Grid id="camp_infor" stackable centered>
              <Column width={16}>
                <div style={{ width: isMobile ? "60%" : "30%", backgroundColor: "rgba(3, 36, 60,0.49)", margin: "0 auto", borderRadius: "50%" }}>
                  <h1 style={{ textAlign: "center", color: "white", padding: 30 }} className="thai" >ปัจจุบัน</h1>
                </div>
              </Column>
              <Column verticalAlign='middle' width={8}>
                <Grid style={{ height: "100%" }}>
                  <Row height={50}>
                    <Column width={6}>
                      <Grid>
                        <Row centered>
                          <ToolIcon style={{ height: "100px", padding: 5 }} />
                        </Row>
                        <Row centered><p id="vic-job-headline" className="thai bullet">ปรับปรุงระบบชลประทาน</p></Row>
                      </Grid>
                    </Column>
                    <Column width={9}>
                      <Grid style={{ height: "100%" }} verticalAlign="middle">
                        <Row stretched>
                          <Column>
                            <p id="vic-job-detail" style={{ textAlign: "left" }} className="thai detail">เพื่อแก้ไขปัญหาปริมาณน้ำที่ไม่เพียงพอต่อการใช้งานของชุมชนในช่วงหน้าแล้ง</p>
                          </Column>
                        </Row>
                      </Grid>
                    </Column>
                  </Row>
                  <div className="verticalLine" />
                  <Row height={50}>
                    <Column width={6}>
                      <Grid>
                        <Row centered>
                          <ActivityIcon style={{ height: "100px", padding: 5 }} />
                        </Row>
                        <Row centered><p id="vic-job-headline" className="thai bullet">กิจกรรมปฏิสัมพันธ์กับเยาวชน</p></Row>
                      </Grid>
                    </Column>
                    <Column width={9}>
                      <Grid style={{ height: "100%" }} verticalAlign="middle">
                        <Row stretched>
                          <Column>
                            <p id="vic-job-detail" style={{ textAlign: "left" }} className="thai detail">เพื่อสร้างเสริมทักษะการเรียนรู้ และแรงบันดาลใจของเยาวชนในพื้นที่</p>
                          </Column>
                        </Row>
                      </Grid>
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column id="vic-job-headline" width={8}>
                {
                  window.google ? <GoogleMap isMobile={isMobile} /> : null
                }
              </Column>
              <Row columns={16}>
                <Column floated="left" width={16}>
                  <h1 className="thai intro-sub">สามารถอ่านข้อมูลละเอียดเพิ่มเติม ที่ได้จากการสำรวจและเก็บข้อมูลปัญหาของชุมชนได้ <Link href="/article/1" to="/article/1" style={{ color: "black", textDecoration: "underline" }}>ที่นี่</Link></h1>
                </Column>
              </Row>
            </Grid>
            {/* </Row> */}
            <Grid id="timeline" centered verticalAlign="middle" style={{ margin: "5vh 0" }}>
              <Row columns={16} style={{ marginTop: "10vh" }} centered>
                <h1 className="thai" style={{ fontSize: isMobile ? "7.5vw" : "50px", color: "white" }}>Timeline</h1>
              </Row>
              <Row columns={16} style={{ marginTop: "3vh" }} centered>
                <Column id="timepoint" className="timepoint1" computer={2} mobile={16}>
                  <Grid centered>
                    <Row centered>
                      <RegisterIcon style={{ width: "150px", height: "150px", padding: 5, marginLeft: 30 }} />
                    </Row>
                    <Row><p className="thai bullet">Registration</p></Row>
                    <Row><p className="thai bullet">14 - 17 <Column only="computer" /> Nov 2018</p></Row>
                  </Grid>
                </Column>
                <Column computer={2} mobile={12} tablet={7}>
                  <div style={{ display: "block" }} className="timeline-line-frame">
                    <div style={{ width: "0%", backgroundColor: "white", height: "3px" }} className="timelink1" id="timeline-link-draw" />
                  </div>
                </Column>
                <Column id="timepoint" className="timepoint2" computer={2} mobile={16}>
                  <Grid centered>
                    <Row centered>
                      <AnnouncedIcon style={{ width: "170px", height: "170px", padding: 5, marginLeft: 30 }} />
                    </Row>
                    <Row><p className="thai bullet">Announced</p></Row>
                    <Row><p className="thai bullet">18 Nov 2018</p></Row>
                  </Grid>
                </Column>
                <Column computer={3} mobile={12} tablet={7}>
                  <div className="timeline-line-frame">
                    <div style={{ width: "0%", backgroundColor: "white", height: "3px" }} className="timelink2" id="timeline-link-draw" />
                  </div>
                </Column>
                <Column id="timepoint" className="timepoint3" computer={2} mobile={16}>
                  <Grid centered>
                    <Row centered>
                      <FirstmeetIcon style={{ width: "150px", height: "150px", padding: 5 }} />
                    </Row>
                    <Row centered><p className="thai bullet">First Meet</p> </Row>
                    <Row><p className="thai bullet">20 Nov 2018</p></Row>
                  </Grid>
                </Column>
                <Column computer={3} mobile={12} tablet={7}>
                  <div style={{ display: "block" }} className="timeline-line-frame">
                    <div style={{ width: "0%", backgroundColor: "white", height: "3px" }} className="timelink3" id="timeline-link-draw" />
                  </div>
                </Column>
                <Column id="timepoint" className="timepoint4" computer={2} mobile={16}>
                  <Grid centered>
                    <Row>
                      <CampdateIcon style={{ width: "150px", height: "150px", padding: 5 }} />
                    </Row>
                    <Row centered><p className="thai bullet">Camp date</p> </Row>
                    <Row><p className="thai bullet">22 - 28 <Column only="computer" /> Dec 2018</p></Row>
                  </Grid>
                </Column>
              </Row>
              {/* <Row columns={16}>
                <Column floated="left" width={16}>
                  <h1 id="timeline-notice" className="thai intro-sub">*หมายเหตุ : ในช่วงเวลาก่อนวันค่ายจริง อาจจะมีการประชุมเพิ่มเติมกับผู้เข้าร่วมค่าย เพื่อทำความเข้าใจ และวางแผนการปฏิบัติงาน</h1>
                </Column>
              </Row> */}
            </Grid>
            <Slider autoplaySpeed={5000} autoplay style={{ opacity: 0 }} slidesToShow={1} slidesToScroll={1} speed={500} dots infinite>
              <div>
                <Grid className="interview-frame" style={{ backgroundImage: `url('${interview_1}')`, backgroundSize: "cover" }}>
                  <Row>
                    <Column computer={9} mobile={11} floated="right">
                      <div className="interview-container" style={{ backgroundColor: "rgba(255, 255, 255, 0.44)" }}>
                        <p className="thai interview-personal" style={{ textAlign: "left" }}>
                          “ในตอนแรกเหมือนน้องไม่ค่อยอยากที่จะเรียนเท่าไร แต่พอถึงวันสุดท้ายที่น้องๆเขียนความรู้สึกในใจให้เรา<br />
                          น้องแทบทุกคนเขียนมาว่าอยากให้ไปสอนอีก เราก็รู้สึกดีใจมากจริงๆ...”
                            </p>
                        <h1 className="thai interview-overall">
                          ”...การที่เรามาทำค่ายนี้เราไม่ได้เป็นเพียงผู้ให้ <br />
                          แต่เรายังได้รับประสบการณ์<br />
                          และความรู้ที่หาไม่ได้ในห้องเรียนอีกด้วย...”
                            </h1>
                        <h2 className="thai interviewer">บุ้ค ทีมเสริมสร้างทักษะการเรียนรู้ <br />ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                      </div>
                    </Column>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid className="interview-frame" style={{ backgroundImage: `url('${interview_5}')`, backgroundSize: "cover" }}>
                  <Row>
                    <Column computer={9} mobile={11} floated="right">
                      <div className="interview-container" style={{ backgroundColor: "rgba(255, 255, 255,0.44)" }}>
                        <p className="thai interview-personal" style={{ textAlign: "left" }}>
                          ”... ได้สำรวจข้อมูลว่ามีปัญหาอะไรบ้างในชุมชน เพราะอาจจะช่วยได้ในบางเรื่อง <br />
                          ได้เจอกับชาวบ้านเยอะมากๆ ไปทั้งหมู่บ้าน เกือบร้อยครัวเรือน...”
                            </p>
                        <h1 className="thai interview-overall">
                          “หลังทำค่ายเราได้อะไรหลายอย่างกลับมา <br />
                          ได้ฝึกสกิลการสื่อสาร มีความสุขทุกครั้งที่ได้คุยกับชาวบ้าน <br />
                          ได้เห็นวิถีชีวิตของชาวบ้าน เข้าใจคนอื่นมากขึ้น...”
                            </h1>
                        <h2 className="thai interviewer">ฝาย ทีมสำรวจข้อมูลครัวเรือน <br />ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                      </div>
                    </Column>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid className="interview-frame" style={{ backgroundImage: `url('${interview_3}')`, backgroundSize: "cover" }}>
                  <Row>
                    <Column computer={9} mobile={11} floated="right">
                      <div className="interview-container" style={{ backgroundColor: "rgba(255, 255, 255, 0.44)" }}>
                        <p className="thai interview-personal" style={{ textAlign: "left" }}>
                          “ค่ายวิศวพัฒน์ เป็นค่ายแรกที่ผมเคยทำ และผมอยากเข้าร่วมอีกครั้งถ้ามีโอกาส <br />
                          ผมคิดว่าตลอดช่วงเวลาที่ผมได้ทำค่าย เป็นช่วงเวลาที่มีค่าที่สุดในช่วงปิดเทอมนั้นเลย...”
                            </p>
                        <h1 className="thai interview-overall">
                          ”...เป็นค่ายที่เปิดโอกาสให้ผมได้เริ่มทำในสิ่งใหม่ๆ <br />
                          ได้รู้จักเพื่อนใหม่ และสิ่งที่สำคัญที่สุด <br />
                          คือได้ทำสิ่งที่เป็นประโยชน์ต่อสังคม...”
                            </h1>
                        <h2 className="thai interviewer">อู๋ ทีมเสริมสร้างทักษะการเรียนรู้ <br />ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                      </div>
                    </Column>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid className="interview-frame" style={{ backgroundImage: `url('${interview_2}')`, backgroundSize: "cover" }}>
                  <Row>
                    <Column computer={9} mobile={11} floated="right">
                      <div className="interview-container" style={{ backgroundColor: "rgba(255, 255, 255, 0.44)" }}>
                        <p className="thai interview-personal" style={{ textAlign: "left" }}>
                          “ตอนแรกคิดว่าเรายังไม่มีประสบการณ์ เลยกลัวว่าจะช่วยเขาไม่ได้มาก <br />
                          แต่พอถึงวันงานก็มีรุ่นพี่ปีสาม ปีสี่ มาสอนงานให้ สุดท้ายก็ทำเป็น แล้วก็ได้ช่วยงานจริงๆ...”

                            </p>
                        <h1 className="thai interview-overall">
                          ”...ค่ายทุกค่าย ล้วนเป็นค่ายที่ดีและมีประโยชน์ในแบบของมัน <br />
                          และนี่ก็เป็นอีกค่ายหนึ่งที่เราคิดว่ามันดีมากๆ...”
                            </h1>
                        <h2 className="thai interviewer">มิ้นท์ ทีมติดตั้งระบบเซนเซอร์ <br />ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                      </div>
                    </Column>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid className="interview-frame" style={{ backgroundImage: `url('${interview_6}')`, backgroundSize: "cover" }}>
                  <Row>
                    <Column computer={9} mobile={11} floated="left">
                      <div className="interview-container" style={{ backgroundColor: "rgba(255, 255, 255,0.44)" }}>
                        <p className="thai interview-personal" style={{ textAlign: "left" }}>
                          “ตอนแรกก็กลัวอยู่บ้าง แต่ก็ได้ลองทำสิ่งใหม่ๆอย่างจากการลงมือทำจริง <br />
                          ค่ายนี้สนุกดี ได้เจอเพื่อนๆพี่ๆเยอะมากๆ เป็นค่ายที่ดีค่ายหนึ่งเลย...”

                            </p>
                        <h1 className="thai interview-overall">
                          ”...ถ้าอยากมาทำก็มาทำเลย เพราะบางครั้งสิ่งที่เรากลัว  <br />
                          มันอาจจะไม่ได้น่ากลัวอย่างที่คิดไว้ มาแล้วก็ได้ประสบการณ์<br />
                          ได้ลองอะไรใหม่ๆ และที่สำคัญคือการได้ช่วยเหลือสังคม...”
                            </h1>
                        <h2 className="thai interviewer">เฟรน ทีมติดตั้งระบบเซนเซอร์ <br />ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                      </div>
                    </Column>
                  </Row>
                </Grid>
              </div>
              <div>
                <Grid className="interview-frame" style={{ backgroundImage: `url('${interview_4}')`, backgroundSize: "cover" }}>
                  <Row>
                    <Column computer={9} mobile={11} floated="right">
                      <div className="interview-container" style={{ backgroundColor: "rgba(255, 255, 255, 0.44)" }}>
                        <p className="thai interview-personal" style={{ textAlign: "left" }}>
                          “ได้ทำอะไรหลายอย่างมาก เช่นสอนหนังสือน้อง ๆ ทำการทดลอง มีทั้งเด็กที่ตั้งใจเรียน<br />
                          และที่ไม่อยากเรียน ก็ต้องเรียนรู้วิธีการรับมือกับปัญหาที่เกิดขึ้นให้ได้ ทำให้เราได้เข้าใจเด็กมากขึ้น...”
                            </p>
                        <h1 className="thai interview-overall">
                          ”...จากที่ได้ทำค่ายทำให้รู้สึกภูมิใจที่ได้ช่วยเหลือโรงเรียน <br />
                          แม้ระยะเวลาที่ช่วยจะไม่นานนัก<br />
                          แต่ก็ถือเป็นประสบการณ์ที่สนุกมากค่ะ...”
                            </h1>
                        <h2 className="thai interviewer">ปิ่น ทีมเสริมสร้างทักษะการเรียนรู้ <br />ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                      </div>
                    </Column>
                  </Row>
                </Grid>
              </div>
            </Slider>
            <Grid id="FAQ" style={{ margin: "5vh 0" }} stackable>
              <Row columns={16} style={{ marginTop: "10vh" }} centered>
                <h1 className="thai" style={{ fontSize: isMobile ? "7.5vw" : "50px", color: "white" }}>คำถามที่พบบ่อย</h1>
              </Row>
              {
                QAList.map((Q) => (
                  <Column width={5}>
                    <QA Question={Q.q} Answer={Q.a} />
                  </Column>
                ))
              }
            </Grid>
            <Grid id="raise_funds" style={{ backgroundImage: `url('${background}')`, backgroundSize: "cover", marginTop: "10vh", height: isMobile ? "50vh" : "65vh", backgroundPosition: isMobile || isTablet ? "85% center" : "center" }}>
              <Row verticalAlign="middle">
                <Column width={10}>
                  <Grid style={{ backgroundColor: "rgba(255,255,255,0.44)" }}>
                    <Row>
                      <Column width={16}>
                        <Row>
                          <h2 className="thai interviewer">
                            ร่วมสมทบทุน {isMobile || isTablet ? <br /> : null} เพื่อการร่วมกันพัฒนาชุมชนอย่างยั่งยืน
                          </h2>
                          <h1 className="thai interview-overall">
                            ช่องทางการสนับสนุน
                          </h1>
                        </Row>
                      </Column>
                    </Row>
                    <Row centered>
                      <Column width={16}>
                        <Row>
                          <Grid>
                            <Row>
                              <Column computer={3} mobile={16}>
                                <h2 className="thai interview-overall" style={{ textAlign: isMobile || isTablet ? "left" : "center" }} >
                                  ชื่อบัญชี
                                </h2>
                              </Column>
                              <Column computer={12} mobile={16}>
                                <h1 className="thai interview-overall" style={{ textAlign: "left" }}>
                                  ”กรรมการนิสิต {isMobile ? <br /> : null} คณะวิศวกรรมศาสตร์ จุฬาฯ”
                                </h1>
                              </Column>
                            </Row>
                            <Row>
                              <Column>
                                <h2 className="thai interviewer">เลขที่บัญชี 045-286444-0 {isMobile ? <br /> : null} ธนาคารไทยพาณิชย์ {isMobile ? <br /> : null} สาขาสภากาชาดไทย</h2>
                              </Column>
                            </Row>
                          </Grid>
                        </Row>
                      </Column>
                    </Row>
                    <Row>
                      <Column width={16}>
                        <h2 className="thai interviewer" style={{ textAlign: "left" }}>แจ้งการโอนเงิน หรือความประสงค์สนับสนุนเป็นผลิตภัณฑ์ได้ที่ <br /> คุณสาโรจน์ ทะสุ thasusaroj@gmail.com </h2>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Row>
            </Grid>
            <Grid id="contact_us" centered>
              <Row centered>
                <h1 className="h1">Contact us</h1>
              </Row>
              <Column width={14} centered>
                <Grid centered>
                  <Row columns={16}>
                    <Column computer={10} mobile={16}>
                      <h1 className="thai">ค่ายวิศวพัฒน์ โครงการวิศวกรรมอาสาพัฒนา</h1>
                      <p>จุฬาลงกรณ์มหาวิทยาลัย 254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330</p>
                      <h3 className="thai"><Icon name="facebook" /> <a href="https://fb.com/VoluntaryIntaniaCamp" target="_blank" style={{ color: "black" }}><u>ค่ายวิศวพัฒน์</u></a></h3>
                      <h3><Icon name="mail" /> vidvapath.cu@gmail.com</h3>
                      <h3 className="thai"><Icon name="desktop" /> <a href="http://vic.eng.chula.ac.th" target="_blank" style={{ color: "black" }}><u>http://vic.eng.chula.ac.th</u></a></h3>
                      <h3 className="thai"><Icon name="group" /> <Link href="/about" to="/about" style={{ color: "black", textDecoration: "underline" }}>ทีมบริหารค่าย</Link></h3>
                    </Column>
                    <Column computer={6} mobile={16}>
                      <Grid verticalAlign="middle" centered style={isMobile ? { marginTop: 50 } : {}}>
                        <div id="fb-root" />
                        <div style={{ width: "100%" }} className="fb-page" data-href="https://www.facebook.com/VoluntaryIntaniaCamp/"
                          data-tabs="" data-width={isMobile ? "350" : "500"}
                          data-small-header="false" data-adapt-container-width="true"
                          data-hide-cover="false" data-show-facepile="true">
                          <blockquote cite="https://www.facebook.com/VoluntaryIntaniaCamp/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/VoluntaryIntaniaCamp/">ค่ายวิศวพัฒน์</a>
                          </blockquote>
                        </div>
                      </Grid>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </div>
      <div id="floating-button" style={{
        position: "fixed", zIndex: 150,
        bottom: 0, right: 0, opacity: 0,
        marginBottom: "10vh",
        backgroundColor: "#bababa60"
      }}
      >
        <Button size="huge" animated="fade" color="twitter" onClick={() => this.props.history.push("/register")} >
          <Button.Content visible>
            Register
            <Icon name='angle double right' />
          </Button.Content>
          <Button.Content hidden>
            <Grid verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column>
                  <Icon name='signup' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Button.Content>
        </Button>
      </div>
    </div>
  )
  InitAnimation = async () => {
    await window.IndexComponent.setState({ allAPILoaded: true })
    if (window.CurrentConroller) {
      window.CurrentConroller.destroy()
    }
    if (ScrollMagic !== null) {
      const controller = new ScrollMagic.Controller()
      // <------------ Background --------------->
      controller.addScene(BackgroundAnimation(rotatableAngle))
      // <------------ Scene1 --------------->
      {
        let fakeState = {
          currentSubheading1Length: 0
        }
        const scene1 = new ScrollMagic.Scene({ offset: 0, tweenChanges: true })
        const scheduler1 = new TimelineLite() // Animation time schedule
        if (!isMobile) {
          // SVG Sections --> "วิศวพัฒน์" text drawing
          for (let charIndex = 1; charIndex < 14; charIndex++) {
            const charSVG = document.querySelector(`path.char_${charIndex}`)
            charSVG.style.stroke = "rgba(255, 246, 143,1)"
            charSVG.style.strokeDasharray = charSVG.getTotalLength()
            charSVG.style.ease = Linear.easeNone
            scheduler1.add(Tween.fromTo(`path.char_${charIndex}`, 0.15, { strokeDashoffset: charSVG.getTotalLength() }, { strokeDashoffset: 0 }), 0.15 * (charIndex - 1))
          }
        }

        // Fill "วิศวพัฒน์" text with rgba(255, 246, 143,1) (bright yellow) color
        scheduler1.add(Tween.fromTo(`path[class^="char"]`, 2, { fill: "rgba(255, 246, 143,0)", ease: Expo.easeIn }, { fill: "rgba(255, 246, 143,1)", ease: Expo.easeIn }), 0)

        // Printing "นิสิตทุนคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย" text
        scheduler1.add(Tween.to(fakeState, 1, { currentSubheading1Length: 47, onUpdate: () => window.IndexComponent.setState({ ...fakeState }), ease: Linear.easeInOut }), 2)

        // Displaying VIC logo image
        scheduler1.add(Tween.fromTo("#VICLogo", 2, { opacity: 0 }, { opacity: 1 }), 0)
        // Add schedule to scene
        scene1.setTween(scheduler1)

        // Add scene to controller
        controller.addScene(scene1)
      }
      // <------------ History Animation --------------->
      {
        if (!isMobile) {
          const HistoryFadeInScene = new ScrollMagic.Scene({ triggerElement: "#intro_paragraph", duration: 0.5 * H, offset: 0 }).setTween(
            TweenMax.staggerFromTo("#intro_paragraph", 0.2, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, 0.5),
          )
          controller.addScene(HistoryFadeInScene)
        }
        const HistoryFadeOutScene = new ScrollMagic.Scene({ triggerElement: "#intro_paragraph", duration: 0.2 * H, offset: -0.3 * H }).setTween(
          "#cover", { opacity: 0 }
        )
        const RegisterButtonFadeInScene = new ScrollMagic.Scene({ triggerElement: "#intro_paragraph", duration: 0.5 * H }).setTween(
          "#floating-button", { opacity: 1 }
        )
        const RegisterButtonFadeOutScene = new ScrollMagic.Scene({ triggerElement: "#contact_us", duration: 0.3 * H }).setTween(
          "#floating-button", { opacity: 0 }
        )
        controller.addScene(HistoryFadeOutScene)
        controller.addScene(RegisterButtonFadeInScene)
        controller.addScene(RegisterButtonFadeOutScene)
      }

      // <------------ Job Intro Animation --------------->
      {
        const FayJobScene = new ScrollMagic.Scene({ triggerElement: "#camp_infor", tweenChanges: true, reverse: false })
        const FaySceneScheduler = new TimelineLite() // Animation time schedule

        FaySceneScheduler.add(Tween.fromTo(`#camp_infor`, 0.5, { opacity: 0 }, { opacity: 1 }), 0)

        // Tools icon animation
        const toolSVG = document.querySelector(`path.tools_1`)
        toolSVG.style.stroke = "rgba(255, 255, 255,1)"
        toolSVG.style.strokeWidth = "5px"
        toolSVG.style.strokeDasharray = toolSVG.getTotalLength()
        toolSVG.style.ease = Linear.easeNone
        FaySceneScheduler.add(Tween.fromTo(`path.tools_1`, 3, { strokeDashoffset: toolSVG.getTotalLength() }, { strokeDashoffset: 0 }), 0)

        // Sprout icon animation

        const sproutSVG1 = document.querySelector(`path.sprout_1`)
        sproutSVG1.style.stroke = "rgba(255, 255, 255,1)"
        sproutSVG1.style.strokeWidth = "5px"
        sproutSVG1.style.strokeDasharray = sproutSVG1.getTotalLength()
        sproutSVG1.style.ease = Linear.easeNone
        FaySceneScheduler.add(Tween.fromTo(`path.sprout_1`, 1.5, { strokeDashoffset: sproutSVG1.getTotalLength() }, { strokeDashoffset: 0 }), 0)

        const sproutSVG2 = document.querySelector(`path.sprout_2`)
        sproutSVG2.style.stroke = "rgba(255, 255, 255,1)"
        sproutSVG2.style.strokeWidth = "5px"
        sproutSVG2.style.strokeDasharray = sproutSVG2.getTotalLength()
        sproutSVG2.style.ease = Linear.easeNone
        FaySceneScheduler.add(Tween.fromTo(`path.sprout_2`, 1.5, { strokeDashoffset: sproutSVG2.getTotalLength() }, { strokeDashoffset: 0 }), 0)


        FaySceneScheduler.add(Tween.fromTo(`#vic-job-headline`, 3, { opacity: 0 }, { opacity: 1 }), 0)
        FaySceneScheduler.add(Tween.fromTo(`#vic-job-detail`, 1, { opacity: 0, x: -100 }, { opacity: 1, x: 0 }), 0.5)
        FaySceneScheduler.add(Tween.fromTo(`.verticalLine`, 1.5, { width: "0%", ease: Expo.easeOut }, { width: "100%", ease: Expo.easeOut }), 0)

        // Add schedule to scene
        FayJobScene.setTween(FaySceneScheduler)

        // Add scene to controller
        controller.addScene(FayJobScene)
      }
      // <------------ Timeline Animation --------------->
      if (isMobile || isTablet) {
        for (let TimepointIndex = 1; TimepointIndex <= 3; TimepointIndex++) {
          const TLScene = new ScrollMagic.Scene({ triggerElement: `.timelink${TimepointIndex}`, tweenChanges: true, reverse: false, offset: -0.3 * H })

          if (isTablet) {
            const TPScene = new ScrollMagic.Scene({ triggerElement: `.timepoint${TimepointIndex}`, tweenChanges: true, reverse: false, offset: -0.4 * H })
            // Add timepoint opacity increasing animation to scene
            TPScene.setTween(Tween.fromTo(`.timepoint${TimepointIndex}`, 0.5, { opacity: 0 }, { opacity: 1 }))
            controller.addScene(TPScene)
          }

          // Add timelink drawing animation to scene
          TLScene.setTween(Tween.fromTo(`.timelink${TimepointIndex}`, 0.5, { width: "0%" }, { width: "100%" }))

          // Add scene to controller
          controller.addScene(TLScene)
        }
      } else {
        const TlScene = new ScrollMagic.Scene({ triggerElement: "#timeline", tweenChanges: true, reverse: false })
        const TlSceneScheduler = new TimelineLite() // Animation time schedule
        TlSceneScheduler.add(TweenMax.staggerFromTo("#timepoint", 0.5, { opacity: 0 }, { opacity: 1 }, 1), 0)
        TlSceneScheduler.add(TweenMax.staggerFromTo("#timeline-link-draw", 0.5, { width: "0%" }, { width: "100%" }, 1), 0.5)
        TlSceneScheduler.add(Tween.fromTo(`#timeline-notice`, 0.5, { opacity: 0 }, { opacity: 1 }), 3)
        // Add schedule to scene
        TlScene.setTween(TlSceneScheduler)

        // Add scene to controller
        controller.addScene(TlScene)
      }
      // <------------ Camp History Animation --------------->
      for (let hisIndex = 1; hisIndex <= 2; hisIndex++) {

        if (!isMobile || isTablet) {
          const HisConScene = new ScrollMagic.Scene({ triggerElement: `.historycontent${hisIndex}`, tweenChanges: true, reverse: false, offset: -0.3 * H })
          HisConScene.setTween(Tween.fromTo(`.historycontent${hisIndex}`, 0.5, { opacity: 0 }, { opacity: 1 }, 1))
          controller.addScene(HisConScene)
        }

        const HisLineScene = new ScrollMagic.Scene({ triggerElement: `.hisline${hisIndex}`, tweenChanges: true, reverse: false, offset: -0.3 * H })

        HisLineScene.setTween(Tween.fromTo(`.hisline${hisIndex}`, 1.5, { height: "0%" }, { height: "100%" }, 1))

        controller.addScene(HisLineScene)
      }


      window.CurrentConroller = controller
    }
  }
  componentDidMount = () => {
    window.particlesJS("background", ParticleConfig)
    window.IndexComponent = this
    window.LoadedAPI = window.LoadedAPI || { fb: false, google: false, iframe1: false, iframe2: false }
    if (window.LoadedAPI.fb && window.LoadedAPI.google) {
      window.IndexComponent.InitAnimation()
    } else {
      window.ExternalAPILoaded = (origin) => {
        window.LoadedAPI[origin] = true
        if (window.LoadedAPI.fb && window.LoadedAPI.google && window.LoadedAPI.iframe1 && window.LoadedAPI.iframe2) {
          console.log("State: API loaded")
          window.IndexComponent.InitAnimation()
        }
      }
      FBLoadAPI(document, 'script', 'facebook-jssdk');
      GMapLoadAPI(document, 'script', 'google-mapsdk');
    }
  }
}

export default HomePage
