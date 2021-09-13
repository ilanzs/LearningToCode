function nextBigger(n) {
  let originalN = n;

  //convert the number into a string
  n = n.toString()

  //find the first digit that has a smaller digit than it to its right
  let pivot = 0;

  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] < n[i + 1] && n[i + 1]) {
      pivot = i;
      break;
    }
  }

  let rightOfPivot = n.slice(pivot + 1);
  let smallestBiggest = 0;

  for (let i = 0; i < rightOfPivot.length; i++) {
    if (rightOfPivot[i] > n[pivot] && rightOfPivot[i] < rightOfPivot[smallestBiggest]) {
      smallestBiggest = i;
    }
  }

  let leftOfPivot = n.slice(0, pivot + 1);
  n = n.split("");

  [n[pivot], n[leftOfPivot.length + smallestBiggest]] = [n[leftOfPivot.length + smallestBiggest], n[pivot]];

  n = n.join("");

  rightOfPivot = n.slice(pivot + 1).split("").sort((a, b) => a - b).join("");
  leftOfPivot = n.slice(0, pivot + 1);

  return parseInt(leftOfPivot + rightOfPivot) > originalN ? parseInt(leftOfPivot + rightOfPivot) : -1;
}

console.log(nextBigger(5876));