import React from "react";
import { Radio, Form, Grid } from "semantic-ui-react";

const decodeHTML = html => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = props => {
  console.log("incorrect answers are: ", props.incorrectAnswers);
  return (
    <Form style={{ border: "1px black solid", marginBottom: "1rem" }}>
      <Form.Field style={{ margin: "1rem 0" }}>
        <h1 style={{ textAlign: "center" }}>Question: {props.number + 1} </h1>
        <h2 style={{ background: "blue", color: "white", textAlign: "center" }}>
          {decodeHTML(props.question)}
        </h2>
      </Form.Field>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            {props.data.map((answer, index) => {
              return (
                <Form.Field
                  key={index}
                  style={{
                    background: props.incorrectAnswers.includes(answer)
                      ? "red"
                      : null
                  }}
                >
                  <Radio
                    disabled={props.submitted}
                    onChange={props.handleChange}
                    checked={props.selection === answer}
                    label={answer}
                    name="radioGroup"
                    value={decodeHTML(answer)}
                    question={props.question}
                  />
                </Form.Field>
              );
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default Question;
