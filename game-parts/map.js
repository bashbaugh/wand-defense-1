var scene;
var groundLayer;

class Map {
    
    create_map() {
        this.map = scene.make.tilemap({key: 'castle'});
        var groundTiles = this.map.addTilesetImage('castle1', 'tiles');
        groundLayer = this.map.createStaticLayer('ground', groundTiles, 0, 0);
        
        scene.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    }
    
    constructor(scn) {
        scene = scn;
        this.create_map();
    }
}

export default Map;