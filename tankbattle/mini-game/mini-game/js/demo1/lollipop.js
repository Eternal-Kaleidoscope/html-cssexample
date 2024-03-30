import Ball from "./ball"

export default class Lollipop extends Ball {
  constructor(centerX, centerY, radius, color = "#000", angle) {
    super(centerX, centerY, radius, color)
    this.angle = angle
  }

  render(ctx) {
    // //绘制线条
    super.render(ctx)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.centerX, this.centerY);
    ctx.stroke();
  }

}