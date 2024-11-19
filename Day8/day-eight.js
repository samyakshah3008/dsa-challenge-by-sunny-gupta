/**
 * @param {number[]} ratings
 * @return {number}
 */

function candyBruteForce(ratings) {
  const newArrayLeft = [];
  newArrayLeft[0] = 1;
  newArrayLeft[ratings.length - 1] = 1;

  // left pass;

  for (let i = 1; i < ratings.length - 1; i++) {
    if (ratings[i] > ratings[i - 1]) {
      newArrayLeft[i] = newArrayLeft[i - 1] + 1;
    } else {
      newArrayLeft[i] = 1;
    }
  }

  const newArrayRight = [];
  newArrayRight[0] = 1;
  newArrayRight[ratings.length - 1] = 1;

  // right pass;

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      newArrayRight[i] = newArrayRight[i + 1] + 1;
    } else {
      newArrayRight[i] = 1;
    }
  }

  let finalArray = [];

  for (let i = 0; i < ratings.length; i++) {
    finalArray.push(Math.max(newArrayLeft[i], newArrayRight[i]));
  }

  return finalArray.reduce((acc, curr) => acc + curr, 0);
}

let ratings = [1, 0, 2];
// let ratings = [1, 2, 2];
ratings = [1, 2, 87, 87, 87, 2, 1];
ratings = [0, 2, 4, 3, 2, 1, 1, 3, 5, 6, 4, 0, 0];

console.log(candyBruteForce(ratings));
