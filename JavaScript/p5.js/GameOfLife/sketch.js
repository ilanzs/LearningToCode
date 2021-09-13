function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;
let shouldRun = true;

function setup() {
  createCanvas(600, 400);

  cols = width / resolution;
  rows = height / resolution;
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);
  if (shouldRun) {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) {
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < cols; j++) {
            grid[i][j] = floor(random(2));
          }
        }
      }
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1) {
          fill(255);
          rect(x, y, resolution, resolution, 2);
        }
      }
    }

    let next = make2DArray(cols, rows);

    // computer next generation based on current one
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        // count all lives neighbors
        let neighbors = countNeighbors(grid, i, j);

        let state = grid[i][j];
        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = grid[i][j];
        }
      }
    }

    grid = next;
  }

  function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;

        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }
}

function keyPressed() {
  if (shouldRun) {
    shouldRun = false; 
    print("NOT RUNNING");
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = floor(random(2));
      }
    }
  } else if (!shouldRun) {
    shouldRun = true;
    print("RUNNING")
  }
}
