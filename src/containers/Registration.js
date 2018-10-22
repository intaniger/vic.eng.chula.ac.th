import React, { Component } from 'react'
import { Grid, Icon, Modal, Loader } from 'semantic-ui-react'
import "particles.js";
import axios from 'axios'

import Moon from '../asset/moon.png'
import Form from './Form'
import './style.css'

import ParticleConfig from '../asset/particle_config.json'
import "../lib/illuminated.js";
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
    loading:true,
    formData:{},
    formUserData:{}
  }
  componentWillMount = () => {
    axios.get("https://datanaliez.com/api/v1/form/info/e89bd2e072932eb6ab1b21073b9fc0fd160dace96b8d0cc12346ae5c95e54a9e").then((resp)=>{
      this.setState({
        formData:resp.data.result,
        loading:false,
      })
      console.log(resp.data.result.fieldList)
    }).catch((err)=>{
      console.error(err)
      this.setState({loading:false, formData:null})
    })
  }
  formValidation = (values) => {
    let errors = this.state.formData.fieldList
    .filter((field)=>(field.required))
    .map((field)=>(field.name))
    .reduce((errors, field) => (values[field] ? errors : { ...errors, [field]: 'Required' }), {})
    errors = this.state.formData.fieldList.reduce((errors, field) => {
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
            return { ...errors, [field.name]: 'Incorrect format' }
          }
        }
      }
      return errors
    }, errors)
    return errors
  }
  render = () => {
    let formBody = null
    const now = (new Date()).toISOString()
    if (!this.state.loading) {
      if(false){
        formBody  = <div>
          <Row justify="center" type="flex">
            <Icon name="check circle" style={{fontSize:30, color:"green"}}/>
          </Row>
          <Row justify="center" type="flex" style={{marginTop:10}}>
            <h1>Submission Completed!</h1>
          </Row>
        </div>
      }else if(this.state.formData == null){
        formBody =
        <div>
          <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
            <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
            <strong style={{color:"red", marginLeft:5}}>Form not found.</strong>
          </Row>
        </div>
      }else{
        console.log("form data loaded.")
        if(this.state.formData.disabled){
          formBody=
            <div>
              <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
                <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
                <strong style={{color:"red", marginLeft:5}}>This form was disabled.</strong>
              </Row>
            </div>
        }else if(this.state.formData.registExceed){
          formBody=
            <div>
              <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
                <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
                <strong style={{color:"red", marginLeft:5}}>Sorry, this form has received enough responses</strong>
              </Row>
            </div>
        }else if ((this.state.formData.closeOn.datetime !== undefined) && !(now > this.state.formData.closeOn.datetime[0] && now < this.state.formData.closeOn.datetime[1])){
          formBody=
            <div>
              <Row justify="left" type="flex" align="middle" style={{fontSize:20}}>
                <i className="fas fa-exclamation-circle fa-5x"/> <br/><br/>
                <strong style={{color:"red", marginLeft:5}}>Sorry, this form not available this time</strong>
              </Row>
            </div>
        }else{
          formBody = <Form fieldList={this.state.formData.fieldList} onFormSubmit={this.formSubmission} validate={this.formValidation}/>
        }
      }
    }else{
      formBody  =
      <Modal basic size='small' open>
        <Modal.Content>
          <Loader active inline='centered' />
        </Modal.Content>
      </Modal>
    }
    return(
    <div>
      <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", top: 0, left: 0 }} id="background">
        <div style={{ position: "fixed", width: window.innerWidth, height: RotateRadius, transform: `rotate(${0.2*rotatableAngle}rad) translate(-${0.5 * MoonFactor * R}px, ${firstMoonHoffset}px)`, transformOrigin: "50% 100%" }} id="sun-moon-background">
          <img alt="Moon" src={Moon} style={{ width: `${MoonFactor * R}px` }} />
        </div>
      </div>
      <div id="content" style={{ position: "relative", zIndex: 1000 }}>
        {/* Web Content Here */}
        <Grid columns={16} centered>
          <Column width={14} centered >
            <Grid>
              <Row style={{marginTop:"5vh", marginLeft:"2vw"}}>
                <h1 className="thai h1" style={{color:"white"}}>{this.state.formData.title}</h1>
              </Row>
              <Row style={{marginTop:"5vh", marginLeft:"2vw"}} centered>
                <Column computer={12} mobile={16}>
                  <Row centered>
                    {formBody}
                    {/* <Form style={{width:"100%"}} onSubmit={(val)=>console.log(val.target.value)}>
                      <Form.Input fluid label={<strong className="thai" style={{color:"white", fontSize:20}}>ชื่อ - นามสกุล</strong>}/>
                      <Form.Button>Submit</Form.Button>
                    </Form> */}
                  </Row>
                </Column>
              </Row>
            </Grid>
          </Column>
        </Grid>
      </div>
    </div>
    )
  }
  formSubmission = () => {

  }
  componentDidMount = () => {
    window.particlesJS("background", ParticleConfig)

  }
}

export default Register
