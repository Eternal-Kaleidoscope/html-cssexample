import { Player } from './player';

import config from './config';
import { Enemy } from './enemy';
import { Wall } from './wall';

export class GenerateUtil {
  createWall() {
    let wallNum = config.wall.num
    let wallList = []
    for (let i = 0; i < wallNum; i++) {
      while (true) {
        const position = this.wallPosition();
        const exists = wallList.some(
          (c) => c.x === position.x && c.y === position.y
        );
        if (!exists) {
          wallList.push(new Wall(position.x, position.y));
          break;
        }
      }
    }
    return wallList
  }

  wallPosition() {
    return {
      x:
        Math.floor(Math.random() * (config.moveRange.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.moveRange.height / config.model.height - 5)
        ) * config.model.height +
        config.model.height * 2,
    };
  }
  // 敌方坦克
  createEnemy() {
    let tankNum = config.tank.num
    let tankList = []
    for (let i = 0; i < tankNum; i++) {
      const position = this.enemyPosition();
      const direction = randomDirection()
      tankList.push(new Enemy(position.x, position.y, direction));
    }
    return tankList
  }

  enemyPosition() {
    return {
      x:
        Math.floor(Math.random() * (config.moveRange.width / config.model.width)) *
        config.model.width,
      y:
        0

    };
  }

  createPlayer() {
    let playerList = []
    playerList.push(new Player(config.model.width * 5, config.moveRange.height - config.model.height, 0))
    return playerList
  }
}

export function randomDirection() {
  return Math.floor(Math.random() * 4)
}


export function isCanvasTouch(x, y, width, height) {
  return (
    x < 0 ||
    x + width > config.moveRange.width ||
    y < 0 ||
    y + height > config.moveRange.height
  );
}

export function isModelTouch(x, y, width, height, models) {
  return models.find((model) => {
    const state =
      x + width <= model.x ||
      x >= model.x + model.width ||
      y + height <= model.y ||
      y >= model.y + model.height;
    return !state;
  });
}
