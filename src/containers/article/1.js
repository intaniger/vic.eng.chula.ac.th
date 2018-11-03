import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { withRouteData } from 'react-static'
import "particles.js";

import Moon from '../../asset/moon.png'

import Image1 from '../../asset/article/1/image_1.jpeg'
import BigImage from '../../asset/article/1/big_image.jpg'
import SmallImage from '../../asset/article/1/small_image.jpg'

import '../style.css'

import ParticleConfig from '../../asset/particle_config.json'

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
// https://datanaliez.com/api/v1/form/info/e89bd2e072932eb6ab1b21073b9fc0fd160dace96b8d0cc12346ae5c95e54a9e
class Register extends Component {
  render = () => (
    <div>
      <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", top: 0, left: 0 }} id="background">
        <div style={{ position: "fixed", width: window.innerWidth, height: RotateRadius, transform: `rotate(${0.2 * rotatableAngle}rad) translate(-${0.5 * MoonFactor * R}px, ${firstMoonHoffset}px)`, transformOrigin: "50% 100%" }} id="sun-moon-background">
          <img alt="Moon" src={Moon} style={{ width: `${MoonFactor * R}px` }} />
        </div>
      </div>
      <div id="content" style={{ position: "relative", zIndex: 1000, ...this.props.animationState }}>
        {/* Web Content Here */}
        <Grid columns={16} centered>
          <Column width={14}>
            <Grid>
              <Row>
                <h1 className="thai" style={{ color: "white", marginTop: "5vh" }}>
                  ข้อมูลการสำรวจชุมชน หมู่บ้านนาแดง ตำบลสันทะ อำเภอนาน้อย จังหวัดน่าน
                </h1>
              </Row>
              <Row style={{ marginTop: "3vh", marginLeft: "2vw" }}>
                <p className="thai" style={{ color: "white", fontSize: 22 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;จากการลงสำรวจพื้นที่และเก็บข้อมูลปัญหาของชุมชนตำบลสันทะ อำเภอนาน้อย จังหวัดน่าน เมื่อ กันยายน 2561 พบว่า
                  ทางชุมชนมีปัญหาปริมาณน้ำที่ไม่เพียงพอต่อการอุปโภคในช่วงหน้าแล้ง โดยมีสาเหตุมาจากอ่างเก็บน้ำ ซึ่งเป็นแหล่งเก็บน้ำสำคัญที่ชาวบ้านใช้งานในช่วงหน้าแล้ง
                  มีตาน้ำเข้าน้อย ประกอบกับมีสภาพผุพังเสื่อมโทรม เสียหายหลายจุด ส่งผลให้เกิดปัญหาอ่างเก็บน้ำแห้ง ไม่สามารถสูบน้ำขึ้นมาใช้งานได้หลายครั้ง
                  ซึ่งทุกครั้งที่เกิดปัญหา ต้องใช้ระยะเวลาหลายวันเพื่อให้อ่างเก็บน้ำมีปริมาณน้ำเพียงพอที่จะสูบขึ้นมาใช้อีกครั้ง
                </p>
              </Row>
              <Row centered style={{ marginTop: "5vh", marginLeft: "2vw" }}>
                <Column computer={10} mobile={16}>
                  <Image centered src={Image1} alt="ภาพแสดงตำแหน่งของฝายและระบบส่งน้ำเข้าสู่ชุมชน" />
                </Column>
              </Row>
              <Row style={{ marginTop: "5vh", marginLeft: "2vw" }}>
                <p className="thai" style={{ color: "white", fontSize: 22 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;ทางชุมชนจึงมีแนวคิดที่จะสร้างฝายน้ำล้นในธารน้ำใกล้เคียงกับชุมชน เพื่อการผันน้ำเข้าระบบเพื่อการอุปโภค ให้มีปริมาณเพียงพอตลอดการใช้งานในช่วงหน้าแล้ง
                  ประกอบด้วย ฝายน้ำล้น คสล. หน้ากว้าง 6.0 เมตร ที่ลำธารที่ 1, ฝายน้ำล้น คสล. หน้ากว้าง 3.5 เมตร ที่ลำธารที่ 2 รวมถึง วางระบบส่งน้ำไปยังอ่างเก็บน้ำ และตะบันน้ำเข้าสู่แท้งค์น้ำเพื่อจ่ายน้ำเข้าสู่ชุมชนต่อไป
                </p>
              </Row>
              <Row style={{ marginLeft: "2vw" }}>
                <Column computer={8} mobile={16} tablet={16} style={{ marginTop: "5vh" }}>
                  <h1 className="thai h1" style={{ color: "white" }}>
                    ภาพบริเวณฝายที่ 1
                    <Image centered src={BigImage} size="huge" />
                  </h1>
                </Column>
                <Column computer={8} mobile={16} tablet={16} style={{ marginTop: "5vh" }}>
                  <h1 className="thai h1" style={{ color: "white" }}>
                    ภาพบริเวณฝายที่ 2
                    <Image centered src={SmallImage} size="huge" />
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
    window.particlesJS("background", ParticleConfig)
  }
}

export default withRouteData(Register)
