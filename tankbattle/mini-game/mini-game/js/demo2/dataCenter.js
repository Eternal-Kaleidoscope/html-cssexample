import { GenerateUtil } from './generateUtil';

let instance

export class DataCenter {
  constructor() {
    if (instance) return instance
    instance = this
    this.util = new GenerateUtil()
  }
  initData() {
    this.wallList = this.util.createWall()
    this.enemyList = this.util.createEnemy()
    this.playerList = this.util.createPlayer()
    this.bulletsList = []
  }


  filterDestroy() {
    this.wallList = this.wallList.filter(i => i.isDestroy === false)
    this.enemyList = this.enemyList.filter(i => i.isDestroy === false)
    this.bulletsList = this.bulletsList.filter(i => i.isDestroy === false)
    this.playerList = this.playerList.filter(i => i.isDestroy === false)

    if (this.enemyList.length === 0) {
      this.isWin = true
    }
    if (this.playerList.length === 0) {
      this.isGameOver = true
    }
  }
}