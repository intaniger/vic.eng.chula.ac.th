import React, { Component } from 'react'
import { Link } from 'react-static';
import { Grid, Image, Icon, Button, Reveal } from 'semantic-ui-react'
import { TweenLite as Tween, Linear, TimelineLite, Expo, TweenMax } from 'gsap';
import "particles.js";
import { isMobile, isTablet } from 'react-device-detect';
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
import tempimage from '../asset/pic1.jpg'
import vic1_round1 from '../asset/vic-1-1.jpg'
import interview_1 from "../asset/interview1.jpg";
import interview_2 from "../asset/interview2.jpg";
import interview_3 from "../asset/interview3.jpg";


import VIC from '../asset/VIC.svg'
import ToolIcon from '../asset/tools.svg'
import ActivityIcon from '../asset/sprout.svg'
import AnnouncedIcon from '../asset/announced.svg'
import CampdateIcon from '../asset/campdate.svg'
import FirstmeetIcon from '../asset/firstmeet.svg'
import RegisterIcon from '../asset/registeration.svg'

import ParticleConfig from '../asset/particle_config.json'
import './style.css'

import "../lib/illuminated.js";
import Loading from './Loading';
import QA from './Q&A';

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
    q: "ตารางกิจกรรมในแต่ละวันมีอะไรบ้าง",
    a: <p style={{ fontSize: "2vh" }} className="thai">ข้อมูลส่วนนี้จะมีการชี้แจงรายละเอียด<br />ในวันเฟิร์สมีท ค่ายวิศวพัฒน์ครับ</p>
  },
  {
    q: "ต้องเตรียมของใช้อะไรขึ้นค่ายบ้าง",
    a: <p style={{ fontSize: "1.5vh" }} className="thai">เตรียมเฉพาะของใช้ส่วนตัว และอุปกรณ์การนอน<br />โดยทางค่ายจะมีอุปกรณ์<br />ที่เกี่ยวข้องกับการทำงานเพิ่มเติมให้</p>
  },
  {
    q: "ลักษณะที่พักเป็นอย่างไร",
    a: <p style={{ fontSize: "2vh" }} className="thai">ข้อมูลส่วนนี้ต้องขออุบไว้ก่อนนะครับ <br /> แต่รับรองว่าไม่นอนกลางป่าแน่นอน</p>
  }
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
        {
          this.state.allAPILoaded ?
            <Grid columns={16} centered>
              <Column width={14}>
                <Grid id="cover">
                  <Row>
                    <Column computer={8} mobile={16} floated="right">
                      <Grid verticalAlign='middle' centered style={{ height: "100vh" }}>
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
                        </Row>
                      </Grid>
                    </Column>
                  </Row>
                </Grid>
                <Grid id="intro" style={{ padding: "100px 0" }} verticalAlign='middle' centered>
                  <Grid stackable id="intro_paragraph" verticalAlign="middle">
                    <Column floated="right" width={8}>
                      <p className="thai small intro-head">
                        ถือกำเนิดขึ้นจากการรวมกลุ่มกันของนิสิตทุนวิศวฯ จุฬาฯ เพื่อทำกิจกรรมตอบแทนมหาวิทยาลัย และสังคมภายนอก
                        เนื่องด้วยความตระหนักและมีจิตสำนึกในฐานะการเป็นผู้รับ ที่ได้รับโอกาสทางการศึกษาจากจุฬาลงกรณ์มหาวิทยาลัย และต้องการส่งต่อ แบ่งปันโอกาสด้วยความรู้ความสามารถของตน
                      </p>
                    </Column>
                    <Column floated="left" width={8}>
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
                    <Column floated="left" width={8}>
                      <Grid>
                        <Row centered>
                          <Column width={10}>
                            <Image style={{ justifyContent: 'center', alignItems: 'center' }} src={section_1_img_2} />
                          </Column>
                        </Row>
                      </Grid>
                    </Column>
                    <Column floated="right" width={8}>
                      <p className="thai small intro-sub">
                        &nbsp;&nbsp;&nbsp;&nbsp;ค่ายวิศวพัฒน์จึงถือเป็นค่ายที่เปิดโอกาสให้นิสิตทุน และนิสิตวิศวะ จุฬาฯ ได้นำความสามารถที่มี ออกไปช่วยเหลือสังคมในหลากหลายมิติ และในบริบทต่างๆโดยไม่จำกัด และไม่ปิดกั้นความเฉพาะของงาน
                        ไม่ว่าจะเป็นงานโยธา งานวิชาการ งานเทคโนโลยี หรืองานที่ต้องใช้องค์ความรู้ทางวิศวกรรมด้านต่างๆ โดยเน้นการมีส่วนร่วมกับชุมชน ด้วยหลักของการ <strong>“เข้าถึง เข้าใจ และพัฒนา”</strong> เพื่อช่วยเหลือ และพัฒนาได้ตรงสาเหตุที่แท้จริงของปัญหาเหล่านั้น นำไปสู่การสร้างชุมชนที่เข้มแข็ง
                      </p>
                    </Column>
                  </Grid>
                </Grid>

                <Grid id="camphistory" columns={16} centered verticalAlign="middle">
                  <Grid className="history1" id="history" width={16} centered>
                    <Row centered className="historycontent1" id="historycontent">
                      {/* <Column width={6}>
                        <h1 className="thai bullet">ค่ายวิศวพัฒน์ ครั้งที่1</h1>
                        <ul style={{ listStyleType: "none" }} className="thai white intro-sub">
                          <li>สถานที่ : </li>
                          <li>กิจกรรมที่ทำ : </li>
                          <li>ปัญหา : </li>
                          <li>ระยะเวลา : </li>
                        </ul>
                      </Column> */}
                      <Column width={6} >
                        <Image style={{ justifyContent: 'center', alignItems: 'center' }} src={vic1_round1} />
                      </Column>
                    </Row>
                    <Row centered >
                      <div style={{ width: "3px", backgroundColor: "white", height: "300px" }} id="hisline" className="hisline1" />
                    </Row>
                  </Grid>
                  <Grid className="history2" id="history" width={16} centered>
                    <Row centered className="historycontent2" id="historycontent">
                      <Column width={6} height={50} >
                        <Image style={{ justifyContent: 'center', alignItems: 'center' }} src={tempimage} />
                      </Column>
                      <Column width={6}>
                        <h1 className="thai bullet">ค่ายวิศวพลัส</h1>
                        <ul style={{ listStyleType: "none" }} className="thai white intro-sub">
                          <li>สถานที่ : </li>
                          <li>กิจกรรมที่ทำ : </li>
                          <li>ปัญหา : </li>
                          <li>ระยะเวลา : </li>
                        </ul>
                      </Column>
                    </Row>
                    <Row centered>
                      <div style={{ width: "3px", backgroundColor: "white", height: "300px" }} id="hisline" className="hisline2" />
                    </Row>
                  </Grid>
                  <Grid className="history3" id="history" width={16} centered>
                    <Row centered className="historycontent3" id="historycontent">
                      <Column width={6}>
                        <h1 className="thai bullet">ค่ายวิศวพัฒน์ ครั้งที่2</h1>
                        <ul style={{ listStyleType: "none" }} className="thai white intro-sub">
                          <li>สถานที่ : </li>
                          <li>กิจกรรมที่ทำ : </li>
                          <li>ปัญหา : </li>
                          <li>ระยะเวลา : </li>
                        </ul>
                      </Column>
                      <Column width={6} height={50} >
                        <Image style={{ justifyContent: 'center', alignItems: 'center' }} src={tempimage} />
                      </Column>
                    </Row>
                  </Grid>
                </Grid>

                <Grid id="camp_infor" stackable centered>
                  <Column verticalAlign='middle' width={8}>
                    <Grid style={{ height: "100%" }}>
                      <Row centered height={50}>
                        <Grid>
                          <Row centered>
                            <ToolIcon style={{ width: "150px", height: "150px", padding: 5 }} />
                          </Row>
                          <Row centered><p id="vic-job-headline" className="thai bullet">ปรับปรุงระบบชลประทาน</p></Row>
                        </Grid>
                      </Row>
                      <div className="verticalLine" />
                      <Row centered height={50}>
                        <Grid>
                          <Row centered>
                            <ActivityIcon style={{ width: "150px", height: "150px", padding: 5 }} />
                          </Row>
                          <Row centered><p id="vic-job-headline" className="thai bullet">กิจกรรมปฏิสัมพันธ์กับชุมชน</p></Row>
                        </Grid>
                      </Row>
                    </Grid>
                  </Column>
                  <Column id="vic-job-headline" width={8}>
                    {
                      window.google ? <GoogleMap isMobile={isMobile} /> : null
                    }
                  </Column>
                </Grid>
                {/* </Row> */}
                <Grid id="timeline" centered verticalAlign="middle" style={{margin:"5vh 0"}}>
                  <Row columns={16} style={{ marginTop: "10vh" }} centered>
                    <Column id="timepoint" className="timepoint1" computer={2} mobile={16}>
                      <Grid centered>
                        <Row centered>
                          <RegisterIcon style={{ width: "150px", height: "150px", padding: 5, marginLeft: 30 }} />
                        </Row>
                        <Row><p className="thai bullet">Registration</p></Row>
                        <Row><p className="thai bullet">9 - 13 <Column only="computer" /> Nov 2018</p></Row>
                      </Grid>
                    </Column>
                    <Column computer={2} mobile={12} tablet={7}>
                      <div style={{display:"block"}} className="timeline-line-frame">
                        <div style={{ width: "0%", backgroundColor: "white", height: "3px" }} className="timelink1" id="timeline-link-draw" />
                      </div>
                    </Column>
                    <Column id="timepoint" className="timepoint2" computer={2} mobile={16}>
                      <Grid centered>
                        <Row centered>
                          <AnnouncedIcon style={{ width: "170px", height: "170px", padding: 5, marginLeft: 30 }} />
                        </Row>
                        <Row><p className="thai bullet">Announced</p></Row>
                        <Row><p className="thai bullet">14 Nov 2018</p></Row>
                      </Grid>
                    </Column>
                    <Column computer={3} mobile={12} tablet={7}>
                      <div  className="timeline-line-frame">
                        <div style={{ width: "0%", backgroundColor: "white", height: "3px" }} className="timelink2" id="timeline-link-draw" />
                      </div>
                    </Column>
                    <Column id="timepoint" className="timepoint3" computer={2} mobile={16}>
                      <Grid centered>
                        <Row centered>
                          <FirstmeetIcon style={{ width: "150px", height: "150px", padding: 5 }} />
                        </Row>
                        <Row centered><p className="thai bullet">First Meet</p> </Row>
                        <Row><p className="thai bullet">16 Nov 2018</p></Row>
                      </Grid>
                    </Column>
                    <Column computer={3} mobile={12} tablet={7}>
                      <div style={{display:"block"}}  className="timeline-line-frame">
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
                  <Row columns={16}>
                    <Column floated="left" width={16}>
                      <h1 id="timeline-notice" className="thai intro-sub">*หมายเหตุ : ในช่วงเวลาก่อนวันค่ายจริง อาจจะมีการประชุมเพิ่มเติมกับผู้เข้าร่วมค่าย เพื่อทำความเข้าใจ และวางแผนการปฏิบัติงาน</h1>
                    </Column>
                  </Row>
                </Grid>
                <Slider style={{opacity:0}} slidesToShow={1} slidesToScroll={1} speed={500} dots infinite>
                  <div>
                    <Grid className="interview-frame" style={{backgroundImage:`url('${interview_1}')`, backgroundSize:"cover"}}>
                      <Row>
                        <Column computer={9} mobile={11} floated="right">
                          <div className="interview-container" style={{backgroundColor:"#ffffff70"}}>
                            <p className="thai interview-personal" style={{textAlign: "left"}}>
                              “ตอนแรกคิดว่าเรายังไม่มีประสบการณ์ เลยกลัวว่าจะช่วยเขาไม่ได้มาก <br/>
                              แต่พอถึงวันงานก็มีรุ่นพี่ปีสาม ปีสี่ มาสอนงานให้ สุดท้ายก็ทำเป็น แล้วก็ได้ช่วยงานจริงๆ...”
                            </p>
                            <h1 className="thai interview-overall">
                              ”...ค่ายทุกค่าย ล้วนเป็นค่ายที่ดีและมีประโยชน์ในแบบของมัน <br/>
                              และค่ายนี้ก็เป็นอีกค่ายหนึ่งที่เราคิดว่ามันดีมากๆ...”
                            </h1>
                            <h2 className="thai interviewer">มิ้นท์ วิศวะ #2 ทีมติดตั้งระบบเซนเซอร์ <br/>ค่ายวิศวพัฒน์ครั้งที่ 1</h2>
                          </div>
                        </Column>
                      </Row>
                    </Grid>
                  </div>
                  <div>
                    <Grid className="interview-frame" style={{backgroundImage:`url('${interview_2}')`, backgroundSize:"cover"}}>
                      <Row>
                        <Column computer={9} mobile={11} floated="right">
                          <div className="interview-container" style={{marginRight: "5vh", marginTop:"10vh", padding:15, backgroundColor:"#ffffff70"}}>
                            <p className="thai interview-personal" style={{textAlign: "left",fontSize:16}}>
                              “ได้มีโอกาสเข้ามาช่วยงานเว็บค่ายในปีนี้ ตอนแรกคิดว่างานคงไม่เดือดมาก <br/>
                              แต่พอได้ทำงานจริงๆเท่านั้นแหละ เดือดเป็น<label className="thai" style={{fontSize:30}}>เหี้ย</label>เลยอีดอกกกก...”
                            </p>
                            <h1 className="thai interview-overall">
                              มึงจะส่งโครงวันไหนจ๊ะ?
                            </h1>
                            <h2 className="thai interviewer">นะโม รองประธานฝ่ายทะเบียน ไม่ได้กล่าวไว้ <br/>ประธานค่ายแค่พูดสิ่งที่เขาคงอยากจะบอกแค่นั้นแหละ</h2>
                          </div>
                        </Column>
                      </Row>
                    </Grid>
                  </div>
                  <div>
                    <Grid className="interview-frame" style={{backgroundImage:`url('${interview_3}')`, backgroundSize:"cover"}}>
                      <Row>
                        <Column computer={9} mobile={11} floated="right">
                          <div className="interview-container" style={{marginRight: "5vh", marginTop:"10vh", padding:15, backgroundColor:"#ffffff70"}}>
                            <p className="thai interview-personal" style={{textAlign: "left",fontSize:16}}>
                              “ได้เห็นหนังหน้าประธานค่ายปีนี้แล้ว พูดเลยว่า”
                            </p>
                            <h1 className="thai interview-overall">
                              งานดีมากกกกกก
                            </h1>
                            <h2 className="thai interviewer">เฟรนด์ วิศวะ #2 ทีมติดตั้งระบบเซนเซอร์ ไม่ได้กล่าวไว้อีกเช่นกัน <br/>ประธานค่ายแค่เอารูปมาแปะ แล้วชมตัวเองแบบเนียนๆแค่นั้นแหละ</h2>
                          </div>
                        </Column>
                      </Row>
                    </Grid>
                  </div>
                </Slider>
                <Grid id="FAQ" style={{ margin: "5vh 0" }} stackable>
                  {
                    QAList.map((Q) => (
                      <Column width={5}>
                        <QA Question={Q.q} Answer={Q.a} />
                      </Column>
                    ))
                  }
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
            : <Loading open />
        }
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
            charSVG.style.stroke = "#fff68f"
            charSVG.style.strokeDasharray = charSVG.getTotalLength()
            charSVG.style.ease = Linear.easeNone
            scheduler1.add(Tween.fromTo(`path.char_${charIndex}`, 0.15, { strokeDashoffset: charSVG.getTotalLength() }, { strokeDashoffset: 0 }), 0.15 * (charIndex - 1))
          }
        }

        // Fill "วิศวพัฒน์" text with #fff68f (bright yellow) color
        scheduler1.add(Tween.fromTo(`path[class^="char"]`, 2, { fill: "#fff68f00", ease: Expo.easeIn }, { fill: "#fff68f", ease: Expo.easeIn }), 0)

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

        // Tools icon animation
        const toolSVG = document.querySelector(`path.tools_1`)
        toolSVG.style.stroke = "#ffffff"
        toolSVG.style.strokeWidth = "5px"
        toolSVG.style.strokeDasharray = toolSVG.getTotalLength()
        toolSVG.style.ease = Linear.easeNone
        FaySceneScheduler.add(Tween.fromTo(`path.tools_1`, 3, { strokeDashoffset: toolSVG.getTotalLength() }, { strokeDashoffset: 0 }), 0)

        // Sprout icon animation

        const sproutSVG1 = document.querySelector(`path.sprout_1`)
        sproutSVG1.style.stroke = "#ffffff"
        sproutSVG1.style.strokeWidth = "5px"
        sproutSVG1.style.strokeDasharray = sproutSVG1.getTotalLength()
        sproutSVG1.style.ease = Linear.easeNone
        FaySceneScheduler.add(Tween.fromTo(`path.sprout_1`, 1.5, { strokeDashoffset: sproutSVG1.getTotalLength() }, { strokeDashoffset: 0 }), 0)

        const sproutSVG2 = document.querySelector(`path.sprout_2`)
        sproutSVG2.style.stroke = "#ffffff"
        sproutSVG2.style.strokeWidth = "5px"
        sproutSVG2.style.strokeDasharray = sproutSVG2.getTotalLength()
        sproutSVG2.style.ease = Linear.easeNone
        FaySceneScheduler.add(Tween.fromTo(`path.sprout_2`, 1.5, { strokeDashoffset: sproutSVG2.getTotalLength() }, { strokeDashoffset: 0 }), 0)


        FaySceneScheduler.add(Tween.fromTo(`#vic-job-headline`, 3, { opacity: 0 }, { opacity: 1 }), 0)
        FaySceneScheduler.add(Tween.fromTo(`.verticalLine`, 1.5, { width: "0%", ease: Expo.easeOut }, { width: isMobile?"100%":"70%", ease: Expo.easeOut }), 0)

        // Add schedule to scene
        FayJobScene.setTween(FaySceneScheduler)

        // Add scene to controller
        controller.addScene(FayJobScene)
      }
      // <------------ Timeline Animation --------------->
      if (isMobile || isTablet) {
        for (let TimepointIndex = 1; TimepointIndex <= 3; TimepointIndex++) {
          const TPScene = new ScrollMagic.Scene({ triggerElement: `.timepoint${TimepointIndex}`, tweenChanges: true, reverse: false, offset: -0.4 * H })
          const TLScene = new ScrollMagic.Scene({ triggerElement: `.timelink${TimepointIndex}`, tweenChanges: true, reverse: false, offset: -0.3 * H })

          // Add timepoint opacity increasing animation to scene
          TPScene.setTween(Tween.fromTo(`.timepoint${TimepointIndex}`, 0.5, { opacity: 0 }, { opacity: 1 }))

          // Add timelink drawing animation to scene
          TLScene.setTween(Tween.fromTo(`.timelink${TimepointIndex}`, 0.5, { width: "0%" }, { width: "100%" }))

          // Add scene to controller
          controller.addScene(TPScene)
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
      //<------------ Camp History Animation --------------->
      for (let hisIndex = 1; hisIndex <= 3; hisIndex++) {
        const HisConScene = new ScrollMagic.Scene({ triggerElement: `.historycontent${hisIndex}`, tweenChanges: true, reverse: false })

        HisConScene.setTween(Tween.fromTo(`.historycontent${hisIndex}`, 0.5, { opacity: 0 }, { opacity: 1 }, 1))

        controller.addScene(HisConScene)

        if (hisIndex < 3) {
          const HisLineScene = new ScrollMagic.Scene({ triggerElement: `.hisline${hisIndex}`, tweenChanges: true, reverse: false })

          HisLineScene.setTween(Tween.fromTo(`.hisline${hisIndex}`, 1.5, { height: "0px" }, { height: "300px" }, 1))

          controller.addScene(HisLineScene)
        }
      }


      window.CurrentConroller = controller
    }
  }
  componentDidMount = () => {
    window.particlesJS("background", ParticleConfig)
    window.IndexComponent = this
    window.LoadedAPI = window.LoadedAPI || { fb: false, google: false }
    if (window.LoadedAPI.fb && window.LoadedAPI.google) {
      window.IndexComponent.InitAnimation()
    } else {
      window.ExternalAPILoaded = (origin) => {
        window.LoadedAPI[origin] = true
        if (window.LoadedAPI.fb && window.LoadedAPI.google) {
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
