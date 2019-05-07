var scene;
var pointer, player;
var target, targetx, targety;

const wizardVelocity = 200;

class Player {
    
    create_player() {
        var width = scene.cameras.main.width;
        var height = scene.cameras.main.height;
        
        player = scene.physics.add.sprite(width / 2, height / 2, 'player');
        player.setCollideWorldBounds(true);
        
        pointer = scene.input.activePointer;
        
        scene.cameras.main.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels);
        scene.cameras.main.startFollow(player);
    }
    
    constructor(scn) {
        scene = scn;
        this.create_player();
    }
    
    update(time, delta) {
      let rotation = Phaser.Math.Angle.Between(player.x, player.y, pointer.x + scene.cameras.main.scrollX, pointer.y + scene.cameras.main.scrollY) + 1.5708;

      if (pointer.leftButtonDown()) {
        targetx = pointer.x + scene.cameras.main.scrollX;
        targety = pointer.y + scene.cameras.main.scrollY;
        player.rotation = rotation;
        target = true;
      }

      if (target) {
        scene.physics.moveTo(player, targetx, targety, wizardVelocity);
      } else {
        player.rotation = rotation;
      }

      if (Math.abs(player.x - targetx) < 5 && Math.abs(player.y - targety) < 5) {
        target = false;
        player.setVelocityX(0);
        player.setVelocityY(0);
      }
    }
}

export default Player;