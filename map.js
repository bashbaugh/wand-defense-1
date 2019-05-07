var scene;
var map, groundLayer;

class Map {
    
    create_map() {
        var width = scene.cameras.main.width;
        var height = scene.cameras.main.height;
        
        this.map = scene.make.tilemap({key: 'castle'});
        var groundTiles = this.map.addTilesetImage('castle1', 'tiles');
        groundLayer = this.map.createStaticLayer('ground', groundTiles, 0, 0);
    }
    
    constructor(scn) {
        scene = scn;
        this.create_map();
    }
}

export default Map;