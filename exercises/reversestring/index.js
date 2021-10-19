// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1
  let reverseStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverseStr += str[i];
  //   }

  // Solution 2
  // return str.split("").reverse().join("");

  // Solution 3

  for (let character of str) {
    reverseStr = character + reverseStr;
    console.log(reverseStr);
  }

  return reverseStr;
}

reverse("hello");

module.exports = reverse;
