let whitePawnPNG;
let whiteBishopPNG;
let whiteKnightPNG;
let whiteRookPNG;
let whiteQueenPNG;
let whiteKingPNG;

let blackPawnPNG;
let blackBishopPNG;
let blackKnightPNG;
let blackRookPNG;
let blackQueenPNG;
let blackKingPNG;

const pawn = 1;
const bishop = 2;
const knight = 3;
const rook = 4;
const queen = 5;
const king = 6;

const white = 8;
const black = 16;

const whitePawn = pawn + white; // 9
const whiteBishop = bishop + white; // 10
const whiteKnight = knight + white; // 11
const whiteRook = rook + white; // 12
const whiteQueen = queen + white; // 13
const whiteKing = king + white; // 14

const blackPawn = pawn + black; // 17
const blackBishop = bishop + black; // 18
const blackKnight = knight + black; // 19
const blackRook = rook + black; // 20
const blackQueen = queen + black; // 21
const blackKing = king + black; // 22

let spacing;

let board = makeBoard();

let fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 1 3";

function setup() {
  createCanvas(400, 400);
  spacing = width / 8;

  whitePawnPNG = loadImage("PNGPieces\\WhitePawn.png");
  whiteBishopPNG = loadImage("PNGPieces\\WhiteBishop.png");
  whiteKnightPNG = loadImage("PNGPieces\\WhiteKnight.png");
  whiteRookPNG = loadImage("PNGPieces\\WhiteRook.png");
  whiteQueenPNG = loadImage("PNGPieces\\WhiteQueen.png");
  whiteKingPNG = loadImage("PNGPieces\\WhiteKing.png");

  blackPawnPNG = loadImage("PNGPieces\\BlackPawn.png");
  blackBishopPNG = loadImage("PNGPieces\\BlackBishop.png");
  blackKnightPNG = loadImage("PNGPieces\\BlackKnight.png");
  blackRookPNG = loadImage("PNGPieces\\BlackRook.png");
  blackQueenPNG = loadImage("PNGPieces\\BlackQueen.png");
  blackKingPNG = loadImage("PNGPieces\\BlackKing.png");
}

board = FENToBoard(fen, board);

function draw() {
  background(0);

  drawBoard();
  drawPieces(board);
}

function makeBoard() {
  let newBoard = [];
  for (let i = 0; i < 64; i++) {
    newBoard.push(0);
  }
  return newBoard;
}

function drawBoard(board) {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let index = x + y * 8 + y;
      if (index % 2 == 0) {
        fill(230);
        noStroke();
        rect(x * spacing, y * spacing, spacing, spacing);
      } else {
        fill(100, 100, 150);
        noStroke();
        rect(x * spacing, y * spacing, spacing, spacing);
      }
    }
  }
}

