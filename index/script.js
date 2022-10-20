const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let life = 3;
// let isGameOver = false;
// let gameId = 0;

let movePaddleR = false;
let movePaddleL = false;

const paddleMarginBottom = 30;
const paddleWidth = 120;
const paddleHeight = 25;

const paddle = {
  x: canvas.width / 2 - paddleWidth / 2,
  y: canvas.height - paddleHeight - paddleMarginBottom,
  w: paddleWidth,
  h: paddleHeight,
  dx: 5,
};

const ballRadius = 15;
const ball = {
  x: canvas.width / 2,
  y: paddle.y - ballRadius,
  r: ballRadius,
  s: 2,
  dx: 3,
  dy: -3,
};

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
}


function ballWall() {
if(ball.x > canvas.width || ball.x < 0) {
ball.dx =- ball.dx
}if(ball.y < 0) {
  ball.dy =-ball.dy
}
if(ball.y + ball.r > canvas.height) {
  life --;
  resetBall()
}
}
function resetBall() {
  ball.x = canvas.width/2
  ball.y = paddle.y - ballRadius
  ball.dx = 3*(Math.random()*2-1)
  ball.dy = -3
}

// let ballRadius = 19;
// let ballX = ctx.width / 2;
// let ballY = 708;
// let ballSpeedX = 1;
// let ballSpeedY = 1;

// let brickX = 1;
// let brickY = 1;
// let brickWidth = 100;
// let brickHeight = 30;


// const bricks = {
//   w: brickWidth,
//   h: brickHeight,
//   offSetLeft: 20,
//   offSetTop: 20,
//   marginTop: 40,
//   x: 45,
//   y: 15,
// };
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
  ctx.fillStyle = "grey";
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
  // ctx.closePath();
}

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
//     ballX >= paddle.X &&
//     ballX <= paddle.X + 120
//   ) {
//     ballSpeedY = ballSpeedY* -1

//   }

//    if (ballY > canvas.height + 50) {
//     life --;
//     console.log(life);
//     resetBall();
// }}
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    movePaddleL = true;
  }
  if (event.code === "ArrowRight") {
    movePaddleR = true;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") {
    movePaddleL = false;
  } else if (event.code === "ArrowRight") {
    movePaddleR = false;
  }
});
function movePaddle() {
  if (movePaddleL && paddle.x > 0) {
    paddle.x -= 4;
  }
  if (movePaddleR && paddle.x + paddle.w < canvas.width) {
    paddle.x += 4;
  }
}


function moveBall() {
  ball.x += ball.dx;
  ball.y +=ball.dy;
  // if (ball.x > canvas.width) {
  //       ballSpeedX = ballSpeedX * -1;
  //     }
  //     if (ball.y < 0) {
  //       ballSpeedY = ballSpeedY * -1;
  //     }
  //     if (ball.x < 0) {
  //       ballSpeedX = ballSpeedX * -1;
  //     }
  //    if (
  //       ball.y > canvas.height - 70 &&
  //       ball.y < canvas.height &&
  //       ball.x >= paddle.x &&
  //       ball.x <= paddle.x+ 120
  //     ) {
  //       ballSpeedY = ballSpeedY* -1
    
  //     }
}

function update() {
  movePaddle();
  moveBall();
  ballWall();
}

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

function start() {
  ctx.clearRect(0, 0, 500, 400);
  drawBall();
  drawPaddle();
  update();
  requestAnimationFrame(start)
}
start()
// const start = function () {
//   ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
//   document.querySelector(".start").style.display = "none";
//   document.querySelector(".game").style.display = "block";
//   // drawBricks1();
//   // drawBricks2();
//   drawPaddle();

//   // paddle.draw();
//   // ball.drawBall();
//   ballX += ballSpeedX;
//   ballY -= ballSpeedY;
//   // moveBall();
//   // movePaddle();
//   if (isGameOver) {
//     cancelAnimationFrame(gameId);
//     document.querySelector(".game").style.display = "none";
//     document.querySelector(".end").style.display = "block";
//   } else {
//     gameId = requestAnimationFrame(start);
//   }
// };
// startBtn.addEventListener("click", () => {
//   start();
// });

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
