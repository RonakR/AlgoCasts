// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    
    // My shitty soln.

    // if (str == '') return str;
    // let arr = [];
    // for (let i=0; i<str.length; i++) {
    //     arr.unshift(str.charAt(i));
    // }
    // return arr.join('');

    // ---------------------------------------

    // First Soln:
    // Array.prototype.reverse()

    // return str.split('').reverse().join('');

    // ---------------------------------------

    // Second Soln:
    // Create an empty string 'reversed', add letter + existing string.

    // let reversed = '';
    // for ( let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;

    // ---------------------------------------

    // Third Soln (complicated):
    // Reduce Array 

    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
