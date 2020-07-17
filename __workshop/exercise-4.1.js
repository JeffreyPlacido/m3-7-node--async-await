const request = require("request-promise");
const { response } = require("express");

const dadJoke = new Promise((resolve, reject) => {
try {
    const answer = request({
    uri: "https://icanhazdadjoke.com",
    headers: { Accept: "application/json" },
    json: true,
    }).then((response) => {
    resolve(response.joke);
    });
} catch (err) {
    reject(err);
}
});

dadJoke.then((data) => console.log(data));