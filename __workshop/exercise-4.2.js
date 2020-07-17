const request = require("request-promise");
const { response } = require("express");

const getTronaldDumpQuote = async () => {
  try {
    const answer = await request({
      uri: "https://www.tronalddump.io/random/quote",
      headers: { Accept: "application/json" },
      json: true,
    });
    return answer.value;
  } catch (err) {
    reject(err);
  }
};

getTronaldDumpQuote().then((response) => {
  console.log(response);
});