import React, { useState, useContext, useEffect } from "react";
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
  const [answers, setAnswers] = useState([]);
  const { trivias } = globalState.state;

  useEffect(() => {
    let tempArray = [];
    tempArray = trivias.map((trivia, index) => {
      return {
        question: trivia.question,
        rightAnswer: trivia.correct_answer,
        selected: "",
        wrongAnswers: trivia.incorrect_answers,
        shuffled: shuffle([...trivia.incorrect_answers, trivia.correct_answer])
      };
    });
    setAnswers(tempArray);
  }, [trivias]);
  const renderQuestions = answers => {
    //console.log(answers);
    console.log("executing renderQuestions");
    answers.map((answer, index) => {
      console.log(answer);
      return (
        <Question
          key={answer.question}
          question={answer.question}
          data={answer.shuffled}
          number={index}
        />
      );
    });
  };
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Questions:</h1>
      {answers.length !== 0 ? renderQuestions(answers) : null}
    </div>
  );
};

export default Questions;

/*

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
 */
