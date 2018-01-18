$(()=>{

  // This array contains all of the grids and their values
  const gridNumber = 16;

  const allGrids = [
    // rowOneColumnOne
    {
      xValue: 1,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnTwo
    {
      xValue: 2,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnThree
    {
      xValue: 3,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnFour
    {
      xValue: 4,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnOne
    {
      xValue: 1,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnTwo
    {
      xValue: 2,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnThree
    {
      xValue: 3,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnFour
    {
      xValue: 4,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnOne
    {
      xValue: 1,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnTwo
    {
      xValue: 2,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnThree
    {
      xValue: 3,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnFour
    {
      xValue: 4,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnOne
    {
      xValue: 1,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnTwo
    {
      xValue: 2,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnThree
    {
      xValue: 3,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnFour
    {
      xValue: 4,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    }
  ]

  const maxXvalue = 4;
  const maxYvalue = 4;
  var errorPresent = [];

  // Here are the starting values of the blueTeam
  const blueTeam = {
    playerName: "Player 1",
    teamName: "blue",
    infantry: [
      {
        name: "1-5 BN",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "circleCenter",
        nextDirection: "circleCenter",
        xValue: 1,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null
      }
    ],
    cavalry: [
      {
        name: "2ND RGT",
        type: "CAV",
        active: true,
        health: 10,
        attack: false,
        direction: "circleCenter",
        nextDirection: "circleCenter",
        xValue: 2,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null
      }
    ],
    artillery: [
      {
        name: "2-6 BN",
        type: "AR",
        active: true,
        health: 10,
        attack: false,
        direction: "circleCenter",
        nextDirection: "circleCenter",
        xValue: 3,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null
      }
    ]
  };

  // Here are the starting values of the blueTeam
  const redTeam = {
    playerName: "Player 2",
    teamName: "red",
    infantry: [
      {
        name: "1-5 BN",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "circleCenter",
        nextDirection: "circleCenter",
        xValue: 1,
        yValue: 4
      }
    ],
    cavalry: [
      {
        name: "2ND RGT",
        type: "CAV",
        active: true,
        health: 10,
        attack: false,
        direction: "circleCenter",
        nextDirection: "circleCenter",
        xValue: 2,
        yValue: 4
      }
    ],
    artillery: [
      {
        name: "2-6 BN",
        type: "AR",
        active: true,
        health: 10,
        attack: false,
        direction: "circleCenter",
        nextDirection: "circleCenter",
        xValue: 3,
        yValue: 4
      }
    ]
  };

  // This will compare a single grid to a all of a team's units IOT see if any of those units should be added to the grid's bluePresent or redPresent arrays
  const ifTeamPresent = (gridNumber,oneTeam) => {
    if (oneTeam == blueTeam) {
      for (var i = 0; i < blueTeam.infantry.length; i++) {
        if (allGrids[gridNumber].xValue == blueTeam.infantry[i].xValue && allGrids[gridNumber].yValue == blueTeam.infantry[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.infantry[i]);
        } else if (allGrids[gridNumber].xValue == blueTeam.cavalry[i].xValue && allGrids[gridNumber].yValue == blueTeam.cavalry[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.cavalry[i]);
        } else if (allGrids[gridNumber].xValue == blueTeam.artillery[i].xValue && allGrids[gridNumber].yValue == blueTeam.artillery[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.artillery[i]);
        };
        //add something here that will REMOVE that unit if moved OUT of that grid
      }
    } else if (oneTeam == redTeam) {
      for (var i = 0; i < redTeam.infantry.length; i++) {
        if (allGrids[gridNumber].xValue == redTeam.infantry[i].xValue && allGrids[gridNumber].yValue == redTeam.infantry[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.infantry[i]);
        } else if (allGrids[gridNumber].xValue == redTeam.cavalry[i].xValue && allGrids[gridNumber].yValue == redTeam.cavalry[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.cavalry[i]);
        } else if (allGrids[gridNumber].xValue == redTeam.artillery[i].xValue && allGrids[gridNumber].yValue == redTeam.artillery[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.artillery[i]);
        };
        //add something here that will REMOVE that unit if moved OUT of that grid
      }
    }
  };

  // Now that one grid can recieve one present units, this function can carry that out for ALL of the grids
  const unitsInAllGrids = () =>{
    for (var i = 0; i < allGrids.length; i++) {
      ifTeamPresent(i,blueTeam);
      ifTeamPresent(i,redTeam);
    }
  };

  unitsInAllGrids();
  console.log(allGrids)

  // The blueTeam starts by default
  var currentPlayer = blueTeam;

  // To display all of a team's units
  const infantryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.infantry.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueIn" + i;
        $(box).css('background-color','blue').text('A');
        displayTeam.infantry[i].columnNum = i
      } else {
        var box = "#redIn" + i;
        $(box).css('background-color','red');
      };
    };
  };
  infantryColumn(blueTeam);

  const artilleryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.artillery.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueAr" + i;
        $(box).css('background-color','blue').text('A');
      } else {
        var box = "#redAr" + i;
        $(box).css('background-color','red');
      };
    };
  };
  artilleryColumn(blueTeam);

  const cavalryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.cavalry.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueCav" + i;
        $(box).css('background-color','blue').text('A');
      } else {
        var box = "#redCav" + i;
        $(box).css('background-color','red');
      };
    };
  };
  cavalryColumn(blueTeam);

  // The default settings for a selectedUnit
  var selectedUnit = null;
  var selectedAttack = false;

  // This connects the attackButton in HTML with the selectedUnit's attack mode
  $('#attackButton').click( ()=> {
    selectedUnit.attack = true;
    $('#attackButton').css('background-color','blue').css('color','white');
    $('#defendButton').css('background-color','white').css('color','black');
    console.log(selectedUnit);
  });

  // This connects the defendButton in HTML with the selectedUnit's attack mode
  $('#defendButton').click( ()=> {
    selectedUnit.attack = false;
    $('#attackButton').css('background-color','white').css('color','black');
    $('#defendButton').css('background-color','red').css('color','white');
    console.log(selectedUnit);
  })

  //This function makes the arrows show the selectedUnit's NEXT direction
  const showUnitDirection = ()=> {
    if (selectedUnit.direction == "north") {
      $("#north").css('background-color','grey');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#circleCenter").css('background-color','white');
    } else if (selectedUnit.direction == "east") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','grey');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#circleCenter").css('background-color','white');
    } else if (selectedUnit.direction == "south") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','grey');
      $("#west").css('background-color','white');
      $("#circleCenter").css('background-color','white');
    } else if (selectedUnit.direction == "west") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','grey');
      $("#circleCenter").css('background-color','white');
    } else if (selectedUnit.direction == "circleCenter") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#circleCenter").css('background-color','grey');
    } else {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#circleCenter").css('background-color','white');
    };
  }

  // Here is the function that displays the selectedUnit's CURRENT direction
  const showUnitNextDirection = ()=> {
    if (selectedUnit.nextDirection == "north") {
      $("#north").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "east") {
      $("#east").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "south") {
      $("#south").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "west") {
      $("#west").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "circleCenter") {
      $("#circleCenter").css('background-color','yellow');
    }  else {
      console.log("error in showUnitDirection function.")
    }
  }

// This is how the arrow buttons change a unit's nextDirections

  $('#north').click( ()=> {
    selectedUnit.nextDirection = "north";
    console.log("nextDirection: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#east').click( ()=> {
    selectedUnit.nextDirection = "east";
    console.log("nextDirection: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#south').click( ()=> {
    selectedUnit.nextDirection = "south";
    console.log("nextDirection: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#west').click( ()=> {
    selectedUnit.nextDirection = "west";
    console.log("nextDirection: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#circleCenter').click( ()=> {
    selectedUnit.nextDirection = "circleCenter";
    console.log("nextDirection: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });

// This determines a) if a unit is going to move and b) where it's new location will be
  const issueOneOrder = () => {
    if (selectedUnit.attack == true) {
      if (selectedUnit.nextDirection == "north" && selectedUnit.yValue > 1) {
        selectedUnit.nextXvalue = selectedUnit.xValue;
        selectedUnit.nextYvalue = selectedUnit.yValue - 1;
      } else if (selectedUnit.nextDirection == "east" && selectedUnit.xValue < maxXvalue) {
        selectedUnit.nextXvalue = selectedUnit.xValue + 1;
        selectedUnit.nextYvalue = selectedUnit.yValue;
      } else if (selectedUnit.nextDirection == "south" && selectedUnit.yValue < maxYvalue) {
        selectedUnit.nextXvalue = selectedUnit.xValue;
        selectedUnit.nextYvalue = selectedUnit.yValue + 1;
      } else if (selectedUnit.nextDirection == "west" && selectedUnit.xValue > 1) {
        selectedUnit.nextXvalue = selectedUnit.xValue - 1;
        selectedUnit.nextYvalue = selectedUnit.yValue;
      } else {
        selectedUnit.nextXvalue = selectedUnit.xValue;
        selectedUnit.nextYvalue = selectedUnit.yValue;
        errorPresent.push(selectedUnit.name);
      };
    } else if (selectedUnit.attack == false) {
      selectedUnit.direction = selectedUnit.nextDirection;
    } else {
      console.log("An error occurred in issueOneOrder.");
    };
  };

  // In this, a unit's the values of "xValue", "yValue", and "direction" are all changed to their "next" partner's values, and the "nextValues" are now null.
  const changeCurrentValues = () => {
    selectedUnit.xValue = selectedUnit.nextXvalue;
    selectedUnit.nextXvalue = null;
    selectedUnit.yValue = selectedUnit.nextYvalue;
    selectedUnit.nextYvalue = null;
    selectedUnit.direction = selectedUnit.nextDirection;
    selectedUnit.nextDirection.null;
  };

  const issueAllOrders = () => {
    for (var i = 0; i < currentPlayer.infantry.length; i++) {
      selectedUnit = currentPlayer.infantry[i];
      issueOneOrder();
    };
    for (var i = 0; i < currentPlayer.cavalry.length; i++) {
      selectedUnit = currentPlayer.cavalry[i];
      issueOneOrder();
    };
    for (var i = 0; i < currentPlayer.artillery.length; i++) {
      selectedUnit = currentPlayer.artillery[i];
      issueOneOrder();
    };
    if (errorPresent.length == 0) {

      // Insert the battle function here

      for (var i = 0; i < currentPlayer.infantry.length; i++) {
        selectedUnit = currentPlayer.infantry[i];
        changeCurrentValues();
      };
      for (var i = 0; i < currentPlayer.cavalry.length; i++) {
        selectedUnit = currentPlayer.cavalry[i];
        changeCurrentValues();
      };
      for (var i = 0; i < currentPlayer.artillery.length; i++) {
        selectedUnit = currentPlayer.artillery[i];
        changeCurrentValues();
      };
      // console.log(currentPlayer);
      showGridUnits(currentPlayer,gridNumber);
      currentPlayer = redTeam;
      console.log("It is now the " + currentPlayer.teamName + " team's turn.");
    } else {
      for (var i = 0; i < errorPresent.length; i++) {
        console.log("The order for " + errorPresent[i] + " cannot be carried out. Change their order before they recieve them.")
      };
      errorPresent = [];
    };
  };

  $('#ordersButton').click(issueAllOrders);

  // This displays the selected unit's values
  const selectedValues = () =>{
    console.log(selectedUnit);
    $("#unitName").text(selectedUnit.name);
    if (selectedUnit.attack == true) {
      $("#attackButton").css('color','white').css('background-color','green');
      $("#defendButton").css('color','black').css('background-color','white');
    } else {
      $("#attackButton").css('color','black').css('background-color','white');
      $("#defendButton").css('color','white').css('background-color','red');
    };
    $("#healthReading").text(selectedUnit.health);
    showUnitDirection();
  };

  // How to select a blueTeam infantry unit
  const blueIn0Select = () =>{
    selectedUnit = blueTeam.infantry[0];
    selectedValues();
  };
  $("#blueIn0").click(blueIn0Select);

  const blueIn1Select = () =>{
    selectedUnit = blueTeam.infantry[1];
    selectedValues();
  };
  $("#blueIn1").click(blueIn0Select);

  const blueIn2Select = () =>{
    selectedUnit = blueTeam.infantry[2];
    selectedValues();
  };
  $("#blueIn2").click(blueIn0Select);

  const blueIn3Select = () =>{
    selectedUnit = blueTeam.infantry[3];
    selectedValues();
  };
  $("#blueIn3").click(blueIn0Select);

  const blueIn4Select = () =>{
    selectedUnit = blueTeam.infantry[4];
    selectedValues();
  };
  $("#blueIn4").click(blueIn0Select);

  // This will show all of the units in their current grid squares. It is run inside of the "makeOneGrid" and "issueAllOrders" functions.
  const showGridUnits = (oneTeam,gridNumber) => {
    // var gridID = "#x" + allGrids[gridNumber].xValue + "y" + allGrids[gridNumber].yValue;
    // var gridIDnorth = gridID + "_north";
    // var gridIDeast = gridID + "_east";
    // var gridIDsouth = gridID + "_south";
    // var gridIDwest = gridID + "_west";
    // var gridIDcenter = gridID + "_center";
    for (var i = 0; i < gridNumber; i++) {
      var iLoop = i;
      var gridID = "#x" + allGrids[iLoop].xValue + "y" + allGrids[iLoop].yValue;
      var gridIDnorth = gridID + "_north";
      var gridIDeast = gridID + "_east";
      var gridIDsouth = gridID + "_south";
      var gridIDwest = gridID + "_west";
      var gridIDcenter = gridID + "_center";
      for (var i = 0; i < oneTeam.infantry.length; i++) {
        if (oneTeam.infantry[i].xValue == allGrids[iLoop].xValue && oneTeam.infantry[i].yValue == allGrids[iLoop].yValue) {
          if (oneTeam.infantry[i].direction == "north") {
            $(gridIDnorth).text("IN");
          } else if (oneTeam.infantry[i].direction == "east") {
            $(gridIDeast).text("IN");
          } else if (oneTeam.infantry[i].direction == "south") {
            $(gridIDsouth).text("IN");
          } else if (oneTeam.infantry[i].direction == "west") {
            $(gridIDwest).text("IN");
          } else if (oneTeam.infantry[i].direction == "circleCenter") {
            $(gridIDcenter).text("IN");
          } else {
            console.log("No direction")
          }
        }
      };
      for (var i = 0; i < oneTeam.cavalry.length; i++) {
        if (oneTeam.cavalry[i].xValue == allGrids[iLoop].xValue && oneTeam.cavalry[i].yValue == allGrids[iLoop].yValue) {
          if (oneTeam.cavalry[i].direction == "north") {
            $(gridIDnorth).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "east") {
            $(gridIDeast).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "south") {
            $(gridIDsouth).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "west") {
            $(gridIDwest).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "circleCenter") {
            $(gridIDcenter).text("CAV");
          } else {
            console.log("No direction")
          }
        }
      };
      for (var i = 0; i < oneTeam.artillery.length; i++) {
        if (oneTeam.artillery[i].xValue == allGrids[iLoop].xValue && oneTeam.artillery[i].yValue == allGrids[iLoop].yValue) {
          if (oneTeam.artillery[i].direction == "north") {
            $(gridIDnorth).text("AR");
          } else if (oneTeam.artillery[i].direction == "east") {
            $(gridIDeast).text("AR");
          } else if (oneTeam.artillery[i].direction == "south") {
            $(gridIDsouth).text("AR");
          } else if (oneTeam.artillery[i].direction == "west") {
            $(gridIDwest).text("AR");
          } else if (oneTeam.artillery[i].direction == "circleCenter") {
            $(gridIDcenter).text("AR");
          } else {
            console.log("No direction")
          }
        }
      };
    }
  };

  // This function will generate random values for a grid and give it the correct CSS settings
  const makeOneGrid = (gridNumber) => {
    const pickTerrain = () => {
      const pickValue = Math.random();
      if (pickValue < 0.3) {
        allGrids[gridNumber].terrain = "woods"
      } else if (pickValue >= 0.3 && pickValue < 0.4) {
        allGrids[gridNumber].terrain = "hill"
      } else if (pickValue >= 0.4 && pickValue < 0.5) {
        allGrids[gridNumber].terrain = "water"
      } else {
        allGrids[gridNumber].terrain = "field"
      }
    };
    pickTerrain();
    const pickCover = () => {
      const pickValue = Math.random();
      if (pickValue < 0.2) {
        allGrids[gridNumber].cover = "heavy"
      } else if (pickValue >= 0.2 && pickValue < 0.8) {
        allGrids[gridNumber].cover = "light"
      } else {
        allGrids[gridNumber].cover = "none"
      }
    };
    pickCover();
    var gridID = "#x" + allGrids[gridNumber].xValue + "y" + allGrids[gridNumber].yValue;
    const coverColor = () => {
      if (allGrids[gridNumber].cover == "heavy") {
        $(gridID).css('background-color','green')
      } else if (allGrids[gridNumber].cover == "light") {
        $(gridID).css('background-color','lightgreen')
      } else if (allGrids[gridNumber].cover == "none") {
        $(gridID).css('background-color','orange')
      } else {
        console.log("coverColor error")
      }
    };
    coverColor();
    const terrainImage = () => {
      var gridIDcenter = gridID + "_center";
      if (allGrids[gridNumber].terrain == "woods") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/forest.png")')
      } else if (allGrids[gridNumber].terrain == "hill") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/hill_noBackground.png")')
      } else if (allGrids[gridNumber].terrain == "water") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/pond_noBackground.png")')
      }
    };
    terrainImage();
    showGridUnits(blueTeam,gridNumber);
    showGridUnits(redTeam,gridNumber);
  };

  // This uses the "makeOneGrid" function to give values to ALL of the grid squares
  const makeAllGrids = (howMany) => {
    console.log("makeAllGrids");
    for (var i = 0; i < howMany; i++) {
      makeOneGrid(i);
      // console.log(allGrids[i]);
    }
  };
  makeAllGrids(gridNumber);

})
