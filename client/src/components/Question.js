import React, { useState } from "react";
import { Radio, Form } from "semantic-ui-react";

const Question = props => {
  return (
    <div>
      <Form.Field style={{ margin: "1rem 0" }}>
        Question: <h2>{props.data.question}</h2>
      </Form.Field>
    </div>
  );
};

export default Question;
