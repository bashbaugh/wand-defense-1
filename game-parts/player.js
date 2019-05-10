var scene;
var pointer;
var target, targetx, targety;

const wizardVelocity = 200;

class Player {
    
    create() {
        
    }
    
    constructor(scn) {
        scene = scn;
        var width = scene.cameras.main.width;
        var height = scene.cameras.main.height;
        
        this.player = scene.physics.add.sprite(width / 2, height / 2, 'player');
        
        pointer = scene.input.activePointer;
        
        scene.cameras.main.startFollow(this.player);
    }
    
    update(time, delta) {
      let rotation = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.x + scene.cameras.main.scrollX, pointer.y + scene.cameras.main.scrollY) + 1.5708;

      if (pointer.leftButtonDown() && !scene.ui.uiAction) {
        targetx = pointer.x + scene.cameras.main.scrollX;
        targety = pointer.y + scene.cameras.main.scrollY;
        this.player.rotation = rotation;
        target = true;
      }

      if (target) {
        scene.physics.moveTo(this.player, targetx, targety, wizardVelocity);
      } else {
        this.player.rotation = rotation;
      }

      if (Math.abs(this.player.x - targetx) < 5 && Math.abs(this.player.y - targety) < 5) {
        target = false;
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
      }
    }
}

export default Player;