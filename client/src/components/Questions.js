import React, { useState, useContext } from "react";
import Question from "./Question";
import { store } from "../store/store";

const Questions = props => {
  const globalState = useContext(store);
  const { trivias } = globalState.state;
  console.log(trivias);
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Questions:</h1>
      {trivias.length !== 0
        ? trivias.map((trivia, index) => (
            <Question key={trivia.question} data={trivia} number={index} />
          ))
        : null}
    </div>
  );
};

export default Questions;
