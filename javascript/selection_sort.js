function selectionSort(arr) {
  const sortedArray = [];
  const arrLen = arr.length

  for (let i = 0; i < arrLen; i++) {
    // Find the minimum value in the array (Math.min(...arr)) 
    const minValue = Math.min(...arr);
    // Find the index of this value in the array
    const minValueIndex = arr.indexOf(minValue);
    // Push the minimum value into the empty array
    sortedArray.push(minValue);
    // Remove minValue from arr
    arr.splice(minValueIndex, 1)
    // console.log(sortedArray)
  }

  return sortedArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution