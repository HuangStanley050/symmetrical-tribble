import React, { useState, useContext } from "react";
import Question from "./Question";
import { store } from "../store/store";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Questions = props => {
  const globalState = useContext(store);
  const { trivias } = globalState.state;

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Questions:</h1>
      {trivias.length !== 0
        ? trivias.map((trivia, index) => {
            let answers = [...trivia.incorrect_answers, trivia.correct_answer];
            answers = shuffle(answers);
            return (
              <Question
                key={trivia.question}
                question={trivia.question}
                rightAnswer={trivia.correct_answer}
                data={answers}
                number={index}
              />
            );
          })
        : null}
    </div>
  );
};

export default Questions;
