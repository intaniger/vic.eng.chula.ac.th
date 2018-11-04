
import React, { Component } from 'react'
import { withRouteData } from 'react-static';
import ParticleConfig from '../asset/particle_config.json'
import "particles.js";

import Moon from '../asset/moon.png'
import { Grid, Card } from 'semantic-ui-react';
import Contact from './ContactCard';

import PresidentImage from '../asset/executive/president.jpg'
import FinanceImage from '../asset/executive/finance.jpg'
import SecretaryImage from '../asset/executive/secretary.jpg'
import PlaceImage from '../asset/executive/place.jpg'
import RegistrarImage from '../asset/executive/registrar.jpg'
import EvaluatorImage from '../asset/executive/evaluation.jpg'
import WelfareImage from '../asset/executive/welfare.jpg'


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

class About extends Component {
  componentDidMount = () => {
    window.particlesJS("background", ParticleConfig)
  }
  render = () => (
    <div>
      <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", top: 0, left: 0 }} id="background">
        <div style={{ position: "fixed", width: window.innerWidth, height: RotateRadius, transform: `rotate(${0.2 * rotatableAngle}rad) translate(-${0.5 * MoonFactor * R}px, ${firstMoonHoffset}px)`, transformOrigin: "50% 100%" }} id="sun-moon-background">
          <img alt="Moon" src={Moon} style={{ width: `${MoonFactor * R}px` }} />
        </div>
      </div>
      <div id="content" style={{ position: "relative", zIndex: 1000, ...this.props.animationState }}>
        <Grid columns={16} centered>
          <Column width={14}>
            <Grid>
              <Row style={{ marginTop: "5vh" }}>
                <h1 className="thai h1" style={{ color: "white" }}>ทีมบริหารค่าย</h1>
              </Row>
              <Column width={14} only="computer">
                <Grid centered>
                  <Row columns={1}>
                    <Column>
                      <Contact name="ไทเกอร์ วิศวฯ" position="ประธานค่าย" avatar={PresidentImage} line="intaniger" tel="098-941-7565" />
                    </Column>
                  </Row>
                  <Row columns={2}>
                    <Column>
                      <Contact name="กอล์ฟ วิศวฯ" position="เหรัญญิก" avatar={FinanceImage} />
                    </Column>
                    <Column>
                      <Contact name="เน วิศวฯ" position="เลขานุการ" avatar={SecretaryImage} line="Ne7404" tel="099-762-6458" />
                    </Column>
                  </Row>
                  <Row columns={4}>
                    <Column>
                      <Contact name="มิว วิศวฯ" position="รองประธานฝ่ายสถานที่" avatar={PlaceImage} />
                    </Column>
                    <Column>
                      <Contact name="นะโม วิศวฯ" position="รองประธานฝ่ายทะเบียน" avatar={RegistrarImage} line="namomiok" tel="087-559-4817" />
                    </Column>
                    <Column>
                      <Contact name="โอ๊ค วิศวฯ" position="รองประธานฝ่ายประเมินผล" avatar={EvaluatorImage} />
                    </Column>
                    <Column>
                      <Contact name="อู๋ วิศวฯ" position="รองประธานฝ่ายสวัสดิการ" avatar={WelfareImage} />
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={14} only="mobile tablet">
                <Grid centered>
                  <Row centered >
                    <Column style={{ overflowY: "scroll", margin: "0 auto" }}>
                      <Contact name="ไทเกอร์ วิศวฯ" position="ประธานค่าย" avatar={PresidentImage} line="intaniger" tel="098-941-7565" />
                    </Column>
                  </Row>
                  <Row style={{ marginTop: "20vh" }}>
                    <h1 className="thai" style={{ color: "white" }}>เหรัญญิก และ เลขานุการ</h1>
                  </Row>
                  <Row>
                    <Column style={{ overflowY: "scroll", margin: "0 auto" }}>
                      <Card.Group style={{ height: 600 }} itemsPerRow={2} stackable={false}>
                        <Contact name="กอล์ฟ วิศวฯ" position="เหรัญญิก" avatar={FinanceImage} />
                        <Contact name="เน วิศวฯ" position="เลขานุการ" avatar={SecretaryImage} line="Ne7404" tel="099-762-6458" />
                      </Card.Group>
                    </Column>
                  </Row>
                  <Row style={{ marginTop: "20vh" }}>
                    <h1 className="thai" style={{ color: "white" }}>รองประธานฝ่ายต่างๆ</h1>
                  </Row>
                  <Row>
                    <Column style={{ overflowY: "scroll", margin: "0 auto" }}>
                      <Card.Group style={{ height: 600 }} itemsPerRow={4} stackable={false}>
                        <Contact name="มิว วิศวฯ" position="รองประธานฝ่ายสถานที่" avatar={PlaceImage} />
                        <Contact name="นะโม วิศวฯ" position="รองประธานฝ่ายทะเบียน" avatar={RegistrarImage} line="namomiok" tel="087-559-4817" />
                        <Contact name="โอ๊ค วิศวฯ" position="รองประธานฝ่ายประเมินผล" avatar={EvaluatorImage} />
                        <Contact name="อู๋ วิศวฯ" position="รองประธานฝ่ายสวัสดิการ" avatar={WelfareImage} />
                      </Card.Group>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
            <Grid centered style={{marginTop:"20vh", marginBottom:"8vh"}}>
              <Row centered>
                <h1 className="thai h1" style={{ color: "white" }}>ทีมพัฒนาเว็บไซต์</h1>
              </Row>
              <Column computer={10} mobile={16}>
                <Grid>
                  <Row columns={2}>
                    <Column>
                      <h2 className="thai" style={{ color: "white" }}>EDITOR-IN-CHIEF</h2>
                    </Column>
                    <Column>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>TANAKORN PISNUPOOMI</h4>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>TUANTHUM JITPUKDEE</h4>
                    </Column>
                  </Row>
                </Grid>
                <Grid>
                  <Row columns={2}>
                    <Column>
                      <h2 className="thai" style={{ color: "white" }}>CONTENT WRITER</h2>
                    </Column>
                    <Column>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>TANAKORN PISNUPOOMI</h4>
                    </Column>
                  </Row>
                </Grid>
                <Grid>
                  <Row columns={2}>
                    <Column>
                      <h2 className="thai" style={{ color: "white" }}>CONTENT REVIEWER</h2>
                    </Column>
                    <Column>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>JEDSADA TANGMONGKHONSUK</h4>
                    </Column>
                  </Row>
                </Grid>
                <Grid>
                  <Row columns={2}>
                    <Column>
                      <h2 className="thai" style={{ color: "white" }}>DESIGNER</h2>
                    </Column>
                    <Column>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>KANJANA PEDNOK</h4>
                    </Column>
                  </Row>
                </Grid>
                <Grid>
                  <Row columns={2}>
                    <Column>
                      <h2 className="thai" style={{ color: "white" }}>MEDIA & GRAPHIC</h2>
                    </Column>
                    <Column>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>SUCHADA NOONPUKDEE</h4>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>JIRAPHON EAKASIN</h4>
                    </Column>
                  </Row>
                </Grid>
                <Grid>
                  <Row columns={2}>
                    <Column>
                      <h2 className="thai" style={{ color: "white" }}>DEVELOPER</h2>
                    </Column>
                    <Column>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>TANAKORN PISNUPOOMI</h4>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>TUANTHUM JITPUKDEE</h4>
                      <h4 className="thai" style={{ color: "white", textAlign: "right" }}>BOONYAWEE KIATSILP</h4>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </div>
    </div>
  )

}

export default withRouteData(About)
