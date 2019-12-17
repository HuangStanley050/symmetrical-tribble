import React, { useState } from "react";
import { Radio, Form } from "semantic-ui-react";

const decodeHTML = html => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = props => {
  const [selectedAnswer, setAnswer] = useState({
    selected: "",
    rightAnswer: props.rightAnswer
  });
  const handleChange = (e, { value }) => {
    setAnswer({ ...selectedAnswer, selected: value });
  };
  console.log(props);
  return (
    <Form>
      <Form.Field style={{ margin: "1rem 0" }}>
        Question: {props.number + 1} <h2>{decodeHTML(props.question)}</h2>
      </Form.Field>
      {props.data.map((answer, index) => {
        return (
          <Form.Field key={index}>
            <Radio
              onChange={handleChange}
              checked={selectedAnswer.selected === answer}
              label={answer}
              name="radioGroup"
              value={answer}
            />
          </Form.Field>
        );
      })}
    </Form>
  );
};

export default Question;
