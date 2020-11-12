var config = {
    type: Phaser.WEBGL,
    width: window.innerWidth-15,
    height: window.innerHeight-20,
    mousewheel: true,
    scene: {
      preload: preload,
      create: create,
      update: update,
    }
  };
  var game = new Phaser.Game(config);

  var tileWidthHalf; 
  var tileHeightHalf;

  var scene;

  var tileColumnOffset = 100; // pixels
  var tileRowOffset= 50; // pixels

  var originX= 480; // offset from left
  var originY= 400; // offset from top

  var Xtiles= 0; // Number of tiles in X-dimension
  var Ytiles= 0; // Number of tiles in Y-dimension

  var selectedTileX= 0;
  var selectedTileY= 0;

  var buildingPositionX= undefined; // X-Koordinate der platziereten Gebäude
  var buildingPositionY= undefined; // Y-Koordinate der platziereten Gebäude

  var name = "tiles"; // name der Tiles

  var cam; // Camrea 

  var zoom = 1; // Standart Zoomstufe

  var camMoveX =0; // Wert wie weit sich die Kamera in X-Richtung bewegt hat 
  var camMoveY =0 // Wert wie weit sich die Kamera in Y-Richtung bewegt hat 

  var selectionRectWidth = 0; // Breite des Auswahlrechteckes
  var selectionRectHeight = 0; // Höhe  des Auswahlrechteckes

  var selectionRectangle; // Auswahlrechteck

  var buildingArray = new Array(); // Array indem die platzierten Gebäude gespeichert werden

  var tilePosition;
  var tileName;
  var mousePosition;
  var belegt;
  var structureName;

  var isSelected = false;
  
  function preload() {
  this.buildingPositionX = new Array();
  this.buildingPositionY = new Array();
  this.tileImages = new Array();
  this.buildingsImages = new Array();
  this.load.image("hq","img/images/turm.png");

  // Load all the images before we run the app
  for(var i = 0; i < IsometricMap.tiles.length; i++) {
    this.tileImages[i] = IsometricMap.tiles[i];
    name = i;
    this.load.image(name, IsometricMap.tiles[i]);
  }


  }

  function create() {
    scene = this;
    this.input.mouse.disableContextMenu();
    
    this.Xtiles = IsometricMap.map.length;
    this.Ytiles = IsometricMap.map[0].length;

    // Kamera
    var cam = this.cameras.main;  
    cam.setZoom(1);
    moveCamera(this,cam);
    zoomCamera(this,cam);

    // Infotext
    tilePosition = this.add.text(20, 20, 'Tile Position:', { fontSize: '15px', fill: '#fff' });
    tileName = this.add.text(20, 40, 'Tile: ', { fontSize: '15px', fill: '#fff' });
    mousePosition = this.add.text(20, 60, 'Mouse Position: ', { fontSize: '15px', fill: '#fff' });
    belegt = this.add.text(20, 80, 'Tile Status: ', { fontSize: '15px', fill: '#fff' });
    structureName = this.add.text(20, 100, 'Gebäude: ', { fontSize: '15px', fill: '#fff' });
 
    // Bestimmung des ausgewählten Tiles
    this.input.on('pointermove', function (pointer) {
    mousePosition.setText('Mouse X: ' + pointer.x + ' Mouse Y: ' + pointer.y);

    pointer.x = (pointer.x - tileColumnOffset / 2 - originX)+camMoveX;
    pointer.y = (pointer.y - tileRowOffset / 2 - originY) + camMoveY;
    tileX = Math.round(pointer.x / tileColumnOffset - pointer.y / tileRowOffset);
    tileY = Math.round(pointer.x / tileColumnOffset + pointer.y / tileRowOffset);

    selectedTileX = tileX ;
    selectedTileY = tileY +1 ;

    // InfoText
    tilePosition.setText('Tile X: ' + selectedTileX + ' Tile Y: ' + selectedTileY);
    if(selectedTileX >=0 && selectedTileY >=0){
      if(IsometricMap.buildingMap[selectedTileX][selectedTileY].id == 1){
        belegt.setText('Tile Status: Belegt');
        isSelected = true;
      }else{
        isSelected = false;
        belegt.setText('Tile Status: frei');
      }
      var idxMap = IsometricMap.map[selectedTileX][selectedTileY];
      var idxBuilding = IsometricMap.buildingMap[selectedTileX][selectedTileY];
      tileName.setText('Tile:' + IsometricMap.tiles[idxMap].replace("img/images/",""));
      if(idxBuilding != 0){
       // structureName.setText('Gebäude:' + IsometricMap.buildings[idxBuilding-1].replace("img/images/",""));
      }else {
        structureName.setText('Gebäude: ');
      }
    }

    console.log(isSelected);
   }, this);
 
   // Platzierung der Gebäude
   this.input.on('pointerdown', function (pointer) {
    if (pointer.leftButtonDown()) {
       if(!isSelected){
          drawHq(selectedTileX,selectedTileY)
       }

       if(IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected) {
        IsometricMap.buildingMap[selectedTileX][selectedTileY].image.clearTint();
        IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected = false;
      }
    }

    if (pointer.rightButtonDown()) {
      
      if(isSelected) {
        IsometricMap.buildingMap[selectedTileX][selectedTileY].image.setTint(0x00BFFF  , 0.05);
        IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected = true;
      }
    }
      }, this);

      this.input.keyboard.on('keydown-A', function (event) {

        console.log('Before: ' + IsometricMap.buildingMap[selectedTileX][selectedTileY]);
       if(IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected){
        IsometricMap.buildingMap[selectedTileX][selectedTileY].image.destroy();
        IsometricMap.buildingMap[selectedTileX][selectedTileY] = 0;
        console.log('After: ' +IsometricMap.buildingMap[selectedTileX][selectedTileY]);

       }
    });
 
    // Map wrid gezeichnet   
    for(var Xi = (this.Xtiles - 1); Xi >= 0; Xi--) {
    for(var Yi = 0; Yi < this.Ytiles; Yi++) {
          drawTile(Xi, Yi);
    }
  }
}

  // Ein Tile wird gezeichnet 
  function drawTile(Xi, Yi) {
  var offX = Xi * this.tileColumnOffset / 2 + Yi * this.tileColumnOffset / 2 + this.originX;
  var offY = Yi * this.tileRowOffset / 2 - Xi * this.tileRowOffset / 2 + this.originY;

  var imageIndex = IsometricMap.map[Xi][Yi];
  scene.add.image(offX, offY, imageIndex);
  }

function update (time, delta)
{

}