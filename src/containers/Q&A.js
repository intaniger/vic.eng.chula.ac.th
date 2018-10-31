import React from "react";
import { Reveal } from "semantic-ui-react";

export default ({Question, Answer}) => (
  <Reveal animated="move" instant>
    <Reveal.Content visible style={{width:"100%"}}>
      <div className="FAQ-Q">
        <h1 className="thai FAQ-Q-Text">{Question}</h1>
      </div>
    </Reveal.Content>
    <Reveal.Content hidden style={{width:"100%"}}>
      <div className="FAQ-A">
        {Answer}
      </div>
    </Reveal.Content>
  </Reveal>
)