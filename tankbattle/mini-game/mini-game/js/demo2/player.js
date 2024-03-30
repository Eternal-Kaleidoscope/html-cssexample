import { BaseTank } from "./baseTank";
import { isCanvasTouch, isModelTouch } from "./generateUtil";
import config from "./config";

export class Player extends BaseTank {

  getName() {
    return "player"
  }

  getImgSrcByDirection(direction) {
    switch (direction) {
      case 0:
        return config.images.playerTop
      case 1:
        return config.images.playerRight
      case 2:
        return config.images.playerBottom
      case 3:
        return config.images.playerLeft
      default:
        return config.images.playerTop
    }
  }
  update(direction) {
    this.direction = direction

    let x = this.x;
    let y = this.y;
    const step = config.player.step;
    switch (this.direction) {
      case 0:
        y -= step;
        break;
      case 1:
        x += step;
        break;
      case 2:
        y += step;
        break;
      case 3:
        x -= step;
        break;
    }
    if (isModelTouch(x, y, this.width, this.height, this.dataCenter.wallList)
      || isCanvasTouch(x, y, this.width, this.height)
    ) {

    } else {
      this.x = x;
      this.y = y;
    }
  }
}