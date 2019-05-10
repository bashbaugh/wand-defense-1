var scene;
var width, height;
var drawbridge;

const camScrollIncrement = 80;

class UI {
    
    create() {
      var cam = scene.cameras.main;
      var keyboard = scene.input.keyboard;
      // Buttons
      drawbridge = scene.make.image({
        key: 'drawbridge_icon',
        x: width / 2 - 100,
        y: height - 32,
      })
      .setInteractive()
      .setScrollFactor(0)
      .on('pointerover', () => this.enterButtonActive())
      .on('pointerout', () => this.exitButtonActive())
      .on('pointerup', () => console.log("drawbridge toggled"));
      
      // Keyboard Controls
      keyboard.on('keydown-LEFT', () => {
        cam.stopFollow();
        cam.scrollX -= camScrollIncrement;
      });
      keyboard.on('keydown-RIGHT', () => {
        cam.stopFollow();
        cam.scrollX += camScrollIncrement;
      });
      keyboard.on('keydown-UP', () => {
        cam.stopFollow();
        cam.scrollY -= camScrollIncrement;
      });
      keyboard.on('keydown-DOWN', () => {
        cam.stopFollow();
        cam.scrollY += camScrollIncrement;
      });
      keyboard.on('keydown-SPACE', () => {
        scene.cameras.main.pan(scene.player.player.x, this.player.player.y, 400, 'Linear', (cam, progress) => {
            if (progress > 0.9) cam.startFollow(scene.player.player);
        });
      });
      
      // Minimap

    }
    
    constructor(scn) {
      scene = scn;
      width = scene.cameras.main.width;
      height = scene.cameras.main.height;
      this.create();
    }
    
    enterButtonActive() {
      this.uiAction = true;
      this.cursor('hover');
    }
    
    exitButtonActive() {
      this.uiAction = false;
      this.cursor('');
    }
    
    cursor(cur) {
      switch (cur) {
        case 'hover':
          scene.input.setDefaultCursor('url(assets/images/hover1.cur) 16 16, pointer');
          break;
        default:
          scene.input.setDefaultCursor('url(assets/images/cursor.cur) 16 16, pointer');
          break;
      }
    }
    
    update(time, delta) {
      // drawbridge.x = width / 2 - 100 + scene.cameras.main.scrollX;
      // drawbridge.y = height - 32 + scene.cameras.main.scrollY;
    }
}

export default UI;