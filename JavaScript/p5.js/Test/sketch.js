function arrayDiff(a, b) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < b.length - 1; j++) {
      a.filter(item => {
        item != b[j]
      })
    }
  }
  return a;
}


console.log(arrayDiff([19, 4, 18, -5, -13, -6, -13], [-13, 18, 4, -13, -6]));