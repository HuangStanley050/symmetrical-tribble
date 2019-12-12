import React, { useState } from "react";
import { Button, Checkbox, Form, Dropdown } from "semantic-ui-react";

const difficulty = [
  { key: "Difficult", text: "Difficult", value: "Difficult" },
  { key: "Medium", text: "Medium", value: "Medium" },
  { key: "Easy", text: "Easy", value: "East" }
];

const category = [
  { key: 9, text: "General Knowledge", value: "" },
  { key: 10, text: "Entertainment: Books", value: "" },
  { key: 11, text: "Entertainment: Film", value: "" },
  { key: 12, text: "Entertainment: Music", value: "" },
  { key: 13, text: "Entertainment: Musicals & Theatres", value: "" },
  { key: 14, text: "Entertainment: Television", value: "" },
  { key: 15, text: "Entertainment: Video Games", value: "" },
  { key: 16, text: "Entertainment: Board Games", value: "" },
  { key: 17, text: "Science & Nature", value: "" },
  { key: 18, text: "Science: Computers", value: "" },
  { key: 19, text: "Science: Mathematics", value: "" },
  { key: 20, text: "Mythology", value: "" },
  { key: 21, text: "Sports", value: "" },
  { key: 22, text: "Geography", value: "" },
  { key: 23, text: "History", value: "" },
  { key: 24, text: "Politics", value: "" },
  { key: 25, text: "Art", value: "" },
  { key: 26, text: "Celebrities", value: "" },
  { key: 27, text: "Animals", value: "" },
  { key: 28, text: "Vehicles", value: "" },
  { key: 29, text: "Entertainment: Comics", value: "" },
  { key: 30, text: "Science: Gadgets", value: "" },
  { key: 31, text: "Entertainment: Japanese Anime & Manga", value: "" },
  { key: 32, text: "Entertainment: Cartoon & Animations", value: "" }
];

const SelectionMenu = props => {
  const formStyle = {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-between"
  };
  console.log(category);
  return (
    <div style={formStyle}>
      <Dropdown
        placeholder="Select Difficulty"
        fluid
        selection
        options={difficulty}
      />
      <Dropdown
        placeholder="Select Category"
        fluid
        selection
        options={category}
      />
    </div>
  );
};

export default SelectionMenu;
