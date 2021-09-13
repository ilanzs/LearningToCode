function removeZeros(array) {
  let zeros = [];
  let nonZeros = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 && array[i] === "0") {
      zeros[zeros.length] = array[i];
    } else {
      nonZeros[nonZeros.length] = array[i];
    }
  }

  return [nonZeros, zeros].flat(Infinity);
}

console.log(removeZeros([1, 0, 1]));