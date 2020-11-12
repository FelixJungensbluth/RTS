function delteStructure(szene){
    szene.input.keyboard.on('keydown-A', function (event) {

        console.log('Before: ' + IsometricMap.buildingMap[selectedTileX][selectedTileY]);
       if(IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected){
        IsometricMap.buildingMap[selectedTileX][selectedTileY].image.destroy();
        IsometricMap.buildingMap[selectedTileX][selectedTileY] = 0;
        console.log('After: ' +IsometricMap.buildingMap[selectedTileX][selectedTileY]);

       }
    });
}