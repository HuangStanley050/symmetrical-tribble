import React, { useState, useContext } from "react";
import { Radio, Form } from "semantic-ui-react";
import { store } from "../store/store";
import * as actionType from "../store/actionTypes";

const decodeHTML = html => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = props => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [selectedAnswer, setAnswer] = useState({
    selected: "",
    rightAnswer: props.rightAnswer
  });
  const handleChange = (e, { value }) => {
    setAnswer({ ...selectedAnswer, selected: value });
    if (selectedAnswer.selected === selectedAnswer.rightAnswer) {
      dispatch({ type: actionType.SET_RIGHT_POINT });
    } else {
      dispatch({ type: actionType.SET_WRONG_POINT });
    }
  };

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
