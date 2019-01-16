// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Tips: 
// Slice on the string

// My Soln & Frist soln 
// function capitalize(str) {
//     const arr = str.split(' ');
//     const newArr = [];

//     for (let word of arr) {
//         newArr.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return newArr.join(' ');
// }

// Second Soln
// Iterate through string
// capitalize anything that has a space to it's left
// One big weakness: The first letter
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') result += str[i].toUpperCase();
        else result += str[i];
    }
    return result;
}

module.exports = capitalize;
