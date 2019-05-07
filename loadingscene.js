class Loading extends Phaser.Scene{
  constructor(config) {
    super(config);
  }

  loadAllAssets() {
    var img = 'assets/images/';
    var sps = 'assets/spritesheets/';
    this.load.tilemapTiledJSON('castle', 'assets/tilemaps/castle_basic.json');
    this.load.spritesheet('tiles', 'assets/tilesets/castle1.png', {frameWidth: 64, frameHeight: 64});
    this.load.image('player', sps + 'wizardplayer.png');
    this.load.image('drawbrdige_icon', img + 'lower_raise_drawbridge.png')
  }

  preload() {
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;

    var percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: 'Please Wait...',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });

    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
    });

    this.load.on('fileprogress', function (file) {
        assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
        percentText.setText("100%");
        assetText.setText("All Assets Loaded");

        setTimeout(() => this.scene.scene.start('menu'), 500);
    });

    this.scene.scene.input.setDefaultCursor('url(assets/images/cursor.cur) 16 16, pointer');

    this.loadAllAssets();
  }
}

export default Loading;
