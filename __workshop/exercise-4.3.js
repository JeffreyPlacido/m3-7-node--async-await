  
const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const answer = await request({
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      headers: { Accept: "application/json" },
      json: true,
    });
    return answer.joke;
  } catch (err) {
    reject(err);
  }
};

getGeekJoke().then((response) => console.log(response));