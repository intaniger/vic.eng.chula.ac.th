import React, { Component } from 'react'
import { Form, Input, Checkbox } from 'semantic-ui-react';

class Register extends Component {
  render = () => (
    <Form style={{width:"100%"}} onSubmit={(val)=>console.log(val.target.value)}>
      {
        this.props.fieldList.map((field) => {
          if(field.type === "string"){
            return <Form.Input placeholder={field.desc} fluid label={<strong className="thai" style={{color:"white", fontSize:20}}>{field.label}</strong>}/>
          }else if(field.type === "lg_string"){
            return <Form.TextArea placeholder={field.desc} fluid  label={<strong className="thai" style={{color:"white", fontSize:20}}>{field.label}</strong>}/>
          }else if(field.type === "choice"){
            return <Form.Radio fluid label={<strong className="thai" style={{color:"white", fontSize:20}}>{field.label}</strong>}/>
          }else if(field.type === "checkbox"){
            // return <Form.Checkbox fluid label={<strong className="thai" style={{color:"white", fontSize:20}}>{field.label}</strong>}/>
            return <Form.Field>
              <strong className="thai" style={{color:"white", fontSize:20}}>{field.label}</strong>
              {
                field.option.map((option)=>(<Checkbox label={option.label} name={field.name} radio/>))
              }
            </Form.Field>
          }else if(field.type === "integer" || field.type === "number"){
            return <Form.Input placeholder={field.desc} fluid label={<strong className="thai" style={{color:"white", fontSize:20}}>{field.label}</strong>}/>
          }
          return null
        })
      }
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}
export default Register