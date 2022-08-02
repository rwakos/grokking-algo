// This is O(n3) because of the delete on the array
const selection = (array) => {
  const newArray = [];

  while (array.length > 0) {
    const smallestIndex = findSmallestIndex(array);
    newArray.push(array.splice(smallestIndex, 1)[0]);
  }
  return newArray;
};

const findSmallestIndex = (array) => {
  let smallestIndex = 0;
  let smallestValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestValue) {
      smallestIndex = i;
      smallestValue = array[i];
    }
  }
  return smallestIndex;
};

module.exports = selection;
