function Bird() {
  this.width = 25;
  this.height = 25;

  this.x = 100;
  this.y = 100;

  this.vy = 0;
  this.acc = 0.9;

  this.draw = function () {
    c.fillStyle = "red";
    c.fillRect(this.x, this.y, this.width, this.height);
  };

  this.update = function () {
    if (this.y > canvas.height - this.height || this.y < 0) {
      endGame = true;
    } else {
      this.vy += this.acc;
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (pullUpPressed) {
      this.jump();
    }
  };

  this.jump = function () {
    this.vy -= 3;
  };
}
