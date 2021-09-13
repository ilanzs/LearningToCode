snail = function(array) {

  const middle = array.slice(1, array.length - 1).map(row => row.slice(1, row.length - 1));

  return [
    array[0], // top
    array.slice(1, array.length - 1).map(row => row[row.length - 1]), // right
    array.length > 1 ? array[array.length - 1].reverse() : [], // bottom
    array.slice(1, array.length - 1).reverse().map(row => row[0]), // left
    middle.length > 0 ? snail(middle) : [] // middle
  ].reduce((acc, val) => acc.concat(val), []);
}

console.log(snail([
  [1, 2, 3, 4,     5 ],
  [6, 7, 8, 9,     10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]));