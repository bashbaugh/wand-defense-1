import UI from './game-parts/ui.js';
import Player from './game-parts/player.js';
import Map from './game-parts/map.js';

class Castle extends Phaser.Scene{

    constructor (config) {super(config)}
    preload () {}

    create (data)  {
        this.map = new Map(this);
        this.player = new Player(this);
        this.ui = new UI(this);
    }

    update(time, delta) {
      this.ui.update(time, delta);
      this.player.update(time, delta);
    }

}

export default Castle;
