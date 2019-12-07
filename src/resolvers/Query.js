const Query = {
  hello: () => "Hello world",
  trivias: (parents, args, ctx, info) => {
    return [
      {
        category: args.data.category,
        difficulty: args.data.difficulty,
        question: "What is your name?",
        correctAnswer: "Jin Kazama",
        incorrectAnswers: [{ wrong: "1" }, { wrong: "2" }, { wrong: "2" }]
      },
      {
        category: args.data.category,
        difficulty: args.data.difficulty,
        question: "What is your age?",
        correctAnswer: "Jin Kazama",
        incorrectAnswers: [{ wrong: "1" }, { wrong: "2" }, { wrong: "2" }]
      }
    ];
  }
};

export default Query;
