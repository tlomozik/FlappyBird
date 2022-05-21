let canvas = document.querySelector("canvas");
const pointCount = document.querySelector("#counter");
//Wymiary canvasu
canvas.width = 700;
canvas.height = 500;

//Zdefiniowanie kontekstu
let c = canvas.getContext("2d");

let pullUpPressed = false;
let gamespeed = 2;
let frame = 0;
let colision = false;
const bird = new Bird();
const obstacle = new Obstacle();
let score = 0;

let endGame = false;

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // obstacle.update();
  moveObstacles();

  bird.update();
  bird.draw();
  hitObstacle();
  if (endGame == true) {
    return;
  }
  requestAnimationFrame(animate);
  pointCount.textContent = "Score: " + frame;

  frame++;
  gamespeed += 0.01;
}
animate();

function hitObstacle() {
  for (let a = 0; a < obstacleArray.length; a++) {
    if (
      bird.x < obstacleArray[a].x + obstacleArray[a].widthWall &&
      bird.x + bird.width > obstacleArray[a].x &&
      ((bird.y < 0 + obstacleArray[a].topWall && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - obstacleArray[a].bottomWall &&
          bird.y + bird.height < canvas.height))
    ) {
      endGame = true;
    }
  }
}

function restart() {
  document.location.reload();
}

window.addEventListener("keydown", function (e) {
  if (e.code === "ArrowUp" || e.code === "Space") {
    pullUpPressed = true;
  }
});

window.addEventListener("keyup", function (e) {
  if (e.code === "ArrowUp" || e.code === "Space") {
    pullUpPressed = false;
  }
});
