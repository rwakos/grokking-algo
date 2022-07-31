const binary = (array, search) => {
  if (array.length === 0) {
    return false;
  }

  const pivot = array[Math.floor(array.length / 2)];
  if (array[pivot] === search) {
    return true;
  } else if (array[pivot] < search) {
    return binary(array.slice(0, pivot - 1), search);
  } else {
    return binary(array.slice(pivot + 1, array.length), search);
  }
};

module.exports = binary;
