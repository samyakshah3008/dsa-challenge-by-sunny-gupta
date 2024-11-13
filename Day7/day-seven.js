/**
 * @param {string} s
 * @return {string}
 */
var decodeStringBruteForce = function (s) {
  let value = "";
  let decodedString = "";
  let timesRepeat = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] == "[") {
      timesRepeat = Number(s[i]);
    } else if (s[i] == "[") {
      // do nothing - just pass
      continue;
    } else if (s[i] == "]") {
      for (let j = 0; j < timesRepeat; j++) {
        decodedString = decodedString + value;
      }
      timesRepeat = "";
      value = "";
    } else {
      value = value + s[i];
    }
  }
  return decodedString;
};

var optimizedDecodeString = function (s) {
  let countStack = [];
  let resultStack = [];
  let decodedString = "";
  let i = 0;

  while (i < s.length) {
    if (!isNaN(s[i])) {
      let num = 0;
      while (!isNaN(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
      }
      countStack.push(num);
    } else if (s[i] === "[") {
      resultStack.push(decodedString);
      decodedString = "";
      i++;
    } else if (s[i] === "]") {
      let repeatTimes = countStack.pop();
      let prevString = resultStack.pop();
      decodedString = prevString + decodedString.repeat(repeatTimes);
      i++;
    } else {
      decodedString += s[i];
      i++;
    }
  }

  return decodedString;
};

let s = "3[a]2[bc]";
// let s = "2[abc]3[cd]ef"; - first approach fails
// s = "3[a2[c]]"; - first approach fails

console.log(optimizedDecodeString(s));
