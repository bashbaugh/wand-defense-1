import UI from './game-parts/ui.js';
import Player from './game-parts/player.js';
import Map from './game-parts/map.js';

class Castle extends Phaser.Scene{

    constructor (config) {super(config)}
    preload () {}

    create (data)  {
        this.xxx = 500;
        this.map = new Map(this);
        this.player = new Player(this);
        this.ui = new UI(this);
        
        this.cameras.main.setName('main').setViewport(0, 0, 800, 500);
    }

    update(time, delta) {
      this.ui.update(time, delta);
      this.player.update(time, delta);
    }

}

export default Castle;
