import React from "react";
import { Container } from "semantic-ui-react";
import SelectionMenu from "./SelectionMenu";
import Questions from "./Questions";

const TriviaPage = props => {
  return (
    <Container style={{ margin: "2rem 0" }}>
      <h1 style={{ textAlign: "center" }}>Trivia Page</h1>
      <SelectionMenu />
      <Questions />
    </Container>
  );
};

export default TriviaPage;
