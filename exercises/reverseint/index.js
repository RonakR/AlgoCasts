// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// Some tips: 
// 500 -> 5, and return as Number. 

// My Soln
// function reverseInt(n) {
//     const isNegative = n < 0;
//     const absN = Math.abs(n);

//     const reversed = absN.toString().split('').reverse().join('');
//     return parseInt(isNegative ? '-'+reversed : reversed);
// }

// First Soln:
// Using Math.Sign
function reverseInt(n) {
    const str = n.toString().split('').reverse().join('');

    return parseInt(str) * Math.sign(n);
}

module.exports = reverseInt;
