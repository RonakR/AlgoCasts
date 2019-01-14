// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Tips: 
// RegExp, used to remove spaces and punctuations 
// Lowercase

// My soln
// function anagrams(stringA, stringB) {
//     const regEx = /\W/g;
//     const lowStrA = stringA.replace(regEx, "").toLowerCase();
//     const lowStrB = stringB.replace(regEx, "").toLowerCase();

//     const charMapA = {};
//     // Short circuit
//     // If they are not the same length, get them outta here.
//     // e.g. 'hithere' 'byethere' will be false
//     if (lowStrA.length !== lowStrB.length) return false;

//     // Create map of characters in A
//     for (let char of lowStrA) {
//         charMapA[char] = charMapA[char] + 1 || 1;
//     }

//     // Remove from charMapA characters in B
//     for (let char of lowStrB) {
//         if (!charMapA[char]) return false;
//         charMapA[char] = charMapA[char] - 1;
//         if (charMapA[char] === 0) delete charMapA[char];
//     }

//     return Object.keys(charMapA).length === 0 ? true : false;
// }

// First Soln:
// Helper function but many loops
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) return false;
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {}
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// Second Soln: 
// Using Sort
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    const regEx = /\W/g;
    return str.replace(regEx, "").toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
