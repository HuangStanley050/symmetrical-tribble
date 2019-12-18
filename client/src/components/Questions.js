import React, { useState, useContext, useEffect } from "react";
import { Button, Grid } from "semantic-ui-react";
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
  const [score, setScore] = useState(0);
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

  const handleChange = (e, { question, value }) => {
    let tempAnswers = [...answers];
    let indexToReplace = tempAnswers.findIndex(answer => {
      return answer.question === question;
    });
    let newAnswer = { ...tempAnswers[indexToReplace], selected: value };
    tempAnswers.splice(indexToReplace, 1, newAnswer);
    setAnswers([...tempAnswers]);
  };

  const renderQuestions = answers => {
    return answers.map((answer, index) => {
      return (
        <Question
          handleChange={handleChange}
          key={answer.question}
          question={answer.question}
          data={answer.shuffled}
          number={index}
        />
      );
    });
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach(answer => {
      if (answer.rightAnswer === answer.selected) {
        score++;
      }
    });
    console.log(score);
    setScore(score);
  };

  const renderScore = () => {
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
        {score} / {answers.length}
      </h2>
    );
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Questions: </h1>
      {renderScore()}
      {answers.length !== 0 ? renderQuestions(answers) : null}
      {answers.length !== 0 ? (
        <Grid>
          <Grid.Column textAlign="center">
            <Button onClick={calculateScore}>Submit Answer</Button>
          </Grid.Column>
        </Grid>
      ) : null}
    </div>
  );
};

export default Questions;
