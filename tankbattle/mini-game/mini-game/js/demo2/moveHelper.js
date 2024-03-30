import config from "./config";
import { Bullets } from "./bullets"
import { Music } from './music';
import { DataCenter } from "./dataCenter";

const width = 30

export class MoveHelper {
  constructor() {
    this.initOperate()
    this.dataCenter = new DataCenter()
    this.music = new Music()

  }

  initOperate() {
    const top = { x: 30, y: 0, type: 0 }
    const right = { x: 60, y: 30, type: 1 }
    const bottom = { x: 30, y: 60, type: 2 }
    const left = { x: 0, y: 30, type: 3 }
    const fire = { x: 200, y: 30, type: 4 }

    this.operates = [top, right, bottom, left, fire]

  }

  render(ctx) {
    ctx.save()
    ctx.translate(0, config.moveRange.height)
    ctx.fillStyle = 'red'

    this.operates.forEach(direction => {
      ctx.fillRect(direction.x, direction.y, width, width)
    })

    ctx.restore()
  }

  handleTouch(e) {
    if (this.dataCenter.playerList.length === 0) return
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY

    const offsetY = config.moveRange.height

    this.operates.forEach(direction => {
      if (x >= direction.x
        && x <= direction.x + width
        && y >= direction.y + offsetY
        && y <= direction.y + width + offsetY) {
        if (direction.type == 4) {
          this.fire()
        } else {
          this.move(direction.type)
        }
      }
    })
  }

  fire() {
    this.dataCenter.bulletsList.push(new Bullets(this.dataCenter.playerList[0]))
    this.music.playShoot()

  }
  move(direction) {
    this.dataCenter.playerList[0].update(direction)
  }

}