import { DataCenter } from './dataCenter';

export class Sprite {
  constructor(x, y, width, height, imgSrc) {
    //基础属性
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = new Image()
    this.imgSrc = imgSrc

    //额外属性
    this.isDestroy = false
    this.name = this.getName()

    this.dataCenter = new DataCenter()
  }

  getName() {
    return "sprite"
  }

  draw(ctx) {
    this.image.src = this.imgSrc
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  destroy() {
    this.isDestroy = true
  }

}