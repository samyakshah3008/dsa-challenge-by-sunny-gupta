/**
 * @param {number[]} ratings
 * @return {number}
 */
var candyBruteForce = function (ratings) {
  let distributedCandiesArray = [];
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] == 0) {
      distributedCandiesArray.push(1);
      continue;
    }
    if (i == ratings.length - 1) {
      if (ratings[i - 1] >= ratings[i]) {
        distributedCandiesArray.push(1);
      } else {
        distributedCandiesArray.push(2);
      }
    } else if (i == 0) {
      if (ratings[i] > ratings[i + 1]) {
        distributedCandiesArray.push(2);
      } else {
        distributedCandiesArray.push(1);
      }
    } else {
      if (ratings[i] > ratings[i + 1] || ratings[i] > ratings[i - 1]) {
        distributedCandiesArray.push(2);
      } else {
        distributedCandiesArray.push(1);
      }
    }
  }

  let sum = distributedCandiesArray.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

function candyOptimized(ratings) {
  const n = ratings?.length;
  const distributedCandiesArray = Array(n).fill(1);

  // left to right pass;

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      distributedCandiesArray[i] = distributedCandiesArray[i - 1] + 1;
    }
  }

  // right to left pass;
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      distributedCandiesArray[i] = Math.max(
        distributedCandiesArray[i],
        distributedCandiesArray[i + 1] + 1
      );
    }
  }

  return distributedCandiesArray.reduce((acc, curr) => acc + curr, 0);
}

let ratings = [1, 0, 2];
// let ratings = [1, 2, 2];
ratings = [1, 2, 87, 87, 87, 2, 1];

console.log(candyOptimized(ratings));
