import React, { useState } from "react";
import { Button, Checkbox, Form, Dropdown } from "semantic-ui-react";

const difficulty = [
  { key: "Difficult", text: "Difficult", value: "difficult" },
  { key: "Medium", text: "Medium", value: "medium" },
  { key: "Easy", text: "Easy", value: "easy" }
];

const numberQuestions = [
  { key: "1", text: "1", value: 1 },
  { key: "2", text: "2", value: 2 },
  { key: "3", text: "3", value: 3 },
  { key: "4", text: "4", value: 4 },
  { key: "5", text: "5", value: 5 },
  { key: "6", text: "6", value: 6 },
  { key: "7", text: "7", value: 7 },
  { key: "8", text: "8", value: 8 },
  { key: "9", text: "9", value: 9 },
  { key: "10", text: "10", value: 10 }
];

const category = [
  { key: 9, text: "General Knowledge", value: "general" },
  { key: 10, text: "Entertainment: Books", value: "books" },
  { key: 11, text: "Entertainment: Film", value: "film" },
  { key: 12, text: "Entertainment: Music", value: "music" },
  { key: 13, text: "Entertainment: Musicals & Theatres", value: "musical" },
  { key: 14, text: "Entertainment: Television", value: "tv" },
  { key: 15, text: "Entertainment: Video Games", value: "videoGame" },
  { key: 16, text: "Entertainment: Board Games", value: "boardGame" },
  { key: 17, text: "Science & Nature", value: "scienceNature" },
  { key: 18, text: "Science: Computers", value: "scienceComputer" },
  { key: 19, text: "Science: Mathematics", value: "scienceMath" },
  { key: 20, text: "Mythology", value: "mythology" },
  { key: 21, text: "Sports", value: "sports" },
  { key: 22, text: "Geography", value: "geo" },
  { key: 23, text: "History", value: "history" },
  { key: 24, text: "Politics", value: "politics" },
  { key: 25, text: "Art", value: "art" },
  { key: 26, text: "Celebrities", value: "celebrities" },
  { key: 27, text: "Animals", value: "animals" },
  { key: 28, text: "Vehicles", value: "vehicle" },
  { key: 29, text: "Entertainment: Comics", value: "comics" },
  { key: 30, text: "Science: Gadgets", value: "scienceGadget" },
  {
    key: 31,
    text: "Entertainment: Japanese Anime & Manga",
    value: "animeManga"
  },
  { key: 32, text: "Entertainment: Cartoon & Animations", value: "cartoon" }
];

const SelectionMenu = props => {
  const [trivia, setTrivia] = useState({
    difficulty: "",
    category: "",
    questions: 0
  });
  const formStyle = {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-between"
  };
  const handleChange = (e, result) => {
    const { name, value } = result;

    setTrivia({ ...trivia, [name]: value });
  };
  return (
    <div style={formStyle}>
      <Dropdown
        name="difficulty"
        onChange={handleChange}
        placeholder="Select Difficulty"
        fluid
        selection
        options={difficulty}
      />
      <Dropdown
        name="category"
        onChange={handleChange}
        placeholder="Select Category"
        fluid
        selection
        options={category}
      />
      <Dropdown
        name="questions"
        onChange={handleChange}
        placeholder="Number of Questions"
        fluid
        selection
        options={numberQuestions}
      />
    </div>
  );
};

export default SelectionMenu;
