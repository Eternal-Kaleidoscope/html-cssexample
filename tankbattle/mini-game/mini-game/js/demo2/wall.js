
import config from "./config";
import { Sprite } from "./sprite";

export class Wall extends Sprite {

  constructor(x, y) {
    super(x, y, config.model.width, config.model.height, config.images.wall)
  }

  render(ctx) {
    this.draw(ctx)
  }

  getName() {
    return "wall"
  }
}