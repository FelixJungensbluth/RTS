// Map between index and filename
var IsometricMap = {

    // Array inwelchen alle Bilder für die Tiles gespeichert werden
    tiles: [
      // "images/dirt.png",
      "img/images/dirtHigh.png", 		// 0
      "img/images/grass.png",			// 1
      "img/images/water.png",			// 2
      "img/images/waterBeachCornerEast.png",	// 3
      "img/images/waterBeachCornerNorth.png",	// 4
      "img/images/waterBeachCornerSouth.png",	// 5
      "img/images/waterBeachCornerWest.png",	// 6
      "img/images/waterBeachEast.png",	// 7
      "img/images/waterBeachNorth.png",	// 8
      "img/images/waterBeachSouth.png",	// 9
      "img/images/waterBeachWest.png",	// 10
      "img/images/waterCornerEast.png",	// 11
      "img/images/waterCornerNorth.png",	// 12
      "img/images/waterCornerSouth.png",	// 13
      "img/images/waterCornerWest.png",	// 14
      "img/images/waterEast.png",		// 15
      "img/images/waterNorth.png",		// 16
      "img/images/waterSouth.png",		// 17
      "img/images/waterWest.png",		// 18
      "img/images/bridgeEast.png",		// 19
      "img/images/bridgeNorth.png",		// 20
      "img/images/crossroad.png",		// 21
      // "images/hillCornerEast.png",
      // "images/hillCornerNW.png",
      // "images/hillCornerSE.png",
      // "images/hillCornerWest.png",
      // "images/hillEast.png",
      // "images/hillNorth.png",
      // "images/hillRoadEast.png",
      // "images/hillRoadNorth.png",
      // "images/hillRoadSouth.png",
      // "images/hillRoadWest.png",
      // "images/hillSouth.png",
      // "images/hillWest.png",
      "img/images/lot.png",			// 22
      "img/images/lotCornerEast.png",		// 23
      "img/images/lotCornerNorth.png",	// 24
      "img/images/lotCornerSouth.png",	// 25
      "img/images/lotCornerWest.png",		// 26
      "img/images/lotEast.png",		// 27
      "img/images/lotExitEast.png",		// 28
      "img/images/lotExitNorth.png",		// 29
      "img/images/lotExitSouth.png",		// 30
      "img/images/lotExitWest.png",		// 31
      "img/images/lotNorth.png",		// 32
      "img/images/lotPark.png",		// 33
      "img/images/lotSouth.png",		// 34
      "img/images/lotWest.png",		// 35
      "img/images/roadCornerES.png",		// 36
      "img/images/roadCornerNE.png",		// 37
      "img/images/roadCornerNW.png",		// 38
      "img/images/roadCornerWS.png",		// 39
      "img/images/roadEast.png",		// 40
      "img/images/roadEndEast.png",		// 41
      "img/images/roadEndNorth.png",		// 42
      "img/images/roadEndSouth.png",		// 43
      "img/images/roadEndWest.png",		// 44
      "img/images/roadNorth.png",		// 45
      "img/images/roadTEast.png",		// 46
      "img/images/roadTNorth.png",		// 47
      "img/images/roadTSouth.png",		// 48
      "img/images/roadTWest.png", //49
      
    
    ],	

    // Array inwelchen alle Bilder für die Gebäude gespeichert werden
    buildings: [
      "img/images/turm.png",
    ],

    // Map-Layout
    map: [
           [2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2],
           [2,18, 18, 18, 18, 18, 18, 18, 18, 18, 18,2],
           [2,1, 0, 1, 0, 40, 0, 1, 0, 1, 0,2],
           [2,23, 35, 24, 1, 40, 1, 41, 1, 1, 1,2],
           [2,32, 33, 34, 1, 39, 46, 49, 45, 37, 1,2],
           [2,32, 33, 30, 45, 45, 49, 45, 45, 38, 1,2],
           [2,25, 28, 26, 36, 37, 1, 1, 1, 1, 1,2],
           [2,1, 48, 45, 38, 40, 1, 1, 3, 7, 7,2],
           [2,1, 40, 1, 1, 40, 1, 1, 9, 2, 2,2],
           [2,1, 40, 1, 1, 40, 1, 1, 5, 10, 10,2],
           [2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2],
      ],
  
    // Platzierte Gebäude Layout 
    buildingMap: [
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
   ]
  };
  