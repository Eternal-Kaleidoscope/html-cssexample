import { Sprite } from "./sprite";
import config from "./config";

export class BaseTank extends Sprite {
  constructor(x, y, direction) {
    super(x, y, config.model.width, config.model.height, '')
    this.direction = direction
  }
  getImgSrcByDirection(direction) {

  }

  render(ctx) {
    this.imgSrc = this.getImgSrcByDirection(this.direction)
    this.draw(ctx)
  }
}