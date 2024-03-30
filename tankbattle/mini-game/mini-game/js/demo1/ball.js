export default class Ball {
  constructor(centerX, centerY, radius, color = "#000") {
    this.centerX = centerX
    this.centerY = centerY
    this.radius = radius
    this.color = color
  }
  render(ctx) {
    //绘制小球
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  update(x, y) {
    this.centerX = x
    this.centerY = y
  }
}