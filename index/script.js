const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const brick = {
  // x: 700,
  // y: 900,
  draw: function () {
    ctx.beginPath();
    ctx.fillRect(450, 730, 120, 25);
    ctx.closePath();


    //colour not working??

    ctx.fillStyle = 'blue';
    ctx.fill();
  }
};

const ball = {
  // x: 720,
  // y: 900,
  drawBall: function () {
    ctx.beginPath();
    ctx.fillStyle = '#827AB7';
    ctx.arc(509, 708, 19, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath();
  }
}



//pls explain how it works

function drawBricks(){
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 7; j++) {
    ctx.save();
    ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 20 * i) + ', 255)';
    ctx.translate(10 + j * 130, 10 + i * 50);
    ctx.fillRect(45, 15, 100, 30);
    ctx.restore();
  }
}
}

const start = function () {
  document.querySelector(".start").style.display = "none";
  document.querySelector(".game").style.display = "block"; 
  drawBricks()
  brick.draw()
  ball.drawBall()
};
startBtn.addEventListener("click", () => {
  start();
});

const end = function () {
  document.querySelector(".game").style.display = "none"; 
  document.querySelector(".end").style.display = "block"; 
}

restartBtn.addEventListener('click', () => {
  start();
});
