import React, { useState } from "react";
import { Radio, Form } from "semantic-ui-react";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const decodeHTML = html => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = props => {
  let answers = [...props.data.incorrect_answers, props.data.correct_answer];
  const [selectedAnswer, setAnswer] = useState("");
  const handleChange = (e, { value }) => {
    console.log(value);
    setAnswer(value);
  };
  answers = shuffle(answers);
  // let correctAnswer = props.data.correct_answer;
  // if (props.data) {
  //   answers = props.data.incorrect_answers;
  //   answers.push(props.data.correct_answer);
  //   answers = shuffle(answers);
  // }
  return (
    <Form>
      <Form.Field style={{ margin: "1rem 0" }}>
        Question: {props.number + 1} <h2>{decodeHTML(props.data.question)}</h2>
      </Form.Field>
      {answers.map((answer, index) => {
        return (
          <Form.Field key={index}>
            <Radio
              onChange={handleChange}
              checked={selectedAnswer === answer}
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
