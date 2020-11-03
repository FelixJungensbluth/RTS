<!DOCTYPE html>
<html>
<head>
    
    <script src="less.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
    <link rel="stylesheet/less" type="text/css" href="globalstyles.less" />
    <link rel="stylesheet/less" type="text/css" href="landingpageStyle.less" />
</head>
<body>

    <script>
   var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    sprite.on('pointerdown', function (pointer) {

        this.setTint(0xff0000);

    });

    sprite.on('pointerout', function (pointer) {

        this.clearTint();

    });

    sprite.on('pointerup', function (pointer) {

        this.clearTint();

    });
}

    </script>

</body>
</html>