// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// This soln is applicable to qns like:
// Does string A have the same characters as string B (is it an anagram?)
// Does the given string have any repeating characters?

// My soln
// function maxChar(str) {
//     const arr = str.split('');
//     const mapObj = {}
//     arr.forEach((char) => {
//         mapObj[char] = mapObj[char] ? mapObj[char] + 1 : 1;
//     });
    
//     let mostOcc = 0;
//     let maxOccChar = '';
//     Object.keys(mapObj).forEach((key) => {
//         if ( mapObj[key] > mostOcc ) {
//             maxOccChar = key;
//             mostOcc = mapObj[key];
//         }
//     });
//     return maxOccChar;
// }

// First Soln: 
// Remeber to use 'of` for string/arrar and 'in' for obj
// Dont need to convert string / obj to array to iterate over them
function maxChar(str) {
    const charMap = {};
    for ( let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }

    let max = 0;
    let maxChar = '';
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}


module.exports = maxChar;
