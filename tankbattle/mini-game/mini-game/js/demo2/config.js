
export default {
  canvas: {
      width: window.innerWidth,
      height: window.innerHeight,
  },

  moveRange: {
      width: Math.floor(window.innerWidth / 30) * 30,
      height: 510,
  },

  operate: {
      width: Math.floor(window.innerWidth / 30) * 30,
      height: 90
  },

  model: {
      width: 30,
      height: 30,
  },
  wall: {
      num: 30,
  },
  tank: {
      num: 5,
      step: 1,
  },
  bullet: {
      width: 4,
      height: 4,
      speed: {
          player: 5,
          tank: 3,
      },
  },
  player: {
      step: 10,
  },

  images: {
      wall: "images/wall/wall.gif",
      tankTop: "images/tank/top.gif",
      tankLeft: "images/tank/left.gif",
      tankRight: "images/tank/right.gif",
      tankBottom: "images/tank/bottom.gif",

      bullet: "images/bullet/bullet.jpg",

      playerTop: "images/player/top.gif",
      playerRight: "images/player/right.gif",
      playerBottom: "images/player/bottom.gif",
      playerLeft: "images/player/left.gif",
  },
}