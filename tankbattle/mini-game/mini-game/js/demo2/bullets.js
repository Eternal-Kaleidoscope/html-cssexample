import config from './config';
import { isCanvasTouch, isModelTouch } from './generateUtil';
import { Sprite } from './sprite';

export class Bullets extends Sprite {
  constructor(tank) {
    super(
      tank.x + (config.model.width - config.bullet.width) / 2,
      tank.y + (config.model.height - config.bullet.height) / 2,
      config.bullet.width,
      config.bullet.height,
      config.images.bullet
    );
    this.tank = tank
    this.direction = tank.direction
  }

  getName() {
    return "bullets"
  }

  render(ctx) {
    this.draw(ctx)
  }

  update() {
    let x = this.x;
    let y = this.y;
    const step = config.bullet.speed.tank;
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
    if (isCanvasTouch(x, y, this.width, this.height)) {
      // canvas图层边缘碰撞检测
      this.destroy();
      return
    }
    // 子弹碰撞检测
    const touchModel = isModelTouch(
      x,
      y,
      this.width,
      this.height,
      [...this.dataCenter.wallList, ...this.dataCenter.enemyList, ...this.dataCenter.playerList]
    );

    if (touchModel) {
      if (touchModel.name == "wall") {
        this.destroy();
        touchModel.destroy();
        return
      } else if (this.tank.name === 'player' && touchModel.name == "enemy") {
        this.destroy();
        touchModel.destroy();
        return
      } else if (this.tank.name === 'enemy' && touchModel.name == "player") {
        this.destroy();
        touchModel.destroy();
        return
      }
    }
    this.x = x;
    this.y = y;

  }

}