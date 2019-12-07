import axios from "axios";
const apiRoute = `https://opentdb.com/api.php?`;
const category = {
  general: 9,
  books: 10,
  film: 11,
  music: 12,
  musical: 13,
  tv: 14,
  videoGame: 15,
  boardGame: 16,
  scienceNature: 17,
  scienceComputer: 18,
  scienceMath: 19,
  mythology: 20,
  sports: 21,
  geo: 22,
  history: 23,
  politics: 24,
  art: 25,
  celebrities: 26,
  animals: 27,
  vehicle: 28,
  comics: 29,
  scienceGadget: 30,
  animeManga: 31,
  cartoon: 32
};
const Query = {
  hello: () => "Hello world",
  trivias: async (parents, args, ctx, info) => {
    const result = await axios.get(
      `${apiRoute}amount=${args.data.numberQuestions}&category=${
        category[args.data.category]
      }&difficulty=${args.data.difficulty}`
    );

    console.log(result.data);
    return result.data.results;
  }
};

export default Query;
