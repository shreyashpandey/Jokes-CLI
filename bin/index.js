#! /usr/bin/env node
const prompt = require("prompt");
const jokes = require("../jokes.json");
exports.dev = () => {
  console.log("Here I have published my first package", process.argv);
};

let fun = (arg) => {
  console.log("Hey buddy", arg);
};
fun(process.argv);
prompt.get(["Name", "Joke_Type"], function (err, result) {
  //
  // Log the results.
  //
  let res=[];
  console.log("Command-line input received:");
  console.log("  Name To Be Used In the Joke " + result.Name);
  console.log("  Joke Type: " + result.Joke_Type);
  const reqJokes = jokes.value;
  reqJokes.map((rJ) => {
    rJ.categories.map((exp) => {
      if (exp == result.Joke_Type) {
        let mj = rJ.joke;
        mj=mj.replace("Chuck Norris", result.Name);
        res.push(mj);
      }
    });
  });
  console.log("  Joke: ",res);
});
