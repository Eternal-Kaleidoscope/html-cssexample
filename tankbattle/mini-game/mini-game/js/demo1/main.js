import Ball from './ball';
import Lollipop from './lollipop';
import { randomHexColor } from './util';
const ctx = canvas.getContext('2d')

const screenWidth = window.innerWidth
const R = 100
const r = 10
const slowSpeed = Math.PI / 180
const fastSpeed = 3 * slowSpeed
const lollipopCount = 6
const shootCount = 6
const offsetY = 300
let isGameOver = false
let speed = slowSpeed
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.beginGame()
    this.init()
  }

  init() {
    this.lollipopArray = []
    this.shootArray = []

    for (let index = 0; index < lollipopCount; index++) {
      let angle = Math.PI * 2 / lollipopCount * index
      let centerX = R * Math.cos(angle)
      let centerY = R * Math.sin(angle)

      let lollipop = new Lollipop(centerX, centerY, r, "#000", angle)
      this.lollipopArray.push(lollipop)
    }

    for (let index = 0; index < shootCount; index++) {
      let centerX = 0
      let centerY = offsetY + index * 2 * r
      let shoot = new Ball(centerX, centerY, r, randomHexColor())
      this.shootArray.push(shoot)
    }
  }

  beginGame() {
    canvas.removeEventListener(
      'touchstart',
      (e) => this.touchHandler(e)
    )
    canvas.addEventListener('touchstart', (e) => this.touchHandler(e))

    window.cancelAnimationFrame(this.aniId)

    this.aniId = window.requestAnimationFrame(
      () => this.loop(),
      canvas
    )
  }

  touchHandler(e) {
    if (isGameOver) {
      return
    }
    this.shootBall()
  }

  shootBall() {
    if (this.shootArray.length == 0) {
      return
    }
    // shift
    const shootItem = this.shootArray.shift()

    //  更新位置
    this.updateShootPosition()

    // 碰撞检测
    this.isCollide(0, R)

    //  插入到正下方
    const lollipop = new Lollipop(0, R, r, shootItem.color, Math.PI / 2)
    this.lollipopArray.push(lollipop)
  }

  updateShootPosition() {
    this.shootArray.forEach((shoot, index) => {
      shoot.update(0, 300 + 2 * r * index)
    })
  }

  isCollide(x, y) {
    this.lollipopArray.forEach(lollipop => {
      const distance = Math.sqrt((lollipop.centerX - x) * (lollipop.centerX - x) + (lollipop.centerY - y) * (lollipop.centerY - y))
      if (distance < 2 * lollipop.radius) {
        isGameOver = true
      }
    })
  }

  loop() {
    this.update()
    this.render()
    this.aniId = window.requestAnimationFrame(
      () => this.loop(),
      canvas
    )
  }

  update() {
    if (isGameOver) {
      return
    }

    if (!isGameOver && this.shootArray.length === 0) {
      speed = fastSpeed
    }

    this.lollipopArray.forEach(item => {
      item.angle = item.angle + speed

      let centerX = R * Math.cos(item.angle)
      let centerY = R * Math.sin(item.angle)

      item.update(centerX, centerY)
    });

  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = 'black';

    ctx.save()
    ctx.translate(screenWidth / 2, 200);

    this.lollipopArray.forEach(i => {
      i.render(ctx)
    })
    this.shootArray.forEach(i => {
      i.render(ctx)
    })

    //绘制大圆
    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.strokeStyle = 'black'
    ctx.arc(0, 0, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.restore()

    if (isGameOver) {
      ctx.font = "30px Georgia";
      ctx.fillStyle = 'red';
      ctx.fillText("Game Over", 10, 50);
    }
  }

}
