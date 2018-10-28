
import React, { Component } from 'react'
import { withRouteData } from 'react-static';
import ParticleConfig from '../asset/particle_config.json'
import "particles.js";

import Moon from '../asset/moon.png'
import { Grid, Card } from 'semantic-ui-react';
import Contact from './ContactCard';

import PresidentImage from '../asset/president.jpg'
import FinanceImage from '../asset/finance.jpg'
import SecretaryImage from '../asset/secretary.jpg'
import PlaceImage from '../asset/place.jpg'
import RegistrarImage from '../asset/registrar.jpg'
import EvaluatorImage from '../asset/evaluation.jpg'
import WelfareImage from '../asset/welfare.jpg'


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
              <Column width={14} only="computer tablet">
                <Grid centered>
                  <Row columns={1}>
                    <Column>
                      <Contact name="ไทเกอร์ #2 วิศวฯ" position="ประธานค่าย" avatar={PresidentImage} line="intaniger" tel="098-941-7565" />
                    </Column>
                  </Row>
                  <Row columns={2}>
                    <Column>
                      <Contact name="กอล์ฟ #2 วิศวฯ" position="เหรัญญิก" avatar={FinanceImage} />
                    </Column>
                    <Column>
                      <Contact name="เน #2 วิศวฯ" position="เลขานุการ" avatar={SecretaryImage} line="Ne7404" tel="099-762-6458" />
                    </Column>
                  </Row>
                  <Row columns={4}>
                    <Column>
                      <Contact name="มิว #2 วิศวฯ" position="รองประธานฝ่ายสถานที่" avatar={PlaceImage} />
                    </Column>
                    <Column>
                      <Contact name="นะโม #2 วิศวฯ" position="รองประธานฝ่ายทะเบียน" avatar={RegistrarImage} line="namomiok" tel="087-559-4817" />
                    </Column>
                    <Column>
                      <Contact name="โอ๊ค #2 วิศวฯ" position="รองประธานฝ่ายประเมินผล" avatar={EvaluatorImage} />
                    </Column>
                    <Column>
                      <Contact name="อู๋ #2 วิศวฯ" position="รองประธานฝ่ายสวัสดิการ" avatar={WelfareImage} />
                    </Column>
                  </Row>
                </Grid>
              </Column>
              <Column width={14} only="mobile">
                <Grid centered>
                  <Row>
                    <Column style={{ overflowY: "scroll", margin: "0 auto" }}>
                      <Contact name="ไทเกอร์ #2 วิศวฯ" position="ประธานค่าย" avatar={PresidentImage} line="intaniger" tel="098-941-7565" />
                    </Column>
                  </Row>
                  <Row style={{marginTop:"20vh"}}>
                    <h1 className="thai" style={{color:"white"}}>เหรัญญิก และ เลขานุการ</h1>
                  </Row>
                  <Row>
                    <Column style={{ overflowY: "scroll", margin: "0 auto" }}>
                      <Card.Group style={{ height: 600 }} itemsPerRow={2} stackable={false}>
                        <Contact name="กอล์ฟ #2 วิศวฯ" position="เหรัญญิก" avatar={FinanceImage} />
                        <Contact name="เน #2 วิศวฯ" position="เลขานุการ" avatar={SecretaryImage} line="Ne7404" tel="099-762-6458" />
                      </Card.Group>
                    </Column>
                  </Row>
                  <Row style={{marginTop:"20vh"}}>
                    <h1 className="thai" style={{color:"white"}}>รองประธานฝ่ายต่างๆ</h1>
                  </Row>
                  <Row>
                    <Column style={{ overflowY: "scroll", margin: "0 auto" }}>
                      <Card.Group style={{ height: 600 }} itemsPerRow={4} stackable={false}>
                        <Contact name="มิว #2 วิศวฯ" position="รองประธานฝ่ายสถานที่" avatar={PlaceImage} />
                        <Contact name="นะโม #2 วิศวฯ" position="รองประธานฝ่ายทะเบียน" avatar={RegistrarImage} line="namomiok" tel="087-559-4817" />
                        <Contact name="โอ๊ค #2 วิศวฯ" position="รองประธานฝ่ายประเมินผล" avatar={EvaluatorImage} />
                        <Contact name="อู๋ #2 วิศวฯ" position="รองประธานฝ่ายสวัสดิการ" avatar={WelfareImage} />
                      </Card.Group>
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
