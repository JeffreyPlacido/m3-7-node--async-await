// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");
const { response } = require("express");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = await JSON.parse(response);
    console.log(issLocation);
    let newKey = issLocation.iss_position;
    console.log(newKey.longitude, newKey.latitude);
    return {
      lat: newKey.latitude,
      lng: newKey.longitude,
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

getIssPosition().then((response) => {
  console.log(response);
});