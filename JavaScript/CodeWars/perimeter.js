function perimeter(n) {
  let fib = [0, 1]
  let output = 4;

  for (let i = 0; i < n; i++) {
    let next = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = next
    output += next * 4
  }

  return output;
}

console.log(perimeter(30));