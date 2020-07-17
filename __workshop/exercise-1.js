// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject(console.log("Big Rip"));
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.sort())
      : reject("Error: Something went wrong with sorting words.");
  });
};

const textTransform = async (array) => {
  const capLetters = await makeAllCaps(array);
  const sortingHat = await sortWords(capLetters);
  return sortingHat;
};

textTransform(["cucumber", "tomatos", "avocado"]).then((response) => {
  console.log(response);
});
textTransform(["cucumber", 23, "bacon"]).then((response) => {
  console.log(response);
});