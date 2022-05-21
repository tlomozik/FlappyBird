const obstacleArray = [];

function Obstacle() {
  this.topWall = (Math.random() * canvas.height) / 2;
  this.bottomWall = (Math.random() * canvas.height) / 2;
  this.x = canvas.width;
  this.widthWall = 50;
  this.color = "blue";

  this.draw = function () {
    c.fillStyle = this.color;

    c.fillRect(this.x, 0, this.widthWall, this.topWall);
    c.fillRect(
      this.x,
      canvas.height - this.bottomWall,
      this.widthWall,
      this.bottomWall
    );
  };

  this.update = function () {
    this.x -= gamespeed;
    this.draw();
  };
}

function moveObstacles() {
  if (frame % 150 === 0) {
    obstacleArray.unshift(new Obstacle());
  }

  for (let a = 0; a < obstacleArray.length; a++) {
    obstacleArray[a].update();
  }

  if (obstacleArray.length > 5) {
    obstacleArray.pop(obstacleArray[0]);
  }
}
