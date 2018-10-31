import React, { Component } from 'react'
import { Form, Checkbox, Grid, Radio, Message } from 'semantic-ui-react';

const Row = Grid.Row
const Column = Grid.Column
const facultyCode = {
  '21': 'วิศวกรรมศาสตร์',
  '22': 'อักษรศาสตร์',
  '23': 'วิทยาศาสตร์',
  '24': 'รัฐศาสตร์',
  '25': 'สถาปัตยกรรมศาสตร์',
  '26': 'พาณิชยศาสตร์และการบัญชี',
  '27': 'ครุศาสตร์',
  '28': 'นิเทศศาสตร์',
  '29': 'เศรษฐศาสตร์',
  '30': 'แพทยศาสตร์',
  '31': 'สัตวแพทยศาสตร์',
  '32': 'ทันตแพทยศาสตร์',
  '33': 'เภสัชศาสตร์',
  '34': 'นิติศาสตร์',
  '35': 'ศิลปกรรมศาสตร์',
  '36': 'พยาบาลศาสตร์',
  '37': 'สหเวชศาสตร์',
  '38': 'จิตวิทยา',
  '39': 'วิทยาศาสตร์การกีฬา'
}
class Register extends Component {
  state = {
    formValidation:{}
  }
  onTextChange = (name, value) => {
    if(name === "studentID"){
      let calculatedYear = 62 - value.slice(0,2);
      this.setState({
        studentID:value,
        year:(calculatedYear > 0 && calculatedYear < 13)?calculatedYear:"0",
        faculty:facultyCode[value.slice(8,10)]||"",
        formValidation:{
          ...this.state.formValidation,
          year:(calculatedYear > 0 && calculatedYear < 13)?undefined:this.state.formValidation.year,
          faculty:facultyCode[value.slice(8,10)]?undefined:this.state.formValidation.faculty,
          [name]:undefined
        }
      })
    }else{
      this.setState({
        [name]:value,
        formValidation:{
          ...this.state.formValidation,
          [name]:undefined
        }
      })
    }
  }
  componentWillMount = () => {
    this.props.fieldList.forEach((field) => {
      this.setState({
        [field.name]: (() => {
          switch (field.type) {
            case "string":
            case "lg_string":
            case "choice":
              return ""
            case "checkbox":
              return []
            case "integer":
            case "number":
              return ""
            default:
              console.log("พ่อมึงตาย")
          }
        })()
      })
    })
  }
  render = () => (
    <div>

      <Form style={{ width: "100%" }} onSubmit={() => {
        if(Object.keys(this.props.validate(this.state)).length === 0){
          const {formValidation, ...data} = this.state
          this.props.onFormSubmit(data)
        }
        this.setState({
          formValidation:this.props.validate(this.state)
        })
      }}>
        {
          this.props.fieldList.map((field) => {
            if (field.type === "string") {
              return <Form.Input
                  disabled={/faculty/.test(field.name)}
                  value={this.state[field.name]} onChange={(e, {value}) => this.onTextChange(field.name, value)}
                  className="thai"  style={{ margin: "1px 0"}}
                  placeholder={field.desc}
                  label={<strong className="thai" style={{ color: "white", fontSize: 20 }}>
                    {field.label}
                    <strong style={{color:"red"}}>&nbsp;{this.state.formValidation[field.name]}</strong>
                  </strong>}
                />
            } else if (field.type === "lg_string") {
              return <Form.TextArea
                  value={this.state[field.name]} onChange={(e, {value}) => this.onTextChange(field.name, value)}
                  className="thai" style={{ margin: "1px 0" }}
                  placeholder={field.desc}
                  label={<strong className="thai" style={{ color: "white", fontSize: 20 }}>
                    {field.label}
                    <strong style={{color:"red"}}>&nbsp;{this.state.formValidation[field.name]}</strong>
                  </strong>}
                />
            } else if (field.type === "choice") {
              return <Grid style={{ width: "100%", margin: "3px 0" }}>
                <Row columns={16}>
                  <Column computer={4} mobile={16}>
                    <strong className="thai" style={{ color: "white", fontSize: 20 }}>
                      {field.label}
                      <strong style={{color:"red"}}>&nbsp;{this.state.formValidation[field.name]}</strong>
                    </strong>
                  </Column>
                  <Column computer={8} mobile={16}>
                    <Form.Group>
                      {
                        field.option.map((option) => (
                          <Form.Field>
                            <Row>
                              <Radio
                                name={field.name}
                                label={<label className="thai" style={{ color: "white" }}>
                                  {option.label}
                                </label>}
                                value={option.value}
                                checked={this.state[field.name] === option.value}
                                onChange={(e, {value})=>this.setState({
                                  [field.name]:value,
                                  formValidation:{
                                    ...this.state.formValidation,
                                    [field.name]:undefined
                                  }
                                })}
                              />
                            </Row>
                          </Form.Field>
                        ))
                      }
                    </Form.Group>
                  </Column>
                </Row>
              </Grid>
            } else if (field.type === "checkbox") {
              return <Grid style={{ width: "100%", margin: "3px 0" }}>
                <Row columns={16}>
                  <Column computer={4} mobile={16}>
                    <strong className="thai" style={{ color: "white", fontSize: 20 }}>
                      {field.label}
                      <strong style={{color:"red"}}>&nbsp;{this.state.formValidation[field.name]}</strong>
                    </strong>
                  </Column>
                  <Column computer={8} mobile={16}>
                    <Form.Group>
                      {
                        field.option.map((option) => (
                          <Form.Field
                            control={Checkbox}
                            value={option.value}
                            checked={this.state[field.name].includes(option.value)}
                            onChange={()=>this.setState({
                              [field.name]:this.state[field.name].includes(option.value)?
                                this.state[field.name].filter((val)=>(val!==option.value))
                                :this.state[field.name].concat(option.value),
                              formValidation:{
                                ...this.state.formValidation,
                                [field.name]:undefined
                              }
                            })}
                            label={<label className="thai" style={{ color: "white" }}>{option.label}</label>} />
                        ))
                      }
                    </Form.Group>
                  </Column>
                </Row>
              </Grid>
            } else if (field.type === "integer" || field.type === "number") {
              return <Form.Input
                disabled={/year/.test(field.name)}
                value={this.state[field.name]} onChange={(e, {value}) => this.onTextChange(field.name, value)}
                placeholder={field.desc}
                label={<strong className="thai" style={{ color: "white", fontSize: 20 }}>
                  {field.label}
                  <strong style={{color:"red"}}>&nbsp;{this.state.formValidation[field.name]}</strong>
                </strong>} />
            }
            return null
          })
        }
        <Form.Button>ส่งใบสมัคร</Form.Button>
      </Form>
      {
        Object.keys(this.state.formValidation).filter((key)=>this.state.formValidation[key]).length === 0?null:
          <Message error>
            <Message.List>
              {
                Object.keys(this.state.formValidation).filter((key)=>this.state.formValidation[key]).map((error)=>(
                  <Message.Item>Field "{error}" : "{this.state.formValidation[error]}"</Message.Item>
                ))
              }
            </Message.List>
          </Message>
      }
    </div>
  )
}
export default (props) => {
  if (window.cachedFormBodyJSON === JSON.stringify(props.fieldList))
    return window.cachedFormBodyComp
  window.cachedFormBodyComp = <Register {...props} />
  window.cachedFormBodyJSON = JSON.stringify(props.fieldList)
  return window.cachedFormBodyComp
}