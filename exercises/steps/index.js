// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My Soln
// Using .repeat()
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(`${'#'.repeat(i)}${' '.repeat(n-i)}`);
//     }
// }

// My Recursive Soln
// function steps(n, spaces = 0, row = 1) {
//     if (row === n) {
//         console.log('#'.repeat(n));
//         return;
//     }
//     spaces = n - row;
//     console.log('#'.repeat(row) + ' '.repeat(spaces));
//     return steps(n, spaces, row + 1, );
// }

// First Soln
// Create a matrix
// function steps(n) {
//     for (let row = 0; row < n; row++){
//         let stair = '';
//         for (let col = 0; col < n; col++){
//             if (col <= row ) stair += '#';
//             else stair += ' ';
//         }
//         console.log(stair);
//     }
// }

// Second Soln
// Recursion
function steps(n, row = 0, stair = '') {
    if (row === n) return;
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    return steps(n, row, stair);
}

module.exports = steps;
