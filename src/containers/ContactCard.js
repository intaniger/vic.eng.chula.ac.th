import React from "react";
import { Card, Image } from "semantic-ui-react";

export default ({avatar, name, position, tel, line}) => (
  <Card style={{width:290}} centered>
    <Image size="medium"  centered src={avatar}/>
    <Card.Content>
      <Card.Header><span className='thai'>{name}</span></Card.Header>
      <Card.Description>
        {position}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <p className="thai small ">
          {tel?`Tel: ${tel}`:null}<br/>
          {line?`Line: @${line}`:null}
        </p>
    </Card.Content>
  </Card>
)