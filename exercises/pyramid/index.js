// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// My Soln
// function pyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '#'.repeat(i*2 - 1) + ' '.repeat(n - i));
//     }
// }


function pyramid(n, row = 0, level = '') {
    if (n === row) return;
    if (level.length === (n*2 - 1)) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    if (level.length < n*2 - 1) {

    } else {
        return pyramid(n, row + 1)
    }
}

// First Soln 
// Iterative 
function pyramid(n) {
    const midPoint = Math.floor((2*n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let col = 0; col < n*2 - 1; col++) {
            if (midPoint - row <= col && midPoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }

}

// Second Soln
// Recursive 
function pyramid(n) {}

module.exports = pyramid;
 