var scene;
var width, height;
var drawbridge;

class UI {
    
    create_ui() {
      drawbridge = scene.make.image({
        key: 'drawbridge_icon',
        x: width / 2 - 100,
        y: height - 32
      })
      .setInteractive()
      .on('pointerover', () => this.enterButtonActive())
      .on('pointerout', () => this.exitButtonActive())
      .on('pointerup', () => console.log("drawbridge toggled"));
    }
    
    constructor(scn) {
      scene = scn;
      width = scene.cameras.main.width;
      height = scene.cameras.main.height;
      this.create_ui();
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
      
    }
}

export default UI;