function drawPieces(newBoard) {
  for (let i = 0; i < newBoard.length; i++) {
    let square = newBoard[i];
    let x = i % 8;
    let y = floor(i / 8);
    imageMode(CENTER);

    switch (square) {
      case 9:
        image(
          whitePawnPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing * 0.75806451612 - 5,
          spacing - 5
        );
        break;

      case 10:
        image(
          whiteBishopPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 11:
        image(
          whiteKnightPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 12:
        image(
          whiteRookPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing * 0.88524590163 - 5,
          spacing - 5
        );
        break;

      case 13:
        image(
          whiteQueenPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 14:
        image(
          whiteKingPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 17:
        image(
          blackPawnPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing * 0.75806451612 - 5,
          spacing - 5
        );
        break;

      case 18:
        image(
          blackBishopPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 19:
        image(
          blackKnightPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 20:
        image(
          blackRookPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing * 0.88524590163 - 5,
          spacing - 5
        );
        break;

      case 21:
        image(
          blackQueenPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;

      case 22:
        image(
          blackKingPNG,
          x * spacing + spacing / 2,
          y * spacing + spacing / 2,
          spacing - 5,
          spacing - 5
        );
        break;
    }
  }
}

function FENToBoard(FEN, newBoard) {
  let current = 0;
  for (let i = 0; i < FEN.length; i++) {
    switch (FEN[i]) {
      case "P": // white pawn
        newBoard[current] = whitePawn;
        current++;
        break;
      case "R": // white rook
        newBoard[current] = whiteRook;
        current++;
        break;
      case "N": // white knight
        newBoard[current] = whiteKnight;
        current++;
        break;
      case "B": // white bishop
        newBoard[current] = whiteBishop;
        current++;
        break;
      case "Q": // white queen
        newBoard[current] = whiteQueen;
        current++;
        break;
      case "K": // white king
        newBoard[current] = whiteKing;
        current++;
        break;

      case "p": // black pawn
        newBoard[current] = blackPawn;
        current++;
        break;
      case "r": // black rook
        newBoard[current] = blackRook;
        current++;
        break;
      case "n": // black knight
        newBoard[current] = blackKnight;
        current++;
        break;
      case "b": // black bishop
        newBoard[current] = blackBishop;
        current++;
        break;
      case "q": // black queen
        newBoard[current] = blackQueen;
        current++;
        break;
      case "k": // black king
        newBoard[current] = blackKing;
        current++;
        break;

      case "1":
        newBoard[current] = 0;
        current += 1;
        break;
      case "2":
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        current += 2;
        break;
      case "3":
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        newBoard[current + 2] = 0;
        current += 3;
        break;
      case "4":
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        newBoard[current + 2] = 0;
        newBoard[current + 3] = 0;
        current += 4;
        break;
      case "5":
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        newBoard[current + 2] = 0;
        newBoard[current + 3] = 0;
        newBoard[current + 4] = 0;

        current += 5;
        break;
      case "6":
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        newBoard[current + 2] = 0;
        newBoard[current + 3] = 0;
        newBoard[current + 4] = 0;
        newBoard[current + 5] = 0;
        current += 6;
        break;
      case "7":
        current += 7;
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        newBoard[current + 2] = 0;
        newBoard[current + 3] = 0;
        newBoard[current + 4] = 0;
        newBoard[current + 5] = 0;
        newBoard[current + 6] = 0;

        break;
      case "8":
        newBoard[current] = 0;
        newBoard[current + 1] = 0;
        newBoard[current + 2] = 0;
        newBoard[current + 3] = 0;
        newBoard[current + 4] = 0;
        newBoard[current + 5] = 0;
        newBoard[current + 6] = 0;
        newBoard[current + 7] = 0;

        current += 8;
        break;

      case "/":
        current = current - (current % 8);
        break;

      case " ":
        i = FEN.length;
    }
  }

  return newBoard;
}

function checkLegalMove(type, currentIndex, nextIndex) {
  let dif = currentIndex - nextIndex;
  let currentX = currentIndex % 8;
  let currentY = floor(currentIndex / 8);

  let nextX = nextIndex % 8;
  let nextY = floor(nextIndex / 8);

  switch (type) {
    case 9: // pawn
      if (dif == 8) {
        return true;
      } else {
        return false;
      }

    case 11: // knight
      if (
        dif == -10 ||
        dif == -6 ||
        dif == -17 ||
        dif == -15 ||
        dif == 10 ||
        dif == 6 ||
        dif == 17 ||
        dif == 15
      ) {
        return true;
      } else {
        return false;
      }

    case 12: // rook
      if (currentX != nextX && currentY != nextY) {
        return false;
      } else if (
        (nextX - currentX <= findDistanceToEdge(currentIndex)[1] &&
          nextY == currentY) ||
        (currentX - nextX <= findDistanceToEdge(currentIndex)[3] &&
          currentY == nextY) ||
        (currentX - nextX <= findDistanceToEdge(currentIndex)[0] &&
          currentX == nextX) ||
        (nextX - currentX <= findDistanceToEdge(currentIndex)[2] &&
          currentY == currentY)
      ) {
        return true;
      } else {
        return false;
      }

    case 14: // /king
      if (
        dif == -9 ||
        dif == -8 ||
        dif == -7 ||
        dif == -1 ||
        dif == 1 ||
        dif == 7 ||
        dif == 8 ||
        dif == 9
      ) {
        return true;
      } else {
        return false;
      }

    case 17: // pawn
      if (dif == -8) {
        return true;
      } else {
        return false;
      }

    case 19: // knight
      if (
        dif == -10 ||
        dif == -6 ||
        dif == -17 ||
        dif == -15 ||
        dif == 10 ||
        dif == 6 ||
        dif == 17 ||
        dif == 15
      ) {
        return true;
      } else {
        return false;
      }

    case 20: // rook
      if (currentX != nextX && currentY != nextY) {
        return false;
      } else if (
        (nextX - currentX <= findDistanceToEdge(currentIndex)[1] &&
          nextY == currentY) ||
        (currentX - nextX <= findDistanceToEdge(currentIndex)[3] &&
          currentY == nextY) ||
        (currentX - nextX <= findDistanceToEdge(currentIndex)[0] &&
          currentX == nextX) ||
        (nextX - currentX <= findDistanceToEdge(currentIndex)[2] &&
          currentY == currentY)
      ) {
        return true;
      } else {
        return false;
      }

    case 22: // king
      if (
        dif == -9 ||
        dif == -8 ||
        dif == -7 ||
        dif == -1 ||
        dif == 1 ||
        dif == 7 ||
        dif == 8 ||
        dif == 9
      ) {
        return true;
      } else {
        return false;
      }
  }
}

let isFrom = true;
let from;
let to;

function mousePressed() {
  let x = floor(mouseX / spacing);
  let y = floor(mouseY / spacing);

  switch (isFrom) {
    case true:
      console.log(isFrom);

      from = x + y * 8;
      isFrom = false;
      break;

    case false:
      print(isFrom);
      to = x + y * 8;
      if (checkLegalMove(board[from], from, to)) {
        board[to] = board[from];
        board[from] = 0;
        from = undefined;
        to = undefined;
      }
      isFrom = true;
      break;
  }
}

function findDistanceToEdge(index) {
  let x = index % 8;
  let y = floor(index / 8);

  let distToTop = dist(x, y, x, 0);
  let distToRight = dist(x, y, 8, y);
  let distToLeft = dist(x, y, 0, y);
  let distToBottom = dist(x, y, x, 8);

  return [distToTop, distToRight, distToBottom, distToLeft];
}
