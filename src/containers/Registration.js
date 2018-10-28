import React, { Component } from 'react'
import { Grid, Icon, Modal, Loader, Message } from 'semantic-ui-react'
import { withRouteData } from 'react-static'
import "particles.js";
import axios from 'axios'

import Moon from '../asset/moon.png'
import Form from './Form'
import './style.css'

import ParticleConfig from '../asset/particle_config.json'
import Axios from 'axios';
/* import { white } from '../../node_modules/ansi-colors'; */

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
  state = {
    formUserData:{},
    negativeMessage:null
  }
  componentWillMount = () => {
    const now = (new Date()).toISOString()
    if(false){
      this.state.formBody  = <div>
        <Row justify="center" type="flex">
          <Icon name="check circle" style={{fontSize:30, color:"green"}}/>
        </Row>
        <Row justify="center" type="flex" style={{marginTop:10}}>
          <h1>Submission Completed!</h1>
        </Row>
      </div>
    }else if(this.props.formData == null){
      this.state.formBody =
      <div>
        <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
          <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
          <strong style={{color:"red", marginLeft:5}}>Form not found.</strong>
        </Row>
      </div>
    }else{
      console.log("form data loaded.")
      if(this.props.formData.disabled){
        this.state.formBody=
          <div>
            <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
              <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
              <strong style={{color:"red", marginLeft:5}}>This form was disabled.</strong>
            </Row>
          </div>
      }else if(this.props.formData.registExceed){
        this.state.formBody=
          <div>
            <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
              <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
              <strong style={{color:"red", marginLeft:5}}>Sorry, this form has received enough responses</strong>
            </Row>
          </div>
      }else if ((this.props.formData.closeOn.datetime !== undefined) && !(now > this.props.formData.closeOn.datetime[0] && now < this.props.formData.closeOn.datetime[1])){
        this.state.formBody=
          <div>
            <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
              <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
              <strong style={{color:"red", marginLeft:5}}>Sorry, this form not available this time</strong>
            </Row>
          </div>
      }else{
        this.state.formBody = <Form fieldList={this.props.formData.fieldList} onFormSubmit={this.formSubmission} validate={this.formValidation}/>
      }
    }
  }
  formValidation = (values) => {
    let errors = this.props.formData.fieldList
    .filter((field)=>(field.required))
    .map((field)=>(field.name))
    .reduce((errors, field) => ((values[field] instanceof Array ? values[field].length : values[field]) ? errors : { ...errors, [field]: 'ต้องระบุ' }), {})
    errors = this.props.formData.fieldList.reduce((errors, field) => {
      if(values[field.name]){
        if(field.type == "integer"){
          if(values[field.name] != parseInt(values[field.name])){
            return { ...errors, [field.name]: 'Must be integer' }
          }
          values[field.name] = parseInt(values[field.name])
        }
        if(field.type == "number"){
          if(values[field.name] != parseFloat(values[field.name])){
            return { ...errors, [field.name]: 'Must be decimal number' }
          }
          values[field.name] = parseFloat(values[field.name])
        }
        if(field.validate){
          const validator = new RegExp(field.validate)
          if(!validator.test(values[field.name])){
            return { ...errors, [field.name]: 'รูปแบบไม่ถูกต้อง' }
          }
        }
      }
      return errors
    }, errors)
    return errors
  }
  formSubmission = (data) => {
    Axios.post(`http://datanaliez.com/api/v1/form/submit/${this.props.formID}`,data).then(()=>{
      alert("การส่งใบสมัครเสร็จสมบูรณ์")
      this.props.history.push("/")
    }).catch((error)=>{
      alert(`การส่งใบสมัครล้มเหลว กรุณาลองใหม่อีกครั้ง ${error}`)
    })
  }
  render = () => (
    <div>
      <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", top: 0, left: 0 }} id="background">
        <div style={{ position: "fixed", width: window.innerWidth, height: RotateRadius, transform: `rotate(${0.2*rotatableAngle}rad) translate(-${0.5 * MoonFactor * R}px, ${firstMoonHoffset}px)`, transformOrigin: "50% 100%" }} id="sun-moon-background">
          <img alt="Moon" src={Moon} style={{ width: `${MoonFactor * R}px` }} />
        </div>
      </div>
      <div id="content" style={{ position: "relative", zIndex: 1000, ...this.props.animationState }}>
        {/* Web Content Here */}
        <Grid columns={16} centered>
          <Column width={14}>
            <Grid>
              <Row style={{marginTop:"5vh", marginLeft:"2vw"}}>
                <h1 className="thai h1" style={{color:"white"}}>{this.props.formData.title}</h1>
              </Row>
              <Row style={{marginTop:"1vh", marginLeft:"2vw"}} centered>
                <Column computer={12} mobile={16}>
                  <Row centered>
                    {this.state.formBody}
                  </Row>
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
