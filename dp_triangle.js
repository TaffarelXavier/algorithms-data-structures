// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
//
// For example, given the following triangle
//
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

var minimumTotal = function(triangle) {
  return minimumTotalHelper(triangle);
};

function minimumTotalHelper(triangle, row = 0, col = 0, cache = {}) {
  // base case: reaching the last row returns the sum
  let currentValue = triangle[row][col];
  if (row >= triangle.length - 1) {
    return triangle[row][col];
  }

  let result = (cache[[row, col]] ||
         Math.min(minimumTotalHelper(triangle, row + 1, col, cache) + currentValue,
                  minimumTotalHelper(triangle, row + 1, col + 1, cache) + currentValue));
  cache = result;
  return result;
}

console.log(minimumTotal([
     [2],
     [3,4],
     [6,5,7],
     [4,1,8,3],
     [1,2,1,1,1]
]))
