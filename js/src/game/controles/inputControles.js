// Ausgewaeltes Gebaeude wird geloescht wenn A gedrueckt wird  
function delteStructure(szene) {
    szene.input.keyboard.on('keydown-A', function (event) {
        if (IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected) {

            // Bild wird geloescht
            IsometricMap.buildingMap[selectedTileX][selectedTileY].image.destroy();
            IsometricMap.buildingMap[selectedTileX][selectedTileY] = 0;
        }
    });
}

// Gebaeude werden durch linksklick platziert
function placeBuilding(szene) {
    szene.input.on('pointerdown', function (pointer) {
        if (pointer.leftButtonDown()) {

            // wenn Tile frei ist kann Gebaeude platziert ist 
            if (!isSelected) {
                drawHq(selectedTileX, selectedTileY)
            }

            // Auswahl wird entfernt 
            if (IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected) {
                IsometricMap.buildingMap[selectedTileX][selectedTileY].image.clearTint();
                IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected = false;
            }
        }

        if (pointer.rightButtonDown()) {

            // Auswahl wird hinzugefuegt.
            if (isSelected) {
                IsometricMap.buildingMap[selectedTileX][selectedTileY].image.setTint(0x00BFFF, 0.05);
                IsometricMap.buildingMap[selectedTileX][selectedTileY].isSelected = true;
            }

        }
    }, this);
}

// Infos zum letzten klick werden zwischengespeichert 
function getLastClicked(szene) {

    // Objekt mit Mausinfos wird erstellt 
    var lastClickInfo = {
        "button": "none",
        "tilePositionX": "0",
        "tilePositionY": "0",
        "positionX": "0",
        "positionY": "0",
    }

    // wenn Maus geklicked wird, werden Infos des Objekts geupdated   
    szene.input.on('pointerdown', function (pointer) {

        // Arrary wird geleert, sodas immer nur ein Objekt im Array ist 
        if (lastClicked.length != 0) {
            this.lastClicked.pop();
        }

        if (pointer.leftButtonDown()) {
            lastClickInfo.button = "links"
        }

        if (pointer.rightButtonDown()) {
            lastClickInfo.button = "rechts"
        }

        if (pointer.middleButtonDown()) {
            lastClickInfo.button = "mittel"
        }

        lastClickInfo.tilePositionX = selectedTileX;
        lastClickInfo.tilePositionY = selectedTileY;

        lastClickInfo.positionX = pointer.x;
        lastClickInfo.positionY = pointer.Y;

        this.lastClicked.push(lastClickInfo);
    }, this);


}