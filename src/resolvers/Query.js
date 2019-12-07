const Query = {
  hello: () => "Hello world",
  trivias: (parents, args, ctx, info) => {
    console.log(args.data);
  }
};

export default Query;
