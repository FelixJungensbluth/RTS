// Darstellung des Hauptquartier
function drawHq(Xi, Yi) {
  var offX = Xi * this.tileColumnOffset / 2 + Yi * this.tileColumnOffset / 2 + this.originX;
  var offY = Yi * this.tileRowOffset / 2 - Xi * this.tileRowOffset / 2 + this.originY;
  building = scene.add.image(offX, offY, 'hq');
  var hq = {
    "id": "1",
    "positionX": Xi,
    "positionY": Yi,
    "AnzhalTilesX": "1",
    "AnzhalTilesY": "1",
    "image": building,
  }
  
  this.buildingArray.push(hq);
  IsometricMap.buildingMap[Xi][Yi] = 1;
  }