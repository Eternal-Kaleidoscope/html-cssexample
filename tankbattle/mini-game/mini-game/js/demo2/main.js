import config from "./config"
import { DataCenter } from "./dataCenter"
import { MoveHelper } from "./moveHelper"
import { Bullets } from './bullets'
import { Music } from './music';

const ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.dataCenter = new DataCenter()
    this.moveHelper = new MoveHelper()
    this.frame = 0
    this.music = new Music()

    this.beginGame()
  }

  beginGame() {
    this.dataCenter.initData()
    canvas.removeEventListener(
      'touchstart',
      (e) => this.touchHandler(e)
    )
    canvas.addEventListener('touchstart', (e) => this.touchHandler(e))

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
    this.moveHelper.handleTouch(e)
  }


  loop() {
    this.frame++
    this.update()
    this.render()
    this.aniId = window.requestAnimationFrame(
      () => this.loop(),
      canvas
    )
  }

  update() {
    this.dataCenter.filterDestroy()
    this.dataCenter.enemyList.forEach(i => {
      i.update()
    })
    if (this.frame % 60 === 0) {
      this.dataCenter.enemyList.forEach(i => {
        this.dataCenter.bulletsList.push(new Bullets(i))
      })
    }
    this.dataCenter.bulletsList.forEach(i => {
      i.update()
    })
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, config.canvas.width, config.canvas.height)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, config.moveRange.width, config.moveRange.height)

    this.dataCenter.wallList.forEach(i => {
      i.render(ctx)
    })

    this.dataCenter.enemyList.forEach(i => {
      i.render(ctx)
    })

    this.dataCenter.playerList.forEach(i => {
      i.render(ctx)
    })
    this.dataCenter.bulletsList.forEach(i => {
      i.render(ctx)
    })
    this.moveHelper.render(ctx)
  }

  /***
   * 4种模型
   * 静态：
   *  wall
   * 动态： 
   *  tank ( enemy, player)
   *  bullets
   * 
   * 
   */
}
