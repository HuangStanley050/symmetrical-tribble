import React from "react";
import { Container } from "semantic-ui-react";
import SelectionMenu from "./SelectionMenu";
import Questions from "./Questions";

const TriviaPage = props => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Trivia Page</h1>
      <SelectionMenu />
      <Questions />
    </Container>
  );
};

export default TriviaPage;
