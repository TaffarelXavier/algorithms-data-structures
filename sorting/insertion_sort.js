function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prev = i - 1;
    let elementToInsert = arr[i];
    while (arr[prev] > elementToInsert && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = elementToInsert
  }
  return arr;
}
// O(N^2)

console.log(insertionSort([5, 4, 3, 2, 1]))
console.log(insertionSort([5, 4, 3, 2]))
