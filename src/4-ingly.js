/*
This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

export const ingly = (word) => {
  let wordEnd = word.slice(word.length - 3, word.length);

  if (word.length !== 0 && word === word.toUpperCase()) {
    if (wordEnd === "ING") {
      return (word += "LY");
    } else {
      return (word += "ING");
    }
  } else {
    if (wordEnd === "ing") {
      return (word += "ly");
    } else {
      return (word += "ing");
    }
  }
};
