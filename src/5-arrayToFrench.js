/**
 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export const arrayToFrench = (array) => {
  let words = "";
  if (array.length === 1) {
    return array[0];
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        words = array[i];
      } else if (i < array.length - 1) {
        words = words + ", " + array[i];
      } else {
        words = words + " et " + array[i];
      }
    }
  }
  return words;
};
