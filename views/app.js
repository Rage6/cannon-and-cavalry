$(()=>{

  // This array contains all of the grids and their values
  const allGrids = [
    // rowOneColumnOne
    {
      xValue: 1,
      yValue: 1,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnTwo
    {
      xValue: 2,
      yValue: 1,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnThree
    {
      xValue: 3,
      yValue: 1,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnFour
    {
      xValue: 4,
      yValue: 1,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnOne
    {
      xValue: 1,
      yValue: 2,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnTwo
    {
      xValue: 2,
      yValue: 2,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnThree
    {
      xValue: 3,
      yValue: 2,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnFour
    {
      xValue: 4,
      yValue: 2,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnOne
    {
      xValue: 1,
      yValue: 3,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnTwo
    {
      xValue: 2,
      yValue: 3,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnThree
    {
      xValue: 3,
      yValue: 3,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnFour
    {
      xValue: 4,
      yValue: 3,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnOne
    {
      xValue: 1,
      yValue: 4,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnTwo
    {
      xValue: 2,
      yValue: 4,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnThree
    {
      xValue: 3,
      yValue: 4,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnFour
    {
      xValue: 4,
      yValue: 4,
      terrain: null,
      elevation: null,
      bluePresent: [],
      redPresent: []
    }
  ]

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
        direction: "south",
        xValue: 1,
        yValue: 1
      }
    ],
    cavalry: [
      {
        name: "2ND RGT",
        type: "CAV",
        active: true,
        health: 10,
        attack: false,
        direction: "south",
        xValue: 2,
        yValue: 1
      }
    ],
    artillery: [
      {
        name: "2-6 BN",
        type: "AR",
        active: true,
        health: 10,
        attack: false,
        direction: "south",
        xValue: 3,
        yValue: 1
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
        direction: "north",
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
        direction: "north",
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
        direction: "north",
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

  // Now that one grid can recieve an present units, this function can carry that out for ALL of the grids
  const unitsInAllGrids = () =>{
    for (var i = 0; i < allGrids.length; i++) {
      ifTeamPresent(i,blueTeam);
      ifTeamPresent(i,redTeam);
    }
  };

  unitsInAllGrids();
  console.log(allGrids)

  // The blueTeam starts by default
  const currentPlayer = blueTeam;

  // This is how the currentPlayer switches


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

  var selectedUnit = null;

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
    if (selectedUnit.direction == "north") {
      $("#north").css('background-color','grey');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
    } else if (selectedUnit.direction == "east") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','grey');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
    } else if (selectedUnit.direction == "south") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','grey');
      $("#west").css('background-color','white');
    } else if (selectedUnit.direction == "west") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','grey');
    } else {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
    }
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

  // To move a unit


  // This function will generate random values for a grid
  const makeOneGrid = (gridNumber) => {
    const pickTerrain = () => {
      const pickValue = Math.random();
      if (pickValue < 0.4) {
        allGrids[gridNumber].terrain = "woods"
      } else if (pickValue >= 0.4 && pickValue < 0.5) {
        allGrids[gridNumber].terrain = "water"
      } else {
        allGrids[gridNumber].terrain = "field"
      }
    }
    pickTerrain();
    const pickElevation = () => {
      const pickValue = Math.random();
      if (pickValue < 0.2) {
        allGrids[gridNumber].elevation = "high ground"
      } else if (pickValue >= 0.2 && pickValue < 0.8) {
        allGrids[gridNumber].elevation = "flat ground"
      } else {
        allGrids[gridNumber].elevation = "low ground"
      }
    }
    pickElevation();
  };

  // This uses the "makeOneGrid" function to give values to ALL of the grid squares
  const makeAllGrids = (howMany) => {
    for (var i = 0; i < howMany; i++) {
      makeOneGrid(i);
      // console.log(allGrids[i]);
    }
  };
  makeAllGrids(16);

  // These display the terrain on the grid squares
  // $('#x1y1').text(allGrids[0].elevation);
  // $('#x2y1').text(allGrids[1].elevation);
  // $('#x3y1').text(allGrids[2].elevation);
  // $('#x4y1').text(allGrids[3].elevation);
  // $('#x1y2').text(allGrids[4].elevation);
  // $('#x2y2').text(allGrids[5].elevation);
  // $('#x3y2').text(allGrids[6].elevation);
  // $('#x4y2').text(allGrids[7].elevation);
  // $('#x1y3').text(allGrids[8].elevation);
  // $('#x2y3').text(allGrids[9].elevation);
  // $('#x3y3').text(allGrids[10].elevation);
  // $('#x4y3').text(allGrids[11].elevation);
  // $('#x1y4').text(allGrids[12].elevation);
  // $('#x2y4').text(allGrids[13].elevation);
  // $('#x3y4').text(allGrids[14].elevation);
  // $('#x4y4').text(allGrids[15].elevation);

})
