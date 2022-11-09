import "phaser";
import PreloadScene from "./scenes/PreloadScene";
import MainScene from "./scenes/MainScene";

const DEFAULT_WIDTH = 1920;
const DEFAULT_HEIGHT = 1080;

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#ffffff",
  scale: {
    parent: "root",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 400 },
    },
  },
};

window.addEventListener("load", () => {
  const game = new Phaser.Game(config);
});
