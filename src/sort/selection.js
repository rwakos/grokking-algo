// The actual selection sort, should be faster than prev.
const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const smallestIndex = findSmallestIndex(array, i + 1);
    if (array[smallestIndex] < array[i]) {
      // do swap
      const temp = array[i];
      array[i] = array[smallestIndex];
      array[smallestIndex] = temp;
    }
  }
  return array;
};

const findSmallestIndex = (array, index) => {
  let smallestIndex = index;

  for (let i = index + 1; i < array.length; i++) {
    if (array[i] < array[smallestIndex]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
};
module.exports = selectionSort;
