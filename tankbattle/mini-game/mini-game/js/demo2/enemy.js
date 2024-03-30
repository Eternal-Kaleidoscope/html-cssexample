import { BaseTank } from "./baseTank";
import { randomDirection, isCanvasTouch, isModelTouch } from "./generateUtil";
import config from "./config";

export class Enemy extends BaseTank {
  getName() {
    return "enemy"
  }
  getImgSrcByDirection(direction) {
    switch (direction) {
      case 0:
        return config.images.tankTop
      case 1:
        return config.images.tankRight
      case 2:
        return config.images.tankBottom
      case 3:
        return config.images.tankLeft
      default:
        return config.images.tankBottom
    }
  }

  update(){
    let x = this.x;
    let y = this.y;
    const step = config.tank.step;
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
    || isCanvasTouch(x, y, this.width, this.height)) {
    this.direction = randomDirection();
    return
  }
    this.x=x
    this.y=y
  }

}