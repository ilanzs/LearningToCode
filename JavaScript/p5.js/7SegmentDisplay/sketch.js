let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let tensHours = new SevenSegment(200, 0);
let singleHours = new SevenSegment(60, 0);
let tensMinutes = new SevenSegment(380, 0);
let singleMinutes = new SevenSegment(520, 0);

function setup() {
  createCanvas(800, 400);
  frameRate(3);
}

function draw() {
  background(0);

  let date = new Date();
  let hours = date.getHours().toString();
  if (hours.length < 2) {
    let hour = parseInt(hours.charAt(0));
    tensHours.sevenSegment(nums[0]);
    singleHours.sevenSegment(nums[hour]);
  } else {
    let hour1 = parseInt(hours.charAt(0));
    let hour2 = parseInt(hours.charAt(1));
    tensHours.sevenSegment(nums[hour2]);
    singleHours.sevenSegment(nums[hour1]);
  }

  let minutes = date.getMinutes().toString();
  if (minutes.length < 2) {
    let minute = parseInt(minutes.charAt(0));
    tensMinutes.sevenSegment(nums[0]);
    singleMinutes.sevenSegment(nums[minute]);
  } else {
    let minute1 = parseInt(minutes.charAt(0));
    let minute2 = parseInt(minutes.charAt(1));
    tensMinutes.sevenSegment(nums[minute1]);
    singleMinutes.sevenSegment(nums[minute2]);
  }

  // draw the semicolon
  fill(255, 0, 0);
  rect(320, 40, 18, 98, 10);
  rect(320, 160, 18, 98, 10);
}
