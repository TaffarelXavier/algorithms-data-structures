var spiralOrder = function(matrix) {
  if (matrix.length === 1) {
    return matrix[0];
  } else if (matrix.length === 0) {
    return [];
  }
  let spiral = [];
  spiral = spiral.concat(matrix.shift());

  while (matrix.length > 0) {
    matrix = transpose(matrix).reverse();
    spiral = spiral.concat(matrix.shift());
  }

  return spiral;
};

function transpose(matrix) {
  let transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let subArr = [];
    for (let j = 0; j < matrix.length; j++) {
      subArr.push(matrix[j][i])
    }
    transposed.push(subArr);
  }

  return transposed;
}

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
])
