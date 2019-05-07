var scene;

class UI {
    
    create_ui() {
        var width = scene.cameras.main.width;
        var height = scene.cameras.main.height;
        
        var drawbridge_icon = scene.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: 'RAISE DRAWBRIDGE',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
    }
    
    constructor(scn) {
        scene = scn;
        this.create_ui();
    }
}

export default UI;