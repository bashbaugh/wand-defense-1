import UI from './ui.js';
import Player from './player.js';
import Map from './map.js';

const wizardVelocity = 100;

var player, ui, map;

class Castle extends Phaser.Scene{

    constructor (config) {super(config)}
    preload () {}

    create (data)  {
        this.map = new Map(this);
        player = new Player(this);
        ui = new UI(this);
    }

    update(time, delta) {
      player.update(time, delta);
    }

}

export default Castle;
