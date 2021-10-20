// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(982) === 289
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverseInt = 0;
  let floor = Math.floor;
  //   if (n >= 0) {
  //     while (n != 0) {
  //       let rem = n % 10;
  //       reverseInt = reverseInt * 10 + rem;
  //       n = floor(n / 10);
  //     }
  //     return reverseInt;
  //   } else {
  //     n *= -1;
  //     while (n != 0) {
  //       let rem = n % 10;
  //       reverseInt = reverseInt * 10 + rem;
  //       n = floor(n / 10);
  //     }
  //     return reverseInt * -1;
  //   }
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

console.log(reverseInt(-5));

module.exports = reverseInt;
