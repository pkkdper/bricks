const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isGameOver = false;
let gameId = 0;

let movePaddleR = false;
let movePaddleL = false;

let paddleMarginBottom = 30;
// let paddleX = ctx.width/2 - paddle.width/2;
// let paddleY = ctx.height - paddle.height-paddleMarginBottom;
let paddleWidth = 120;
let paddleHeight = 25;

const paddle = {
  x: canvas.width / 2 - paddleWidth / 2,
  y: canvas.height - paddleHeight - paddleMarginBottom,
  w: paddleWidth,
  h: paddleHeight,
  dx: 5,
};

let ballRadius = 19;
let ballX = ctx.width / 2;
let ballY = 708;
let ballSpeedX = 1;
let ballSpeedY = 1;

let brickX = 1;
let brickY = 1;
let brickWidth = 100;
let brickHeight = 30;

let life = 3;

const bricks = {
  w: brickWidth,
  h: brickHeight,
  offSetLeft: 20,
  offSetTop: 20,
  marginTop: 40,
  x: 45,
  y: 15,
};
// const paddle = {
//   draw: function () {
//     ctx.beginPath();
//     ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
//     ctx.closePath();

//     //colour not working??

//     ctx.fillStyle = "blue";
//     ctx.fill();
//   },
// };

function drawPaddle() {
  // ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  // ctx.closePath();

  //colour not working??

  // ctx.fill();
}
console.log(paddle.x, paddle.y)
drawPaddle()
// const ball = {
//   drawBall: function () {
//     ctx.beginPath();
//     ctx.fillStyle = "#827AB7";
//     ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.closePath();
//   },
// };
// function resetBall() {
//   ballX = 509;
//   ballY = 708;
//   ballSpeedX = 3*(Math.random()*2);
//   ballSpeedY = 1;
// }
// function moveBall() {
//   if (ballX > canvas.width) {
//     ballSpeedX = ballSpeedX * -1;
//   }
//   if (ballY < 0) {
//     ballSpeedY = ballSpeedY * -1;
//   }
//   if (ballX < 0) {
//     ballSpeedX = ballSpeedX * -1;
//   }
//  if (
//     ballY > canvas.height - 70 &&
//     ballY < canvas.height &&
//     ballX >= paddle1.X &&
//     ballX <= paddle1.X + 120
//   ) {
//     ballSpeedY = ballSpeedY* -1

//   }

//    if (ballY > canvas.height + 50) {
//     life --;
//     console.log(life);
//     resetBall();
// }}

function movePaddle() {
  if (movePaddleL && paddle1.X > 0) {
    paddle1.X -= 3;
  }
  if (movePaddleR && paddle1.X < canvas.width - 120) {
    paddle1.X += 3;
  }
}

// pls explain how it works
// function drawBricks1() {
//   ctx.beginPath();
//   // ctx.fillRect(bricks[0][0].x,bricks[0][0].y,bricks[0][0].w,bricks[0][0].h);
//   // ctx.closePath();

//   // ctx.beginPath();

//   ctx.fillRect(0, 15, brickWidth, brickHeight);

//   // ctx.fillStyle
//   ctx.closePath();
// }
// function drawBricks2() {
//   ctx.beginPath();
//   // ctx.fillRect(bricks[0][0].x,bricks[0][0].y,bricks[0][0].w,bricks[0][0].h);
//   // ctx.closePath();

//   // ctx.beginPath();

//   ctx.fillRect(200, 15, brickWidth, brickHeight);

//   // ctx.fillStyle
//   ctx.closePath();
// }

// function drawBricks() {
//   for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 7; j++) {
//       ctx.save();
//       // ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 20 * i) + ", 255)";
//       ctx.translate(10 + j * 130, 10 + i * 50);
//       ctx.fillRect(45, 15, 100, 30);
//       ctx.restore();
//     }
//   }
// }

const start = function () {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  document.querySelector(".start").style.display = "none";
  document.querySelector(".game").style.display = "block";
  // drawBricks1();
  // drawBricks2();
  drawPaddle();

  // paddle.draw();
  // ball.drawBall();
  ballX += ballSpeedX;
  ballY -= ballSpeedY;
  // moveBall();
  // movePaddle();
  if (isGameOver) {
    cancelAnimationFrame(gameId);
    document.querySelector(".game").style.display = "none";
    document.querySelector(".end").style.display = "block";
  } else {
    gameId = requestAnimationFrame(start);
  }
};
startBtn.addEventListener("click", () => {
  start();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    movePaddleL = true;
  }
  if (event.code === "ArrowRight") {
    movePaddleR = true;
  }
});
document.addEventListener("keyup", () => {
  movePaddleL = false;
  movePaddleR = false;
});

// const end = function () {
//   document.querySelector(".game").style.display = "none";
//   document.querySelector(".end").style.display = "block";
// };

// restartBtn.addEventListener("click", () => {
//   document.querySelector(".game").style.display = "block";
//   document.querySelector(".end").style.display = "none";
//   isGameOver = false;
//   ballX = 509;
//     ballY = 708;
//     ballSpeedY = 1;
//     ballSpeedX = 1;
//     // paddleX = 450;
//   start();
// });
