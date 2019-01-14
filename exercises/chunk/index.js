// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My Soln
// Uses splice
// function chunk(array, size) {
//     const numChunks = Math.trunc(array.length / size);
//     const retArr = [];

//     for (let i = 0; i < numChunks; i++) {
//         retArr.push(array.splice(0, size));
//     }
//     if (array % size !== 0) retArr.push(array)
//     return retArr;
// }

// First Soln
// Chuncks in chucked to see if they have enough chunk.
// function chunk(array, size) {
//     const chuncked = [];
//     for (let element of array) {
//         const last = chuncked[chuncked.length - 1];

//         if (!last || last.length === size) {
//             chuncked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chuncked;
// }

// Second Soln
// Uses slice
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = chunk;
