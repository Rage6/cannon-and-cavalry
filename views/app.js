$(() =>{

  var totalGrids = 16;
  var maxXvalue = 4;
  var maxYvalue = 4;
  const maxUnits = 5;
  var startGrids = true;
  var errorPresent = [];
  var completedPresent = [];
  var battleReport = [];
  var orderNum = 0;
  var completedNum = 0;
  var errorNum = 0;
  var numOfPlayers = 1;
  var attackTally = 0;
  var defendTally = 0;
  var battleOccur = false;
  var allBattles = [];
  var northHalf = Math.round(maxYvalue/2);
  var westHalf = Math.round(maxXvalue/2);
  var reportFacts = [];
  var currentClickUnit = null;
  var lastClickUnit = null;
  var startClick = true;
  var fourByFour = true;

  // This array contains the grid squares and their values for the default, 4x4 map
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

  // These grid squares and values are added for a 5x5 map.
  const fiveByFive = [
    // rowOneColumnFive
    {
      xValue: 5,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnFive
    {
      xValue: 5,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnFive
    {
      xValue: 5,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnFive
    {
      xValue: 5,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFiveColumnOne
    {
      xValue: 1,
      yValue: 5,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFiveColumnTwo
    {
      xValue: 2,
      yValue: 5,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFiveColumnThree
    {
      xValue: 3,
      yValue: 5,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFiveColumnFour
    {
      xValue: 4,
      yValue: 5,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFiveColumnFive
    {
      xValue: 5,
      yValue: 5,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
  ];

  // Here are the starting values of the blueTeam
  const blueTeam = {
    playerName: "Player 1",
    teamName: "blue",
    // Note: BECAUSE OF THE 'IF' STATMENT IN removeAbsentUnit, NO TWO UNITS CAN HAVE THE SAME NAME. If so, the incorrect unit may be removed. The names had to be used because the same thing happend when I used the grid coordinates instead.
    infantry: [
      {
        name: "1-5",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 1,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null,
        fullName: "1st Battalion, 5th Regiment"
      },
      {
        name: "1-24",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 4,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null,
        fullName: "1st Battalion, 24th Regiment"
      }
    ],
    cavalry: [
      {
        name: "5-1",
        type: "CAV",
        active: true,
        health: 8,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 2,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null,
        twoSquaresN: null,
        twoSquaresE: null,
        twoSquaresS: null,
        twoSquaresW: null,
        fullName: "5th Squadron, 1st Regiment"
      }
    ],
    artillery: [
      {
        name: "2-6",
        type: "AR",
        active: true,
        health: 6,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 3,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null,
        inPlace: true,
        fullName: "2nd Battalion, 8th Regiment"
      }
    ]
  };

  // Here are the starting values of the blueTeam
  const redTeam = {
    playerName: "Player 2",
    teamName: "red",
    // Note: BECAUSE OF THE 'IF' STATMENT IN removeAbsentUnit, NO TWO UNITS CAN HAVE THE SAME NAME. If so, the incorrect unit may be removed. The names had to be used because the same thing happend when I used the grid coordinates instead.
    infantry: [
      {
        name: "2-5",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 1,
        yValue: 4,
        fullName: "2nd Battalion, 5th Regiment"
      },
      {
        name: "4-8",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 4,
        yValue: 4,
        fullName: "4th Battalion, 9th Regiment"
      }
    ],
    cavalry: [
      {
        name: "3RD",
        type: "CAV",
        active: true,
        health: 8,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 2,
        yValue: 4,
        twoSquaresN: null,
        twoSquaresE: null,
        twoSquaresS: null,
        twoSquaresW: null,
        fullName: "3rd Regiment"
      }
    ],
    artillery: [
      {
        name: "2-7",
        type: "AR",
        active: true,
        health: 6,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 3,
        yValue: 4,
        inPlace: true,
        fullName: "2nd Battalion, 7th Regiment"
      }
    ]
  };

  // This is the process for when picking the 5x5 grid squares
  const addOneSquare = (pastX,pastY,newX,newY,newArray,newObject,allGridsIndex,isSplice) => {
    if (isSplice == true) {
      allGrids.splice(allGridsIndex,0,newArray[newObject]);
    } else {
      allGrids.push(newArray[newObject]);
    };
    $("#x"+pastX+"y"+pastY).after("<div class='gridSquare' id='x" + newX + "y" + newY + "'></div>");
    $("#x"+newX+"y"+newY).append("<div class='topLine' id='x"+newX+"y"+newY+"_north'></div>");
    $("#x"+newX+"y"+newY).append("<div class='centerLine'></div>");
    $("#x"+newX+"y"+newY+" .centerLine").append("<div class='centerLeft' id='x"+newX+"y"+newY+"_west'></div>");
    $("#x"+newX+"y"+newY+" .centerLine").append("<div class='centerMiddle' id='x"+newX+"y"+newY+"_center'></div>");
    $("#x"+newX+"y"+newY+" .centerLine").append("<div class='centerRight' id='x"+newX+"y"+newY+"_east'></div>");
    $("#x"+newX+"y"+newY).append("<div class='bottomLine' id='x5y1_south'></div>");
  };
  const moveRedSouth = () => {
    var beenMoved = [];
    var blockMove = false;
    for (var z = 0; z < allGrids.length; z++) {
      if (allGrids[z].redPresent.length > 0) {
        // console.log("gridID: " + z);
        for (var alpha = 0; alpha < allGrids[z].redPresent.length; alpha++) {
          for (var charlie = 0; charlie < beenMoved.length; charlie++) {
            if (allGrids[z].redPresent[alpha].name == beenMoved[charlie]) {
              blockMove = true;
            };
          };
          if (blockMove == false) {
            var destineGrid = z + 5;
            allGrids[destineGrid].redPresent.push(allGrids[z].redPresent[alpha]);
            allGrids[destineGrid].redPresent[alpha].yValue+=1;
            allGrids[z].redPresent.splice(alpha,1);
            beenMoved.push(allGrids[destineGrid].redPresent[alpha].name);
            var oldCenter = "#x" + allGrids[z].xValue + "y" + allGrids[z].yValue + "_center";
            $(oldCenter).css('background-color','transparent');
            $(oldCenter + " img").remove();
          };
          blockMove = false;
        }
      }
    }
  };
  const expandToFive = () => {
    if (fourByFour == true) {
      addOneSquare(4,1,5,1,fiveByFive,0,4,true);
      addOneSquare(4,2,5,2,fiveByFive,1,9,true);
      addOneSquare(4,3,5,3,fiveByFive,2,14,true);
      addOneSquare(4,4,5,4,fiveByFive,3,19,true);
      addOneSquare(5,4,1,5,fiveByFive,4,null,false);
      addOneSquare(1,5,2,5,fiveByFive,5,null,false);
      addOneSquare(2,5,3,5,fiveByFive,6,null,false);
      addOneSquare(3,5,4,5,fiveByFive,7,null,false);
      addOneSquare(4,5,5,5,fiveByFive,8,null,false);
      $(".gridSquare").css('width','19%').css('height','19%');
      $("#fourGrids").css('color','white').css('background-color','brown');
      $("#fiveGrids").css('color','brown').css('background-color','white');
      totalGrids = 25;
      maxXvalue = 5;
      maxYvalue = 5;
      startGrids = true;
      fourByFour = false;
      moveRedSouth(true);
      makeAllGrids(totalGrids);
      console.log(allGrids);
    } else {
      console.log("Already in 5x5 map.")
    }
  };
  $("#fiveGrids").click(expandToFive);

  // To switch back to 4x4 map
  const removeOneSquare = (xNum,yNum,removeNum) => {
    var removeID = "#x" + xNum + "y" + yNum;
    $(removeID).remove();
    allGrids.splice(removeNum,1);
  };
  const moveRedNorth = () => {
    var alreadyMoved = [];
    for (var gridNum = 0; gridNum < allGrids.length; gridNum++) {
      var stopMove = false;
      if (allGrids[gridNum].redPresent.length > 0) {
        for (var delta = 0; delta < allGrids[gridNum].redPresent.length; delta++) {
          for (var foxtrot = 0; foxtrot < alreadyMoved.length; foxtrot++) {
            if (allGrids[gridNum].redPresent[delta].name == alreadyMoved[foxtrot]) {
              stopMove = true;
            }
          };
          if (stopMove == false) {
            var echo = gridNum - 5;
            allGrids[echo].redPresent.push(allGrids[gridNum].redPresent[delta]);
            var justAdded = allGrids[echo].redPresent.length - 1;
            allGrids[echo].redPresent[justAdded].yValue -= 1;
            alreadyMoved.push(allGrids[echo].redPresent[justAdded].name);
            allGrids[gridNum].redPresent.splice(0,1);
          } else {
            console.log("move blocked");
          };
          stopMove = false
        }
      }
    }
  }
  const reduceToFour = () => {
    if (fourByFour == false) {
      var startEmpty = [];
      moveRedNorth();
      removeOneSquare(5,5,24);
      removeOneSquare(4,5,23);
      removeOneSquare(3,5,22);
      removeOneSquare(2,5,21);
      removeOneSquare(1,5,20);
      removeOneSquare(5,4,19);
      removeOneSquare(5,3,14);
      removeOneSquare(5,2,9);
      removeOneSquare(5,1,4);
      $(".gridSquare").css('width','24%').css('height','24%');
      $("#fourGrids").css('color','brown').css('background-color','white');
      $("#fiveGrids").css('color','white').css('background-color','brown');
      totalGrids = 16;
      maxXvalue = 4;
      maxYvalue = 4;
      startGrids = true;
      fourByFour = true;
      console.log(allGrids);
      // moveRedNorth();
      makeAllGrids(totalGrids);
    } else {
      console.log("Already in 4x4");
    }
  }
  $("#fourGrids").click(reduceToFour);

  // This will compare a single grid to a all of a team's units IOT see if any of those units should be added to the grid's bluePresent or redPresent arrays
  const ifTeamPresent = (gridNumber,oneTeam) => {
    if (oneTeam == blueTeam) {
      for (var i = 0; i < blueTeam.infantry.length; i++) {
        if (allGrids[gridNumber].xValue == blueTeam.infantry[i].xValue && allGrids[gridNumber].yValue == blueTeam.infantry[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.infantry[i]);
        }
      };
      for (var p = 0; p < blueTeam.cavalry.length; p++) {
        if (allGrids[gridNumber].xValue == blueTeam.cavalry[p].xValue && allGrids[gridNumber].yValue == blueTeam.cavalry[p].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.cavalry[p]);
        };
      };
      for (var q = 0; q < blueTeam.artillery.length; q++) {
        if (allGrids[gridNumber].xValue == blueTeam.artillery[q].xValue && allGrids[gridNumber].yValue == blueTeam.artillery[q].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.artillery[q]);
        };
      }
    } else if (oneTeam == redTeam) {
      for (var i = 0; i < redTeam.infantry.length; i++) {
        if (allGrids[gridNumber].xValue == redTeam.infantry[i].xValue && allGrids[gridNumber].yValue == redTeam.infantry[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.infantry[i]);
        }
      };
      for (var p = 0; p < redTeam.cavalry.length; p++) {
        if (allGrids[gridNumber].xValue == redTeam.cavalry[p].xValue && allGrids[gridNumber].yValue == redTeam.cavalry[p].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.cavalry[p]);
        };
      };
      for (var q = 0; q < redTeam.artillery.length; q++) {
        if (allGrids[gridNumber].xValue == redTeam.artillery[q].xValue && allGrids[gridNumber].yValue == redTeam.artillery[q].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.artillery[q]);
        };
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
  console.log(allGrids);

  // This controls how the players choose the character name(s) and nation(s)
  // --- ONE PLAYER ---
  const oneStart = () => {
    numOfPlayers = 1;
    console.log(numOfPlayers);
    $("#openIntro").css('display','none');
    $("#openOneName").css('display','block');
  }
  // $("#onePlayer").click(oneStart);

  const submitBluePlayer = () => {
    blueTeam.playerName = $("#blueLeader").val();
    blueTeam.teamName = $("#blueArmy").val();
    blueTeam.teamName = blueTeam.teamName.toUpperCase();
    if (blueTeam.teamName != "") {
      $("#blueStatus").text(blueTeam.teamName);
    };
    $("#openOneName").css("display","none");
    $("#openPage").css("display","none");
    if (numOfPlayers == 2) {
      $("#openPage").css("display","block");
      $("#openTwoName").css("display","block");
    }
  };
  $("#submitBlue").click(submitBluePlayer);

  // --- TWO PLAYER ---
  const twoStart = () => {
    numOfPlayers = 2;
    $("#openIntro").css('display','none');
    $("#openOneName").css('display','block');
  }
  $("#twoPlayer").click(twoStart);

  const submitRedPlayer = () => {
    redTeam.playerName = $("#redLeader").val();
    redTeam.teamName = $("#redArmy").val();
    redTeam.teamName = redTeam.teamName.toUpperCase();
    if (redTeam.teamName != "") {
      $("#redStatus").text(redTeam.teamName);
    };
    $("#openTwoName").css("display","none");
    $("#openPage").css("display","none");
  };
  $("#submitRed").click(submitRedPlayer);

  // --- HOW TO PLAY
  const howToRun = () => {
    $("#openIntro").css('display','none');
    $("#openHowTo").css('display','block');
    $(".openBox").css({"margin":"0 5%","width":"90%"});
  }
  $("#howTo").click(howToRun);

  const howToStop = () => {
    $("#openIntro").css('display','block');
    $("#openHowTo").css('display','none');
    $(".openBox").css("margin","0 10%");
  }
  $("#closeHowTo").click(howToStop);

  // --- GLOSSARY
  const glossaryRun = () => {
    $("#openIntro").css('display','none');
    $("#openGlossary").css('display','block');
    $(".openBox").css({"margin":"0 5%","width":"90%"});
  }
  $("#glossary").click(glossaryRun);
  $("#seeGlossary").click(()=>{
    howToStop();
    glossaryRun();
  });

  const glossaryStop = () => {
    $("#openIntro").css('display','block');
    $("#openGlossary").css('display','none');
    $(".openBox").css("margin","0 10%");
  }
  $("#closeGlossary").click(glossaryStop);

  // --- SETTINGS
  const settingsRun = () => {
    $("#openIntro").css('display','none');
    $("#openSettings").css('display','block');
    $(".openBox").css({"margin":"0 5%","width":"90%"});
  }
  $("#settings").click(settingsRun);

  const settingsStop = () => {
    $("#openIntro").css('display','block');
    $("#openSettings").css('display','none');
    $(".openBox").css("margin","0 10%");
  }
  $("#closeSettings").click(settingsStop);

  // --- ABOUT
  const aboutRun = () => {
    $("#openIntro").css('display','none');
    $("#openAbout").css('display','block');
    $(".openBox").css({"margin":"0 5%","width":"90%"});
  }
  $("#about").click(aboutRun);
  $("#seeAbout").click(()=>{
    howToStop();
    aboutRun();
  })

  const aboutStop = () => {
    $("#openIntro").css('display','block');
    $("#openAbout").css('display','none');
    $(".openBox").css("margin","0 10%");
  }
  $("#closeAbout").click(aboutStop);

  // To highlight the current player in their status box
  const showCurrentPlayer = () => {
    if (currentPlayer == blueTeam) {
      $("#blueTitle").css("background-color","yellow").css("border","5px 5px 0 5px solid black");
      $("#redTitle").css("background-color","transparent");
    } else if (currentPlayer == redTeam) {
      $("#blueTitle").css("background-color","transparent");
      $("#redTitle").css("background-color","yellow");
    } else {
      console.log("Error");
    };
  };

  // The blueTeam starts by default
  var currentPlayer = blueTeam;
  var oppositePlayer = redTeam;

  showCurrentPlayer();

  // To display all of a team's units
  const infantryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.infantry.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueIn" + i;
        var unitName = blueTeam.infantry[i].name;
        if (blueTeam.infantry[i].active == true) {
          $(box).css('background-color','blue').css('border','none').text(unitName);
          displayTeam.infantry[i].columnNum = i
        } else {
          $(box).css('background-color','transparent').css('border','none').text('');
        }
      } else {
        var box = "#redIn" + i;
        var unitName = redTeam.infantry[i].name;
        if (redTeam.infantry[i].active == true) {
          $(box).css('background-color','red').css('border','none').text(unitName);
          displayTeam.infantry[i].columnNum = i
        } else {
          $(box).css('background-color','transparent').css('border','none').text('');
        }
      }
    }
  };

  const artilleryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.artillery.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueAr" + i;
        var unitName = blueTeam.artillery[i].name;
        if (blueTeam.artillery[i].active == true) {
          $(box).css('background-color','blue').css('border','none').text(unitName);
          displayTeam.artillery[i].columnNum = i
        } else {
          $(box).css('background-color','transparent').css('border','none').text('');
        }
      } else {
        var box = "#redAr" + i;
        var unitName = redTeam.artillery[i].name;
        if (redTeam.artillery[i].active == true) {
          $(box).css('background-color','red').css('border','none').text(unitName);
          displayTeam.artillery[i].columnNum = i
        } else {
          $(box).css('background-color','transparent').css('border','none').text('');
        }
      };
    };
  };

  const cavalryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.cavalry.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueCav" + i;
        var unitName = blueTeam.cavalry[i].name;
        if (blueTeam.cavalry[i].active == true) {
          $(box).css('background-color','blue').css('border','none').text(unitName);
          displayTeam.cavalry[i].columnNum = i
        } else {
          $(box).css('background-color','transparent').css('border','none').text('');
        }
      } else {
        var box = "#redCav" + i;
        var unitName = redTeam.cavalry[i].name;
        if (redTeam.cavalry[i].active == true) {
          $(box).css('background-color','red').css('border','none').text(unitName);
          displayTeam.cavalry[i].columnNum = i
        } else {
          $(box).css('background-color','transparent').css('border','none').text('');
        }
      }
    }
  };

  const refreshAllColumns = () => {
    infantryColumn(blueTeam);
    infantryColumn(redTeam);
    artilleryColumn(blueTeam);
    artilleryColumn(redTeam);
    cavalryColumn(blueTeam);
    cavalryColumn(redTeam);
  }

  refreshAllColumns();

  // The default settings for a selectedUnit
  var selectedUnit = null;
  var selectedInfantry = null;
  var selectedAttack = false;

  // This connects the attackButton in HTML with the selectedUnit's attack mode
  $('#attackButton').click( ()=> {
    selectedUnit.attack = true;
    switchMode();
    clearCavBorders();
    $('#attackButton').css('background-color','blue').css('color','white');
    $('#defendButton').css('background-color','transparent').css('color','black');
    console.log("Attack mode");
    console.log(selectedUnit);
  });

  // This will reset the borders and directions if someone switches from Defense mode to Attack mode
  const switchMode = () => {
    var idBasic = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_";
    var compass = ["north","east","south","west"]
    for (var t = 0; t < 4; t++) {
      var idComplete = idBasic + compass[t];
      $(idComplete).css('border','none');
    };
    selectedUnit.nextDirection = "center";
    if (selectedUnit.type == "CAV") {
      selectedUnit.twoSquaresN = null;
      selectedUnit.twoSquaresE = null;
      selectedUnit.twoSquaresS = null;
      selectedUnit.twoSquaresW = null;
    };
    $("#north").css('background-color','transparent');
    $("#east").css('background-color','transparent');
    $("#south").css('background-color','transparent');
    $("#west").css('background-color','transparent');
  }

  // This connects the defendButton in HTML with the selectedUnit's attack mode
  $('#defendButton').click( ()=> {
    selectedUnit.attack = false;
    switchMode();
    clearCavBorders();
    $('#attackButton').css('background-color','transparent').css('color','black');
    $('#defendButton').css('background-color','red').css('color','white');
    console.log("Defense mode");
    console.log(selectedUnit);
  })

  //This function makes the arrows show the selectedUnit's NEXT direction
  const showUnitDirection = ()=> {
    if (selectedUnit.direction == "north") {
      $("#north").css('background-color','grey');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "east") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','grey');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "south") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','grey');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "west") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','grey');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "center") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','grey');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "northEast" && selectedUnit.type == "IN") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','grey');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "southEast" && selectedUnit.type == "IN") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','grey');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "southWest" && selectedUnit.type == "IN") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','grey');
      $("#northWest").css('background-color','transparent');
    } else if (selectedUnit.direction == "northWest" && selectedUnit.type == "IN") {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','grey');
    } else {
      $("#north").css('background-color','transparent');
      $("#east").css('background-color','transparent');
      $("#south").css('background-color','transparent');
      $("#west").css('background-color','transparent');
      $("#center").css('background-color','transparent');
      $("#northEast").css('background-color','transparent');
      $("#southEast").css('background-color','transparent');
      $("#southWest").css('background-color','transparent');
      $("#northWest").css('background-color','transparent');
    };
    if (selectedUnit.type == "IN") {
      $("#northEast").css({'border':'1px solid black','background-color':'transparent'});
      $("#southEast").css({'border':'1px solid black','background-color':'transparent'});
      $("#southWest").css({'border':'1px solid black','background-color':'transparent'});
      $("#northWest").css({'border':'1px solid black','background-color':'transparent'});
    } else {
      $("#northEast").css('background-color','black');
      $("#southEast").css('background-color','black');
      $("#southWest").css('background-color','black');
      $("#northWest").css('background-color','black');
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
    } else if (selectedUnit.nextDirection == "center") {
      $("#center").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "northEast" && selectedUnit.type == "IN") {
      $("#northEast").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "southEast" && selectedUnit.type == "IN") {
      $("#southEast").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "southWest" && selectedUnit.type == "IN") {
      $("#southWest").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "northWest" && selectedUnit.type == "IN") {
      $("#northWest").css('background-color','yellow');
    } else {
      console.log("error in showUnitDirection function.")
    };
    if (selectedUnit.nextDirection == "north") {
      if (selectedUnit.type == "CAV") {
        if (lastClickUnit == selectedUnit.name || lastClickUnit == null) {
          if (selectedUnit.twoSquaresN == false) {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresN = true;
          } else if (selectedUnit.twoSquaresN == true) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresN = false;
          } else {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresN = false;
          };
        } else {
          if (selectedUnit.twoSquaresN == false) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresN = false;
          } else {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresN = true;
          };
        }
      } else {
        howFar = 1;
        notHowFar = 2;
      };
      // lastClickUnit = selectedUnit.name;
      if (selectedUnit.attack == true && selectedUnit.yValue > 1) {
        var targetYnorth = selectedUnit.yValue - howFar;
        var notTargetYnorth = selectedUnit.yValue - notHowFar;
        var targetID = "#x" + selectedUnit.xValue + "y" + targetYnorth + "_center";
        $(targetID).css("border",targetBorder);
        var notTargetID = "#x" + selectedUnit.xValue + "y" + notTargetYnorth + "_center";
        $(notTargetID).css("border","none");
      } else if (selectedUnit.attack == false) {
        var targetID = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_north";
        $(targetID).css("border","5px solid yellow").css("border-bottom","none");;
      };
      // console.log(selectedUnit);
    } else if (selectedUnit.nextDirection == "east") {
      if (selectedUnit.type == "CAV") {
        if (lastClickUnit == selectedUnit.name || lastClickUnit == null) {
          if (selectedUnit.twoSquaresE == false) {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresE = true;
          } else if (selectedUnit.twoSquaresE == true) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresE = false;
          } else {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresE = false;
          };
        } else {
          if (selectedUnit.twoSquaresE == false) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresE = false;
          } else {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresE = true;
          };
        }
      } else {
        howFar = 1;
        notHowFar = 2;
      };
      if (selectedUnit.attack == true && selectedUnit.xValue < maxXvalue) {
        var targetXeast = selectedUnit.xValue + howFar;
        var notTargetXeast = selectedUnit.xValue + notHowFar;
        var targetID = "#x" + targetXeast + "y" + selectedUnit.yValue + "_center";
        $(targetID).css("border",targetBorder);
        var notTargetID = "#x" + notTargetXeast + "y" + selectedUnit.yValue + "_center";
        $(notTargetID).css("border","none");
      } else if (selectedUnit.attack == false) {
        var targetID = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_east";
        $(targetID).css("border","5px solid yellow").css("border-left","none");;
      };
    } else if (selectedUnit.nextDirection == "south") {
      if (selectedUnit.type == "CAV") {
        if (lastClickUnit == selectedUnit.name || lastClickUnit == null) {
          if (selectedUnit.twoSquaresS == false) {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresS = true;
          } else if (selectedUnit.twoSquaresS == true) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresS = false;
          } else {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresS = false;
          };
        } else {
          if (selectedUnit.twoSquaresS == false) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresS = false;
          } else {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresS = true;
          };
        }
      } else {
        howFar = 1;
        notHowFar = 2;
      };
      if (selectedUnit.attack == true && selectedUnit.yValue < maxYvalue) {
        var targetYsouth = selectedUnit.yValue + howFar;
        var notTargetYsouth = selectedUnit.yValue + notHowFar;
        var targetID = "#x" + selectedUnit.xValue + "y" + targetYsouth + "_center";
        $(targetID).css("border",targetBorder);
        var notTargetID = "#x" + selectedUnit.xValue + "y" + notTargetYsouth + "_center";
        $(notTargetID).css("border","none");
      } else if (selectedUnit.attack == false) {
        var targetID = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_south";
        $(targetID).css("border","5px solid yellow").css("border-top","none");;
      };
    } else if (selectedUnit.nextDirection == "west") {
      if (selectedUnit.type == "CAV") {
        if (lastClickUnit == selectedUnit.name || lastClickUnit == null) {
          if (selectedUnit.twoSquaresW == false) {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresW = true;
          } else if (selectedUnit.twoSquaresW == true) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresW = false;
          } else {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresW = false;
          };
        } else {
          if (selectedUnit.twoSquaresW == false) {
            howFar = 1;
            notHowFar = 2;
            selectedUnit.twoSquaresW = false;
          } else {
            howFar = 2;
            notHowFar = 1;
            selectedUnit.twoSquaresW = true;
          };
        }
      } else {
        howFar = 1;
        notHowFar = 2;
      };
      if (selectedUnit.attack == true && selectedUnit.xValue > 1) {
        var targetXwest = selectedUnit.xValue - howFar;
        var notTargetXwest = selectedUnit.xValue - notHowFar;
        var targetID = "#x" + targetXwest + "y" + selectedUnit.yValue + "_center";
        $(targetID).css("border",targetBorder);
        var notTargetID = "#x" + notTargetXwest + "y" + selectedUnit.yValue + "_center";
        $(notTargetID).css("border","none");
      } else if (selectedUnit.attack == false) {
        var targetID = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_west";
        $(targetID).css("border","5px solid yellow").css("border-right","none");
      };
    } else if (selectedUnit.nextDirection == "northWest") {
      if (selectedUnit.attack == true && selectedUnit.xValue > 1 && selectedUnit.yValue > 1) {
        var targetID = "#x" + (selectedUnit.xValue - 1) + "y" + (selectedUnit.yValue - 1) + "_center";
        console.log(targetID);
        $(targetID).css("border",targetBorder);
      } else {
        console.log("can't move that way");
      }
    } else if (selectedUnit.nextDirection == "northEast") {
      if (selectedUnit.attack == true && selectedUnit.xValue < maxXvalue && selectedUnit.yValue > 1) {
        var targetID = "#x" + (selectedUnit.xValue + 1) + "y" + (selectedUnit.yValue - 1) + "_center";
        console.log(targetID);
        $(targetID).css("border",targetBorder);
      } else {
        console.log("can't move that way");
      }
    } else if (selectedUnit.nextDirection == "southEast") {
      if (selectedUnit.attack == true && selectedUnit.xValue < maxXvalue && selectedUnit.yValue < maxYvalue) {
        var targetID = "#x" + (selectedUnit.xValue + 1) + "y" + (selectedUnit.yValue + 1) + "_center";
        console.log(targetID);
        $(targetID).css("border",targetBorder);
      } else {
        console.log("can't move that way");
      }
    } else if (selectedUnit.nextDirection == "southWest") {
      if (selectedUnit.attack == true && selectedUnit.xValue > 1 && selectedUnit.yValue < maxYvalue) {
        var targetID = "#x" + (selectedUnit.xValue - 1) + "y" + (selectedUnit.yValue + 1) + "_center";
        console.log(targetID);
        $(targetID).css("border",targetBorder);
      } else {
        console.log("can't move that way");
      }
    };
    lastClickUnit = selectedUnit.name;
  };

  // This is how the arrow buttons change a unit's nextDirections and show where it will go
  $('#north').click( ()=> {
    clearBorders();
    clearCavBorders();
    borderColor();
    selectedUnit.nextDirection = "north";
    console.log("Direction: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#east').click( ()=> {
    clearBorders();
    clearCavBorders();
    borderColor();
    selectedUnit.nextDirection = "east";
    console.log("Direction: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#south').click( ()=> {
    clearBorders();
    clearCavBorders();
    borderColor();
    selectedUnit.nextDirection = "south";
    console.log("Direction: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#west').click( ()=> {
    clearBorders();
    clearCavBorders();
    borderColor();
    selectedUnit.nextDirection = "west";
    console.log("Direction: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#center').click( ()=> {
    clearBorders();
    clearCavBorders();
    selectedUnit.nextDirection = "center";
    console.log("Direction: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#northWest').click( ()=> {
    if (selectedUnit.type == "IN") {
      clearBorders();
      clearCavBorders();
      borderColor();
      selectedUnit.nextDirection = "northWest";
      console.log("Direction: " + selectedUnit.nextDirection);
      showUnitDirection();
      showUnitNextDirection();
    } else {
      console.log("Only IN can move diagonally.")
    };
  });
  $('#northEast').click( ()=> {
    if (selectedUnit.type == "IN") {
      clearBorders();
      clearCavBorders();
      borderColor();
      selectedUnit.nextDirection = "northEast";
      console.log("Direction: " + selectedUnit.nextDirection);
      showUnitDirection();
      showUnitNextDirection();
    } else {
      console.log("Only IN can move diagonally.")
    };
  });
  $('#southWest').click( ()=> {
    if (selectedUnit.type == "IN") {
      clearBorders();
      clearCavBorders();
      borderColor();
      selectedUnit.nextDirection = "southWest";
      console.log("Direction: " + selectedUnit.nextDirection);
      showUnitDirection();
      showUnitNextDirection();
    } else {
      console.log("Only IN can move diagonally.")
    };
  });
  $('#southEast').click( ()=> {
    if (selectedUnit.type == "IN") {
      clearBorders();
      clearCavBorders();
      borderColor();
      selectedUnit.nextDirection = "southEast";
      console.log("Direction: " + selectedUnit.nextDirection);
      showUnitDirection();
      showUnitNextDirection();
    } else {
      console.log("Only IN can move diagonally.")
    };
  });
  // This erases the border on the grid that the user had directed towards
  const clearBorders = () => {
    var northY = selectedUnit.yValue - 1;
    var southY = selectedUnit.yValue + 1;
    var westX  = selectedUnit.xValue - 1;
    var eastX  = selectedUnit.xValue + 1;
    var thisGrid = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue;
    // North
    var clearID = "#x" + selectedUnit.xValue + "y" + northY + "_center";
    $(clearID).css("border","none");
    // West
    clearID = "#x" + westX + "y" + selectedUnit.yValue + "_center";
    $(clearID).css("border","none");
    // South
    clearID = "#x" + selectedUnit.xValue + "y" + southY + "_center";
    $(clearID).css("border","none");
    // East
    clearID = "#x" + eastX + "y" + selectedUnit.yValue + "_center";
    $(clearID).css("border","none");
    // North-West
    clearID = "#x" + westX + "y" + northY + "_center";
    $(clearID).css("border","none");
    // North-EastTwo
    clearID = "#x" + eastX + "y" + northY + "_center";
    $(clearID).css("border","none");
    // South-EastTwo
    clearID = "#x" + eastX + "y" + southY + "_center";
    $(clearID).css("border","none");
    // South-West
    clearID = "#x" + westX + "y" + southY + "_center";
    $(clearID).css("border","none");
    //clears all defense lines
    clearID = thisGrid + "_north";
    $(clearID).css("border","none");
    clearID = thisGrid + "_east";
    $(clearID).css("border","none");
    clearID = thisGrid + "_south";
    $(clearID).css("border","none");
    clearID = thisGrid + "_west";
    $(clearID).css("border","none");
  }
  // To choose which border color for the next potential grid
  // Note: These used to switch from blue to red, but it makes it difficult to see the borders when entering the same unit with allies
  var targetBorder = "5px solid yellow";
  const borderColor = () => {
    targetBorder = "5px solid yellow";
    if (currentPlayer == redTeam) {
      targetBorder = "5px solid yellow";
    };
    return targetBorder
  };

  // Specifically clears the borders that are TWO grid squares away. Only applies for CAV units sometimes.
  const clearCavBorders = () => {
    var northTwo = "#x" + selectedUnit.xValue + "y" + (selectedUnit.yValue - 2) + "_center";
    var eastTwo = "#x" + (selectedUnit.xValue + 2) + "y" + selectedUnit.yValue + "_center";
    var southTwo = "#x" + selectedUnit.xValue + "y" + (selectedUnit.yValue + 2) + "_center";
    var westTwo = "#x" + (selectedUnit.xValue - 2) + "y" + selectedUnit.yValue + "_center";
    const allTwo = [northTwo, eastTwo, southTwo, westTwo];
    for (var pickTwo = 0; pickTwo < allTwo.length; pickTwo++) {
      for (var cleanGrid = 0; cleanGrid < allGrids.length; cleanGrid++) {
        var pickGrid = "#x" + allGrids[cleanGrid].xValue + "y" + allGrids[cleanGrid].yValue + "_center";
        if (allTwo[pickTwo] == pickGrid) {
          $(pickGrid).css('border','none')
        }
      }
    }
  }

// To be used within issueOneOrder below, this determines the grid where the unit will be moved to. It's important because both the unit and the grid square need to know that the unit is in a new grid square.
  const findNextGrid = () => {
    for (var a = 0; a < totalGrids; a++) {
      if (selectedUnit.nextXvalue == allGrids[a].xValue && selectedUnit.nextYvalue == allGrids[a].yValue) {
        nextGrid = allGrids[a];
        return nextGrid
      }
    }
  }

  // Like findNextGrid, this finds the old grid so that the unit can be REMOVED from it's bluePresent or redPresent
  const findCurrentGrid = () => {
    for (var b = 0; b < totalGrids; b++) {
      if (selectedUnit.xValue == allGrids[b].xValue && selectedUnit.yValue == allGrids[b].yValue) {
        currentGrid = allGrids[b];
        return currentGrid
      }
    }
  }

  // After the moved unit is added to the nextGrid, this function removes the unit from it's old grid (currentGrid).
  const removeAbsentUnit = () =>{
    if (currentPlayer == blueTeam) {
      for (var c = 0; c < currentGrid.bluePresent.length; c++) {
        if (selectedUnit.name == currentGrid.bluePresent[c].name && currentGrid.redPresent.length == 0) {
          var removedUnit = currentGrid.bluePresent[c];
          var removedID = "#x" + removedUnit.xValue + "y" + removedUnit.yValue;
          if (removedUnit.direction == "north") {
            removedIDnorth = removedID + "_north";
            $(removedIDnorth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "east") {
            removedIDeast = removedID + "_east";
            $(removedIDeast).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "south") {
            removedIDsouth = removedID + "_south";
            $(removedIDsouth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "west") {
            removedIDwest = removedID + "_west";
            $(removedIDwest).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "center") {
            removedIDcenter = removedID + "_center";
            $(removedIDcenter).text("").css('background-color','transparent').css('color','transparent');
          } else {
            console.log("Error in direction if loop")
          };
          currentGrid.bluePresent.splice(c, 1);
        }
      }
    } else if (currentPlayer == redTeam) {
      for (var c = 0; c < currentGrid.redPresent.length; c++) {
        if (selectedUnit.name == currentGrid.redPresent[c].name && currentGrid.bluePresent.length == 0) {
          var removedUnit = currentGrid.redPresent[c];
          var removedID = "#x" + removedUnit.xValue + "y" + removedUnit.yValue;
          if (removedUnit.direction == "north") {
            removedIDnorth = removedID + "_north";
            $(removedIDnorth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "east") {
            removedIDeast = removedID + "_east";
            $(removedIDeast).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "south") {
            removedIDsouth = removedID + "_south";
            $(removedIDsouth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "west") {
            removedIDwest = removedID + "_west";
            $(removedIDwest).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "center") {
            removedIDcenter = removedID + "_center";
            $(removedIDcenter).text("").css('background-color','transparent').css('color','transparent');
          }
          currentGrid.redPresent.splice(c, 1);
        } else {
          console.log("Error in removeAbsentUnit's redTeam")
        }
      }
    } else {
      console.log("removeAbsentUnit couldn't find the currentPlayer")
    }
  };

  const reportError = (thisUnit,reason) => {
    errorPresent.push(thisUnit.name + ": INCOMPLETE (" + reason + ")");
    thisUnit.nextXvalue = thisUnit.xValue;
    thisUnit.nextYvalue = thisUnit.yValue;
  }

// This determines a) if a unit is going to move and b) where it's new location will be
  const issueOneOrder = (ordersCarriedOut) => {
    if (selectedUnit.active == true) {
      if (selectedUnit.attack == true) {
        // -- To allow CAV to move two squares
        if (selectedUnit.type == "CAV" && selectedUnit.twoSquaresN == true) {
          console.log("check twoSquaresN: " + selectedUnit.twoSquaresN);
          var borderCheck = 2;
        } else if (selectedUnit.type == "CAV" && selectedUnit.twoSquaresE == true) {
          console.log("check twoSquaresE: " + selectedUnit.twoSquaresE);
          var borderCheck = 2;
        } else if (selectedUnit.type == "CAV" && selectedUnit.twoSquaresS == true) {
          console.log("check twoSquaresS: " + selectedUnit.twoSquaresS);
          var borderCheck = 2;
        } else if (selectedUnit.type == "CAV" && selectedUnit.twoSquaresW == true) {
          console.log("check twoSquaresW: " + selectedUnit.twoSquaresW);
          var borderCheck = 2;
        } else {
          console.log("check twoSquaresN: " + selectedUnit.twoSquaresN);
          var borderCheck = 1;
        };
        // --
        // -- This labels an AR as stationary or not. Only stationary AR can fire their cannons.
        if (selectedUnit.type == "AR" && selectedUnit.nextDirection == "center") {
          selectedUnit.inPlace = true;
        } else {
          selectedUnit.inPlace = false;
        };
        // --
        if (selectedUnit.nextDirection == "north" && selectedUnit.yValue > 1) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue;
          selectedUnit.nextYvalue = selectedUnit.yValue - borderCheck;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          };
        } else if (selectedUnit.nextDirection == "east" && selectedUnit.xValue < maxXvalue) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue + borderCheck;
          selectedUnit.nextYvalue = selectedUnit.yValue;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          };
        } else if (selectedUnit.nextDirection == "south" && selectedUnit.yValue < maxYvalue) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue;
          selectedUnit.nextYvalue = selectedUnit.yValue + borderCheck;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          }
        } else if (selectedUnit.nextDirection == "west" && selectedUnit.xValue > 1) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue - borderCheck;
          selectedUnit.nextYvalue = selectedUnit.yValue;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          }
        } else if (selectedUnit.nextDirection == "northWest" && selectedUnit.xValue > 1 && selectedUnit.yValue > 1) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue - 1;
          selectedUnit.nextYvalue = selectedUnit.yValue - 1;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          }
        } else if (selectedUnit.nextDirection == "northEast" && selectedUnit.xValue < maxXvalue && selectedUnit.yValue > 1) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue + 1;
          selectedUnit.nextYvalue = selectedUnit.yValue - 1;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          }
        } else if (selectedUnit.nextDirection == "southEast" && selectedUnit.xValue < maxXvalue && selectedUnit.yValue < maxYvalue) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue + 1;
          selectedUnit.nextYvalue = selectedUnit.yValue + 1;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          }
        } else if (selectedUnit.nextDirection == "southWest" && selectedUnit.xValue > 1 && selectedUnit.yValue < maxYvalue) {
          showBattleReport(selectedUnit);
          selectedUnit.nextXvalue = selectedUnit.xValue - 1;
          selectedUnit.nextYvalue = selectedUnit.yValue + 1;
          var nextGrid = findNextGrid();
          var currentGrid = findCurrentGrid();
          if (nextGrid == undefined) {
            reportError(selectedUnit,"unit cannot leave the battlefield")
          } else if (nextGrid.terrain == "water") {
            reportError(selectedUnit,"unit cannot stay in water.")
          } else {
            if (currentPlayer == blueTeam) {
              nextGrid.bluePresent.push(selectedUnit);
            } else if (currentPlayer == redTeam) {
              nextGrid.redPresent.push(selectedUnit);
            };
            completedPresent.push(selectedUnit.name + ": completed");
            removeAbsentUnit();
          }
        } else {
          reportError(selectedUnit,"cannot to leave the battlefield.");
        };
      } else if (selectedUnit.attack == false) {
        var currentGrid = findCurrentGrid();
        var nextGrid = currentGrid;
        var currentDirection = selectedUnit.direction;

        // This whole stretch is to prevent muliple units from filling the same defensive line
        var blockLine = false;
        var activeUnits = [];
        const currentInfType = currentPlayer.infantry;
        const currentCavType = currentPlayer.cavalry;
        const currentArType = currentPlayer.artillery;
        const typeUnitsActive = (type) => {
          for (var m = 0; m < type.length; m++) {
            if (type[m].active == true) {
              return activeUnits.push(type[m]);
            }
          }
        };
        typeUnitsActive(currentInfType);
        typeUnitsActive(currentCavType);
        typeUnitsActive(currentArType);
        var orderNumber = null;
        var orderUnit = null;
        for (var n = 0; n < activeUnits.length; n++) {
          if (selectedUnit.name == activeUnits[n].name) {
            orderNumber = n;
            orderUnit = activeUnits[n];
          }
        };
        for (var o = 0; o < activeUnits.length; o++) {
          if (orderNumber > o) {
            if (activeUnits[o].xValue == selectedUnit.xValue && activeUnits[o].yValue == selectedUnit.yValue && activeUnits[o].direction == selectedUnit.nextDirection && selectedUnit.nextDirection != "center") {
              blockLine = true;
            }
          } else if (orderNumber < o) {
            if (activeUnits[o].xValue == selectedUnit.xValue && activeUnits[o].yValue == selectedUnit.yValue && activeUnits[o].nextDirection == selectedUnit.nextDirection && activeUnits[o].direction == selectedUnit.nextDirection && selectedUnit.nextDirection != "center") {
              blockLine = true;
            }
          };
        };
        if (blockLine == true) {
          errorPresent.push(selectedUnit.name + ": INCOMPLETE");
        } else {
          var currentID = "#x" + currentGrid.xValue + "y" + currentGrid.yValue + "_" + currentDirection;
          $(currentID).text("").css("background-color","transparent");
          selectedUnit.direction = selectedUnit.nextDirection;
          selectedUnit.nextXvalue = currentGrid.xValue;
          selectedUnit.nextYvalue = currentGrid.yValue;
          completedPresent.push(selectedUnit.name + ": completed");
        }
        showBattleReport(selectedUnit);
      } else {
        console.log("An error occurred in issueOneOrder.");
      };
      ordersCarriedOut.push(selectedUnit);
    };
    // console.log("ordersCarriedOut: " + ordersCarriedOut.length);
    if (selectedUnit.type == "CAV") {
      selectedUnit.twoSquaresN = null;
      selectedUnit.twoSquaresE = null;
      selectedUnit.twoSquaresS = null;
      selectedUnit.twoSquaresW = null;
    };
  };

  // This function takes place in issueAllOrders to see if a unit's orders are an error and, if so, resets that unit's values.
  const checkIfError = (unitToCheck) => {
    for (var i = 0; i < errorPresent.length; i++) {
      if (unitToCheck == errorPresent[i]) {
        errorPresent[i].nextDirection = "center";
        errorPresent[i].nextXvalue = null;
        errorPresent[i].nextYvalue = null;
      }
    }
  };

  // In this, a unit's values of "xValue", "yValue", and "direction" are all changed to their "next" partner's values, and the "nextValues" are now null.
  const changeCurrentValues = () => {
    if (selectedUnit.nextXvalue != null && selectedUnit.nextYvalue != null) {
      selectedUnit.xValue = selectedUnit.nextXvalue;
      selectedUnit.yValue = selectedUnit.nextYvalue;
    };
    selectedUnit.nextXvalue = null;
    selectedUnit.nextYvalue = null;
    if (selectedUnit.attack == true) {
      selectedUnit.direction = "center";
      // I think I set up the below line IOT keep a player's unit from continuing in that direction on its own, but I had to take it off because nextDirection is important for the scores in "battleSequence". Find a different way to prevent them from moving on their own AFTER the battle.
      selectedUnit.nextDirection = "center";
      selectedUnit.attack = false;
    } else if (selectedUnit.attack == false) {
      selectedUnit.nextDirection = selectedUnit.direction;
    } else {
      console.log("Error in changeCurrentValues.")
    }
  };

  // THIS IS HOW A BATTLE IS CARRIED OUT!!!
  const battleSequence = (grid) => {
    var attackerScore = 0;
    var allAttackers = "test";
    var attackTeam = null;
    if (currentPlayer.teamName == blueTeam.teamName) {
      allAttackers = grid.bluePresent;
      attackTeam = blueTeam;
    } else {
      allAttackers = grid.redPresent;
      attackTeam = redTeam;
    };
    var defenderScore = 0;
    var allDefenders = "test";
    var defendTeam = null;
    if (currentPlayer.teamName == blueTeam.teamName) {
      allDefenders = grid.redPresent;
      defendTeam = redTeam;
    } else {
      allDefenders = grid.bluePresent;
      defendTeam = blueTeam;
    };
    // --- This reports the facts before the actual fights...
    reportFacts = [];
    if (grid.yValue <= northHalf) {
      reportFacts.push(" north");
    } else {
      reportFacts.push(" south");
    };
    if (grid.xValue <= westHalf) {
      reportFacts.push("west");
    } else {
      reportFacts.push("east");
    };
    if (currentPlayer.teamName == blueTeam.teamName) {
      reportFacts.push(blueTeam.teamName);
      reportFacts.push(redTeam.teamName);
    } else {
      reportFacts.push(redTeam.teamName);
      reportFacts.push(blueTeam.teamName);
    };
    const displayUnits = (thesePresent) => {
      if (thesePresent.length == 1) {
        reportFacts.push(" " + thesePresent[0].name)
      } else if (thesePresent.length == 2) {
        reportFacts.push(" " + thesePresent[0].name + " and " + thesePresent[1].name + ".")
      } else {
        var lastUnit = thesePresent.length - 1;
        var allNames = " " + thesePresent[0].name + ",";
        for (var r = 1; r < lastUnit; r++) {
          allNames = allNames + " " + thesePresent[r].name + ",";
        };
        allNames = allNames + " and " + thesePresent[lastUnit].name;
        reportFacts.push(allNames);
      }
    };
    displayUnits(allAttackers);
    displayUnits(allDefenders);
    // ---
    var defLineUse = false;
    defenderScore = addPoints(allDefenders,allAttackers,allDefenders,grid,defLineUse);
    attackerScore = addPoints(allAttackers,allAttackers,allDefenders,grid,defLineUse);
    attackTally = 0;
    defendTally = 0;
    totalTally = 0;
    console.log("Defender Score: " + defenderScore);
    console.log("Attacker Score: " + attackerScore);
    while (allDefenders.length > 0 && allAttackers.length > 0) {
      var attackerIndex = Math.floor(Math.random() * Math.floor(allAttackers.length));
      var attackerUnit = allAttackers[attackerIndex];
      var defenderIndex = Math.floor(Math.random() * Math.floor(allDefenders.length));
      var defenderUnit = allDefenders[defenderIndex];
      var tookHit = null;
      var hitIndex = null;
      var hitArray = null;
      var totalScore = defenderScore + attackerScore;
      var attackerChance = attackerScore / totalScore;
      var chanceNumber = Math.random();
      if (chanceNumber < attackerChance) {
        defenderUnit.health -= 2;
        console.log(defenderUnit.name + " took a hit!");
        tookHit = defenderUnit;
        hitIndex = defenderIndex;
        hitArray = allDefenders;
        attackTally += 1;
      } else {
        attackerUnit.health -= 2;
        console.log(attackerUnit.name + " took a hit!");
        tookHit = attackerUnit;
        hitIndex = attackerIndex;
        hitArray = allAttackers;
        defendTally += 1;
      };
      if (tookHit.health <= 0) {
        tookHit.active = false;
        hitArray.splice(hitIndex,1);
        console.log("The " + tookHit.name + " was defeated! The remaining units are...");
        console.log(hitArray);
      }
    }
    // --- ... and this reports the final results
    if (allAttackers.length > 0) {
      reportFacts.push(attackTeam.teamName);
    } else {
      reportFacts.push(defendTeam.teamName);
    };
    totalTally = attackTally + defendTally;
    reportFacts.push(totalTally);
    if (totalTally < 7) {
      reportFacts.push("short ")
    } else if (totalTally > 12) {
      reportFacts.push("fierce ")
    } else {
      reportFacts.push("");
    };
    console.log(reportFacts);
    // ---
  }

  const addPoints = (thosePresent,atkTeam,defTeam,oneGrid,defLineStatus) => {
    var finalScore = 40;
    var atkDir = [];
    var defDir = [];
    // This determines the directions that the two teams' units are facing
    for (var a = 0; a < atkTeam.length; a++) {
      atkDir.push(atkTeam[a].nextDirection);
    };
    for (var b = 0; b < defTeam.length; b++) {
      defDir.push(defTeam[b].nextDirection);
    };
    if (thosePresent == defTeam) {
      for (var i = 0; i < thosePresent.length; i++) {
        console.log("Defending Unit: ");
        console.log(thosePresent[i].name);
        // add minor points to defender if "attack: false"
        if (thosePresent[i].attack == false) {
          finalScore += 10;
          console.log("Prepared defenses: +10");
        };
        // add major points to defender if "direction" opposite of attacker "direction"
        var defenseLine = 0;
        for (var j = 0; j < atkTeam.length; j++) {
          if (thosePresent[i].direction == "north" && atkTeam[j].nextDirection == "south") {
            defenseLine += 1;
          } else if (thosePresent[i].direction == "south" && atkTeam[j].nextDirection == "north") {
            defenseLine += 1;
          } else if (thosePresent[i].direction == "west" && atkTeam[j].nextDirection == "east") {
            defenseLine += 1;
          } else if (thosePresent[i].direction == "east" && atkTeam[j].nextDirection == "west") {
            defenseLine += 1;
          };
          if (defenseLine > 0 && defLineStatus == false) {
            finalScore += 40;
            defLineStatus = true;
            console.log("Strong defensive line: +40");
          };
        };
        // add major points to defender if battlefield "terrain" is "hill"
        // add minor points to defender if battlefield "terrain" is "woods"
        if (oneGrid.terrain == "hill") {
          finalScore += 60;
          console.log("Took the high ground: +60");
        } else if (oneGrid.terrain == "woods") {
          finalScore += 20;
          console.log("Some protection from trees: +20")
        };
        // add major points to defender if battlefield "cover" is "heavy"
        // add minor points to defender if battlefield "cover" is "light"
        if (oneGrid.cover == "heavy") {
          finalScore += 40;
          console.log("Thick concealment: +40");
        } else if (oneGrid.cover == "light") {
          finalScore += 20;
          console.log("Some concealment: +20");
        }
      }
    } else if (thosePresent == atkTeam) {
      // add major points to attackers if no "nextDirection" opposes the attacker's "nextDirection"
      // add minor points to attacker if attacker meets "nextDirection: center"
      for (var i = 0; i < thosePresent.length; i++) {
        console.log("Attacking Unit: ");
        console.log(thosePresent[i].name);
        var defenseLine = 0;
        var defenseCenter = 0;
        for (var j = 0; j < defTeam.length; j++) {
          if (thosePresent[i].nextDirection == "north" && defTeam[j].direction == "south") {
            defenseLine += 1;
          } else if (thosePresent[i].nextDirection == "south" && defTeam[j].direction == "north") {
            defenseLine += 1;
          } else if (thosePresent[i].nextDirection == "west" && defTeam[j].direction == "east") {
            defenseLine += 1;
          } else if (thosePresent[i].nextDirection == "east" && defTeam[j].direction == "west") {
            defenseLine += 1;
          } else if (defTeam[j].direction == "center") {
            defenseCenter += 1;
          };
        };
        if (defenseLine == 0 && defenseCenter == 0) {
          finalScore += 60;
          console.log("Flanked defensive line: +60");
        } else if (defenseLine == 0 && defenseCenter > 0) {
          finalScore += 20;
          console.log("Hit thin defensive line: +20");
        };
      };
      // add major points to attacker if battlefield "terrain" is "field"
      if (oneGrid.terrain == "field") {
        finalScore += 30;
        console.log("Enemy in open field: +30");
      };
      // add major points to attacker if battlefield "cover" is "none"
      if (oneGrid.cover == "none") {
        finalScore += 30;
        console.log("Enemy had no concealment: +30")
      }
    }
    return finalScore
  };

  const clearOldRep = () => {
    for (var g = 0; g < orderNum; g++) {
      $("li").remove();
    }
  };

  const showBattleReport = (unitReport) => {
    if (unitReport.attack == true) {
      var attackOrder = unitReport.name + ": march " + unitReport.nextDirection + ". ";
      battleReport.push(attackOrder);
    } else {
      if (unitReport.direction == "center") {
        var defendOrder = unitReport.name + ": defend central position.";
      } else {
        var defendOrder = unitReport.name + ": defend " + unitReport.nextDirection + "ern position. ";
      };
      battleReport.push(defendOrder);
    };
  };

  const completeReport = () => {
    for (var rep = 0; rep < battleReport.length; rep++) {
      $("#orderList").append("<li>" + battleReport[rep] + "</li>")
    };
    if (completedPresent.length > 0) {
      for (var comP = 0; comP < completedPresent.length; comP++) {
        $("#resultList").append("<li>" + completedPresent[comP] + "</li>")
      }
    };
    if (errorPresent.length > 0) {
      for (var errP = 0; errP < errorPresent.length; errP++) {
        $("#resultList").append("<li><b>" + errorPresent[errP] + "</b></li>")
      }
    };
    if (battleOccur == true) {
      for (var battP = 0; battP < allBattles.length; battP++) {
        $("#battleList").append(allBattles[battP]);
      }
    } else {
      $("#battleList").append("<li>No battles to report</li>");
    }
  }

  const checkUnitsLeft = (unitType) => {
    var numLeft = 0;
    for (var i = 0; i < unitType.length; i++) {
      if (unitType[i].active == true) {
        numLeft += 1
      }
    }
    return numLeft
  };

  const findCannonTargets = (oneCannon,collectTargets) => {
    var oneUp = [];
    if (oneCannon.yValue > 1) {
      oneUp.push(oneCannon.xValue);
      oneUp.push(oneCannon.yValue - 1);
    };
    collectTargets.push(oneUp);
    var twoUp = [];
    if (oneCannon.yValue > 2) {
      twoUp.push(oneCannon.xValue);
      twoUp.push(oneCannon.yValue - 2);
    };
    collectTargets.push(twoUp);
    var oneRight = [];
    if (oneCannon.xValue < maxXvalue) {
      oneRight.push(oneCannon.xValue + 1);
      oneRight.push(oneCannon.yValue);
    };
    collectTargets.push(oneRight);
    var twoRight = [];
    if (oneCannon.xValue < (maxXvalue - 1)) {
      twoRight.push(oneCannon.xValue + 2);
      twoRight.push(oneCannon.yValue);
    };
    collectTargets.push(twoRight);
    var oneDown = [];
    if (oneCannon.yValue < maxYvalue) {
      oneDown.push(oneCannon.xValue);
      oneDown.push(oneCannon.yValue + 1);
    };
    collectTargets.push(oneDown);
    var twoDown = [];
    if (oneCannon.yValue < (maxYvalue - 1)) {
      twoDown.push(oneCannon.xValue);
      twoDown.push(oneCannon.yValue + 2);
    };
    collectTargets.push(twoDown);
    var oneLeft = [];
    if (oneCannon.xValue > 1) {
      oneLeft.push(oneCannon.xValue - 1);
      oneLeft.push(oneCannon.yValue);
    };
    collectTargets.push(oneLeft);
    var twoLeft = [];
    if (oneCannon.xValue > 2) {
      twoLeft.push(oneCannon.xValue - 2);
      twoLeft.push(oneCannon.yValue);
    };
    collectTargets.push(twoLeft);
  }

  const fireCannons = (theTeam) => {
    for (var v = 0; v < theTeam.artillery.length; v++) {
      var cannon = theTeam.artillery[v];
      if (cannon.inPlace == true && cannon.active == true) {
        var allTargets = [];
        findCannonTargets(cannon,allTargets);
        for (var w = 0; w < allGrids.length; w++) {
          for (var y = 0; y < allTargets.length; y++) {
            if (allGrids[w].xValue == allTargets[y][0] && allGrids[w].yValue == allTargets[y][1]) {
              if (theTeam == blueTeam) {
                if (allGrids[w].redPresent.length > 0) {
                  var chanceOfHit = 0;
                  var targetUnit = allGrids[w].redPresent[0];
                  if (cannon.direction == "center") {
                    if (y == 0 || y == 2 || y == 4 || y == 6) {
                      chanceOfHit = 0.3;
                    } else if (y == 1 || y == 3 || y == 5 || y == 7) {
                      chanceOfHit = 0.1;
                    } else {
                      console.log("this didn't work");
                    };
                  } else {
                    if (cannon.direction == "north") {
                      if (y == 0) {
                        chanceOfHit = 0.8;
                      } else if (y == 1) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the north")
                      };
                    } else if (cannon.direction == "east") {
                      if (y == 2) {
                        chanceOfHit = 0.8;
                      } else if (y == 3) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the east")
                      };
                    } else if (cannon.direction == "south") {
                      if (y == 4) {
                        chanceOfHit = 0.8;
                      } else if (y == 5) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the south")
                      };
                    } else if (cannon.direction == "west") {
                      if (y == 6) {
                        chanceOfHit = 0.8;
                      } else if (y == 7) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the west")
                      };
                    };
                  };
                  // "Fire" the cannon and see if it hits. If the actualShot is within chance, then it's a hit.
                  var actualShot = Math.random();
                  if (actualShot < chanceOfHit) {
                    var hitTarget = true;
                  } else {
                    var hitTarget = false;
                  };
                  // change the health values if the hits are successful
                  if (hitTarget == true) {
                    targetUnit.health -= 2;
                    $("#battleList").append("<li><b>The " + cannon.name + " hit the " + targetUnit.name + " with a cannon barrage.</b></li>");
                  } else {
                    $("#battleList").append("<li>The " + cannon.name + " failed to hit the " + targetUnit.name + ".</li>");
                  };
                  if (targetUnit.health <= 0) {
                    targetUnit.active = false;
                    // var removeImgHere = "#" + targetUnit.xValue + "y" + targetUnit.yValue + "_" + targetUnit.direction;
                    // $(removeImgHere).empty();
                    allGrids[w].redPresent.splice(0,1);
                    $("#battleList").append("<li>A barrage destroyed the " + targetUnit.name + " unit!</li>");
                    console.log("The " + targetUnit.name + " was defeated by a cannon barrage!")
                  }
                  // report any hits on the battle reports
                }
              } else {
                if (allGrids[w].bluePresent.length > 0) {
                  var chanceOfHit = 0;
                  var targetUnit = allGrids[w].bluePresent[0];
                  if (cannon.direction == "center") {
                    if (y == 0 || y == 2 || y == 4 || y == 6) {
                      chanceOfHit = 0.3;
                    } else if (y == 1 || y == 3 || y == 5 || y == 7) {
                      chanceOfHit = 0.1;
                    } else {
                      console.log("this didn't work");
                    };
                  } else {
                    if (cannon.direction == "north") {
                      if (y == 0) {
                        chanceOfHit = 0.8;
                      } else if (y == 1) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the north")
                      };
                    } else if (cannon.direction == "east") {
                      if (y == 2) {
                        chanceOfHit = 0.8;
                      } else if (y == 3) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the east")
                      };
                    } else if (cannon.direction == "south") {
                      if (y == 4) {
                        chanceOfHit = 0.8;
                      } else if (y == 5) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the south")
                      };
                    } else if (cannon.direction == "west") {
                      if (y == 6) {
                        chanceOfHit = 0.8;
                      } else if (y == 7) {
                        chanceOfHit = 0.6;
                      } else {
                        chanceOfHit = 0;
                        console.log("nothing in the west")
                      };
                    };
                  };
                  // "Fire" the cannon and see if it hits. If it's within chance, it's a hit.
                  var actualShot = Math.random();
                  if (actualShot < chanceOfHit) {
                    var hitTarget = true;
                  } else {
                    var hitTarget = false;
                  };
                  // change the health values if the hits are successful
                  if (hitTarget == true) {
                    targetUnit.health -= 2;
                    $("#battleList").append("<li><b>The " + cannon.name + " hit the " + targetUnit.name + " with a cannon barrage.</b></li>");
                  } else {
                    $("#battleList").append("<li>The " + cannon.name + " failed to hit the " + targetUnit.name + ".</li>");
                  };
                  if (targetUnit.health <= 0) {
                    targetUnit.active = false;
                    // var removeImgHere = "#" + targetUnit.xValue + "y" + targetUnit.yValue + "_" + targetUnit.direction;
                    // $(removeImgHere).empty();
                    allGrids[w].bluePresent.splice(0,1);

                    $("#battleList").append("<li>That barrage destroyed the " + targetUnit.name + " unit!</li>");
                    console.log("The " + targetUnit.name + " was defeated by a cannon barrage!")
                  }
                  // report any hits on the battle reports
                }
              }
            }
          }
        }
      } else {
        cannon.inPlace = true;
      }
    }
  };

  const issueAllOrders = () => {
    var ordersDone = [];
    clearOldRep();
    selectedInfantry = currentPlayer.infantry;
    selectedCavalry = currentPlayer.cavalry;
    selectedArtillery = currentPlayer.artillery;
    for (var i = 0; i < selectedInfantry.length; i++) {
      selectedUnit = selectedInfantry[i];
      issueOneOrder(ordersDone);
    };
    for (var i = 0; i < selectedCavalry.length; i++) {
      selectedUnit = selectedCavalry[i];
      issueOneOrder(ordersDone);
    };
    for (var i = 0; i < selectedArtillery.length; i++) {
      selectedUnit = selectedArtillery[i];
      issueOneOrder(ordersDone);
    };
    fireCannons(oppositePlayer);
    fireCannons(currentPlayer);
    battleOccur = false;
    for (var i = 0; i < allGrids.length; i++) {
      var battlefield = allGrids[i];
      if (battlefield.bluePresent.length > 0 && battlefield.redPresent.length > 0) {
        console.log("Battle started.")
        battleSequence(battlefield);
        battleOccur = true;
        allBattles.push("<li>A " + reportFacts[8] + "battle took place in the " + reportFacts[0] + reportFacts[1] + ". " + reportFacts[2] + " forces, composed of the " + reportFacts[4] + ", attacked the " + reportFacts[3] + "'s " + reportFacts[5] + ". During the fight, " + reportFacts[7] + " attacks and counter-attacks took place. Ultimately, " + reportFacts[6] + " forces controlled the battlefield</li>");
        console.log("allBattles: ");
        console.log(allBattles);
      };
    };
    for (var i = 0; i < selectedInfantry.length; i++) {
      selectedUnit = selectedInfantry[i];
      checkIfError(selectedUnit);
      changeCurrentValues();
    };
    for (var i = 0; i < selectedCavalry.length; i++) {
      selectedUnit = selectedCavalry[i];
      checkIfError(selectedUnit);
      changeCurrentValues();
    };
    for (var i = 0; i < selectedArtillery.length; i++) {
      selectedUnit = selectedArtillery[i];
      checkIfError(selectedUnit);
      changeCurrentValues();
    };
    completeReport();
    allBattles = [];
    errorPresent = [];
    showGridUnits(startGrids, null, currentPlayer, selectedInfantry);
    showGridUnits(startGrids, null, currentPlayer, selectedCavalry);
    showGridUnits(startGrids, null, currentPlayer, selectedArtillery);
    orderNum = battleReport.length;
    battleReport = [];
    if (currentPlayer == blueTeam) {
      currentPlayer = redTeam;
      oppositePlayer = blueTeam;
    } else if (currentPlayer == redTeam) {
      currentPlayer = blueTeam;
      oppositePlayer = redTeam;
    };
    // The remaining left in issueAllOrders checks to see if someone's won yet
    var blueCavLeft = checkUnitsLeft(blueTeam.cavalry);
    var blueInLeft  = checkUnitsLeft(blueTeam.infantry);
    var blueArLeft  = checkUnitsLeft(blueTeam.artillery);
    var blueUnitsLeft = blueCavLeft + blueInLeft + blueArLeft;
    var redCavLeft = checkUnitsLeft(redTeam.cavalry);
    var redInLeft  = checkUnitsLeft(redTeam.infantry);
    var redArLeft  = checkUnitsLeft(redTeam.artillery);
    var redUnitsLeft = redCavLeft + redInLeft + redArLeft;
    if (blueUnitsLeft <= 0) {
      $("#openPage").css('display','block');
      $("#openClose").css('display','block')
      $("#winName").text(redTeam.playerName);
      $("#winArmy").text(redTeam.teamName);
    } else if (redUnitsLeft <= 0) {
      $("#openPage").css('display','block');
      $("#openClose").css('display','block')
      $("#winName").text(blueTeam.playerName);
      $("#winArmy").text(blueTeam.teamName);
    } else {
      showCurrentPlayer();
      console.log("It is now the " + currentPlayer.teamName + " team's turn. The " + oppositePlayer.teamName + " team is the opposite player.");
      removeAllColors();
      refreshAllColumns();
      errorPresent = [];
      completedPresent = [];
      console.log(allGrids);
      // console.log(blueTeam);
      // console.log(redTeam);
    }
    startClick = true;
    lastClickUnit = null;
  };

  $('#ordersButton').click(issueAllOrders);

  // At the end of the game, the player can reset the page
  const resetFunc = () => {
    window.location.reload();
  };
  $("#reset").click(resetFunc);

  // This displays the selected unit's values
  const selectedValues = () =>{
    // console.log("Unit: " + selectedUnit.name);
    // console.log(selectedUnit);
    $("#unitName").text(selectedUnit.fullName);
    if (selectedUnit.attack == true) {
      $("#attackButton").css('color','white').css('background-color','blue');
      $("#defendButton").css('color','black').css('background-color','transparent');
    } else {
      $("#attackButton").css('color','black').css('background-color','transparent');
      $("#defendButton").css('color','white').css('background-color','red');
    };
    $("#healthReading").text(selectedUnit.health);
    if (selectedUnit.health <= 2) {
      $("#healthReading").css('color','red');
    } else {
      $("#healthReading").css('color','black');
    }
    showUnitDirection();
    if (selectedUnit.direction != selectedUnit.nextDirection) {
      showUnitNextDirection();
    };
  };

  var gridAndDirection = null;

  // This will reset all of the text color after a) a new unit is selected or b) all of the orders have been issued
  const removeAllColors = () => {
    const allDirections = ["_north", "_east", "_south", "_west", "_center"];
    for (var d = 0; d < allGrids.length; d++) {
      var coordinates = "#x" + allGrids[d].xValue + "y" + allGrids[d].yValue;
      for (var e = 0; e < allDirections.length; e++) {
        var removeColorHere = coordinates + allDirections[e];

        // START: This makes any directed, defensive lines disappear if the defenders were defeated
        var notCenter = false;
        for (var f = 0; f < allGrids[d].bluePresent.length; f++) {
          if (allGrids[d].bluePresent[f].direction != "center") {
            notCenter = true;
          }
        };
        for (var f = 0; f < allGrids[d].redPresent.length; f++) {
          if (allGrids[d].redPresent[f].direction != "center") {
            notCenter = true;
          }
        };
        if (notCenter == false) {
          var northDefLine = coordinates + "_north";
          var eastDefLine = coordinates + "_east";
          var southDefLine = coordinates + "_south";
          var westDefLine = coordinates + "_west";
          $(northDefLine).css("background-color","transparent").text("");
          $(eastDefLine).css("background-color","transparent").text("");
          $(southDefLine).css("background-color","transparent").text("");
          $(westDefLine).css("background-color","transparent").text("");
        };
        // END

        if (allGrids[d].bluePresent.length > 0) {
          $(removeColorHere).css('color','white').css("border","0px solid transparent");
        } else if (allGrids[d].redPresent.length > 0) {
          $(removeColorHere).css('color','black').css("border","0px solid transparent");
        } else {
          $(removeColorHere).css('color','transparent').css("border","0px solid transparent");
        }
      }
    }
  };

  // This is where you start to select a unit
  var clickNum = null;

  const newClickNum = (num) => {
    clickNum = num.data;
  }

  // ------ INFANTRY --------
  const infantryNumSelect = () =>{
    if (startClick == true) {
      lastClickUnit = null;
      startClick = false;
    } else {
      lastClickUnit = selectedUnit.name;
    };
    selectedUnit = currentPlayer.infantry[clickNum];
    removeAllColors();
    gridAndDirection = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_" + selectedUnit.direction;
    $(gridAndDirection).css("border","5px solid yellow");
    selectedValues();
  };

  const borderBlueInColumn = () => {
    for (var k = 0; k < currentPlayer.infantry.length; k++) {
      if (currentPlayer.infantry[k].columnNum == selectedUnit.columnNum) {
        $("#blueIn" + k).css("border","5px solid red")
      } else {
        $("#blueIn" + k).css("border","none")
      };
    };
    for (var k = 0; k < currentPlayer.artillery.length; k++) {
      $("#blueAr" + k).css("border","none")
    };
    for (var k = 0; k < currentPlayer.cavalry.length; k++) {
      $("#blueCav" + k).css("border","none")
    };
  };

  const onlyClickBlueIn = () => {
    if (currentPlayer == blueTeam) {
      infantryNumSelect()
      borderBlueInColumn();
    }
  };

  $("#blueIn0").click(0, newClickNum).click(onlyClickBlueIn);
  $("#blueIn1").click(1, newClickNum).click(onlyClickBlueIn);
  $("#blueIn2").click(2, newClickNum).click(onlyClickBlueIn);
  $("#blueIn3").click(3, newClickNum).click(onlyClickBlueIn);
  $("#blueIn4").click(4, newClickNum).click(onlyClickBlueIn);

  const borderRedInColumn = () => {
    for (var k = 0; k < currentPlayer.infantry.length; k++) {
      if (currentPlayer.infantry[k].columnNum == selectedUnit.columnNum) {
        $("#redIn" + k).css("border","5px solid blue")
      } else {
        $("#redIn" + k).css("border","none")
      };
    };
    for (var k = 0; k < currentPlayer.artillery.length; k++) {
      $("#redAr" + k).css("border","none")
    };
    for (var k = 0; k < currentPlayer.cavalry.length; k++) {
      $("#redCav" + k).css("border","none")
    };
  };

  const onlyClickRedIn = () => {
    if (currentPlayer == redTeam) {
      infantryNumSelect();
      borderRedInColumn();
    }
  };

  $("#redIn0").click(0, newClickNum).click(onlyClickRedIn);
  $("#redIn1").click(1, newClickNum).click(onlyClickRedIn);
  $("#redIn2").click(2, newClickNum).click(onlyClickRedIn);
  $("#redIn3").click(3, newClickNum).click(onlyClickRedIn);
  $("#redIn4").click(4, newClickNum).click(onlyClickRedIn);

  // ------ CAVALRY --------
  const cavalryNumSelect = () =>{
    if (startClick == true) {
      lastClickUnit = null;
      startClick = false;
    } else {
      lastClickUnit = selectedUnit.name;
    };
    selectedUnit = currentPlayer.cavalry[clickNum];
    removeAllColors();
    gridAndDirection = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_" + selectedUnit.direction;
    $(gridAndDirection).css("border","5px solid yellow");
    selectedValues();
  };

  const borderBlueCavColumn = () => {
    for (var k = 0; k < currentPlayer.cavalry.length; k++) {
      if (currentPlayer.cavalry[k].columnNum == selectedUnit.columnNum) {
        $("#blueCav" + k).css("border","5px solid red")
      } else {
        $("#blueCav" + k).css("border","none")
      };
    };
    for (var k = 0; k < currentPlayer.artillery.length; k++) {
      $("#blueAr" + k).css("border","none")
    };
    for (var k = 0; k < currentPlayer.infantry.length; k++) {
      $("#blueIn" + k).css("border","none")
    };
  };

  const onlyClickBlueCav = () => {
    if (currentPlayer == blueTeam) {
      cavalryNumSelect();
      borderBlueCavColumn();
    }
  };

  $("#blueCav0").click(0, newClickNum).click(onlyClickBlueCav);
  $("#blueCav1").click(1, newClickNum).click(onlyClickBlueCav);
  $("#blueCav2").click(2, newClickNum).click(onlyClickBlueCav);
  $("#blueCav3").click(3, newClickNum).click(onlyClickBlueCav);
  $("#blueCav4").click(4, newClickNum).click(onlyClickBlueCav);

  const borderRedCavColumn = () => {
    for (var k = 0; k < currentPlayer.cavalry.length; k++) {
      if (currentPlayer.cavalry[k].columnNum == selectedUnit.columnNum) {
        $("#redCav" + k).css("border","5px solid blue")
      } else {
        $("#redCav" + k).css("border","none")
      };
    };
    for (var k = 0; k < currentPlayer.artillery.length; k++) {
      $("#redAr" + k).css("border","none")
    };
    for (var k = 0; k < currentPlayer.infantry.length; k++) {
      $("#redIn" + k).css("border","none")
    };
  };

  const onlyClickRedCav = () => {
    if (currentPlayer == redTeam) {
      cavalryNumSelect();
      borderRedCavColumn();
    }
  };

  $("#redCav0").click(0, newClickNum).click(onlyClickRedCav);
  $("#redCav1").click(1, newClickNum).click(onlyClickRedCav);
  $("#redCav2").click(2, newClickNum).click(onlyClickRedCav);
  $("#redCav3").click(3, newClickNum).click(onlyClickRedCav);
  $("#redCav4").click(4, newClickNum).click(onlyClickRedCav);

  // ------ ARTILLERY --------
  const artilleryNumSelect = () =>{
    if (startClick == true) {
      lastClickUnit = null;
      startClick = false;
    } else {
      lastClickUnit = selectedUnit.name;
    };
    selectedUnit = currentPlayer.artillery[clickNum];
    removeAllColors();
    gridAndDirection = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_" + selectedUnit.direction;
    $(gridAndDirection).css("border","5px solid yellow");
    selectedValues();
  };

  const borderBlueArColumn = () => {
    for (var k = 0; k < currentPlayer.artillery.length; k++) {
      if (currentPlayer.artillery[k].columnNum == selectedUnit.columnNum) {
        $("#blueAr" + k).css("border","5px solid red")
      } else {
        $("#blueAr" + k).css("border","none")
      };
    };
    for (var k = 0; k < currentPlayer.cavalry.length; k++) {
      $("#blueCav" + k).css("border","none")
    };
    for (var k = 0; k < currentPlayer.infantry.length; k++) {
      $("#blueIn" + k).css("border","none")
    };
  };

  const onlyClickBlueAr = () => {
    if (currentPlayer == blueTeam) {
      artilleryNumSelect();
      borderBlueArColumn();
    }
  };

  $("#blueAr0").click(0, newClickNum).click(onlyClickBlueAr);
  $("#blueAr1").click(1, newClickNum).click(onlyClickBlueAr);
  $("#blueAr2").click(2, newClickNum).click(onlyClickBlueAr);
  $("#blueAr3").click(3, newClickNum).click(onlyClickBlueAr);
  $("#blueAr4").click(4, newClickNum).click(onlyClickBlueAr);

  const borderRedArColumn = () => {
    for (var k = 0; k < currentPlayer.artillery.length; k++) {
      if (currentPlayer.artillery[k].columnNum == selectedUnit.columnNum) {
        $("#redAr" + k).css("border","5px solid blue")
      } else {
        $("#redAr" + k).css("border","none")
      };
    };
    for (var k = 0; k < currentPlayer.cavalry.length; k++) {
      $("#redCav" + k).css("border","none")
    };
    for (var k = 0; k < currentPlayer.infantry.length; k++) {
      $("#redIn" + k).css("border","none")
    };
  };

  const onlyClickRedAr = () => {
    if (currentPlayer == redTeam) {
      artilleryNumSelect();
      borderRedArColumn();
    }
  };

  $("#redAr0").click(0, newClickNum).click(onlyClickRedAr);
  $("#redAr1").click(1, newClickNum).click(onlyClickRedAr);
  $("#redAr2").click(2, newClickNum).click(onlyClickRedAr);
  $("#redAr3").click(3, newClickNum).click(onlyClickRedAr);
  $("#redAr4").click(4, newClickNum).click(onlyClickRedAr);

  // This will show all of the units in their current grid squares. It is run inside of the "makeOneGrid" and "issueAllOrders" functions.
  const showGridUnits = (startCheck, singleGrid, oneTeam, unitType) => {
    // console.log(oppositePlayer);
    if (startCheck == true) {
      startNum = singleGrid;
      endNum = singleGrid + 1;
    } else {
      startNum = 0;
      endNum = totalGrids;
    };
    for (var x = startNum; x < endNum; x++) {
      var currentGrid = x;
      var gridID = "#x" + allGrids[currentGrid].xValue + "y" + allGrids[currentGrid].yValue;
      var gridIDnorth = gridID + "_north";
      var gridIDeast = gridID + "_east";
      var gridIDsouth = gridID + "_south";
      var gridIDwest = gridID + "_west";
      var gridIDcenter = gridID + "_center";
      $("#gridIDnorth").css("border","0px solid transparent");
      $("#gridIDeast").css("border","0px solid transparent");
      $("#gridIDsouth").css("border","0px solid transparent");
      $("#gridIDwest").css("border","0px solid transparent");
      $("#gridIDcenter").css("border","0px solid transparent");
      for (var i = 0; i < unitType.length; i++) {
        if (unitType[i].xValue == allGrids[currentGrid].xValue && unitType[i].yValue == allGrids[currentGrid].yValue) {
          if (unitType[i].active == true) {
            if (unitType[i].direction == "north") {
              if (unitType[i].type == "IN") {
                $(gridIDnorth).append("<img src='stylesheets/images/infantry_top_bottom.png'>");
              } else if (unitType[i].type == "CAV") {
                $(gridIDnorth).append("<img src='stylesheets/images/cavalry_top_bottom.png'>");
              } else if (unitType[i].type == "AR") {
                $(gridIDnorth).append("<img src='stylesheets/images/cannon_top_bottom.png'>");
              };
              if (oneTeam == blueTeam) {
                $(gridIDnorth).css('color','white').css('background-color','blue');
              } else if (oneTeam == redTeam) {
                $(gridIDnorth).css('color','black').css('background-color','red');
              } else {
                console.log("Error ")
              };
            } else if (unitType[i].direction == "east") {
              if (unitType[i].type == "IN") {
                $(gridIDeast).append("<span class='helper'></span><img src='stylesheets/images/infantry_left_right.png'>");
              } else if (unitType[i].type == "CAV") {
                $(gridIDeast).append("<span class='helper'></span><img src='stylesheets/images/cavalry_left_right.png'>");
              } else if (unitType[i].type == "AR") {
                $(gridIDeast).append("<span class='helper'></span><img src='stylesheets/images/cannon_left_right.png'>");
              };
              if (oneTeam == blueTeam) {
                $(gridIDeast).css('color','white').css('background-color','blue');
              } else if (oneTeam == redTeam) {
                $(gridIDeast).css('color','black').css('background-color','red');
              } else {
                console.log("Error ")
              };
            } else if (unitType[i].direction == "south") {
              if (unitType[i].type == "IN") {
                $(gridIDsouth).append("<span class='helper'></span><img src='stylesheets/images/infantry_top_bottom.png'>");
              } else if (unitType[i].type == "CAV") {
                $(gridIDsouth).append("<span class='helper'></span><img src='stylesheets/images/cavalry_top_bottom.png'>");
              } else if (unitType[i].type == "AR") {
                $(gridIDsouth).append("<span class='helper'></span><img src='stylesheets/images/cannon_top_bottom.png'>");
              };
              if (oneTeam == blueTeam) {
                $(gridIDsouth).css('color','white').css('background-color','blue');
              } else if (oneTeam == redTeam) {
                $(gridIDsouth).css('color','black').css('background-color','red');
              } else {
                console.log("Error ")
              };
            } else if (unitType[i].direction == "west") {
              if (unitType[i].type == "IN") {
                $(gridIDwest).append("<span class='helper'></span><img src='stylesheets/images/infantry_left_right.png'>");
              } else if (unitType[i].type == "CAV") {
                $(gridIDwest).append("<span class='helper'></span><img src='stylesheets/images/cavalry_left_right.png'>");
              } else if (unitType[i].type == "AR") {
                $(gridIDwest).append("<span class='helper'></span><img src='stylesheets/images/cannon_left_right.png'>");
              };
              if (oneTeam == blueTeam) {
                $(gridIDwest).css('color','white').css('background-color','blue');
              } else if (oneTeam == redTeam) {
                $(gridIDwest).css('color','black').css('background-color','red');
              } else {
                console.log("Error ")
              };
            } else if (unitType[i].direction == "center") {
              if (unitType[i].type == "IN") {
                $(gridIDcenter).append("<span class='helper'></span><img src='stylesheets/images/infantry_top_bottom.png'>");
              } else if (unitType[i].type == "CAV") {
                $(gridIDcenter).append("<span class='helper'></span><img src='stylesheets/images/cavalry_top_bottom.png'>");
              } else if (unitType[i].type == "AR") {
                $(gridIDcenter).append("<span class='helper'></span><img src='stylesheets/images/cannon_top_bottom.png'>");
              };
              if (allGrids[x].bluePresent.length > 1) {
                var arePresent = allGrids[x].bluePresent;
              } else {
                var arePresent = allGrids[x].redPresent;
              };
              var allCenter = 0;
              for (var s = 0; s < arePresent.length; s++) {
                if (arePresent[s].direction == "center" && arePresent[s].active == true) {
                  allCenter+=1
                }
              };
              if (allCenter > 1) {
                $(gridIDcenter).empty();
                $(gridIDcenter).append("<span class='helper'></span><img src='stylesheets/images/camp.png'>");
              };
              if (oneTeam == blueTeam) {
                $(gridIDcenter).css('background-color','blue');
              } else if (oneTeam == redTeam) {
                $(gridIDcenter).css('background-color','red');
              } else {
                console.log("Error ")
              };
            } else {
              console.log("No direction");
            }
          } else {
            console.log("Remove the " + unitType[i].name + " unit.")
          }
        }
      }
    }
    // console.log("End showGridUnits function");
  };

  // This function will generate random values for a grid and give it the correct CSS settings
  const makeOneGrid = (gridNumber) => {
    // console.log("start makeOneGrid function: " + gridNumber);
    const pickTerrain = () => {
      const pickValue = Math.random();
      if (pickValue < 0.3) {
        allGrids[gridNumber].terrain = "woods"
      } else if (pickValue >= 0.3 && pickValue < 0.4) {
        allGrids[gridNumber].terrain = "hill"
      } else if (pickValue >= 0.4 && pickValue < 0.5) {
        allGrids[gridNumber].terrain = "water"
      } else if (pickValue >= 0.5 && pickValue < 1) {
        allGrids[gridNumber].terrain = "field"
      } else {
        console.log("Error in pickTerrain's pickValue")
      };
      // console.log("pickTerrain is functioning.");
    };
    pickTerrain();
    const pickCover = () => {
      const pickValue = Math.random();
      if (pickValue < 0.2) {
        allGrids[gridNumber].cover = "heavy"
      } else if (pickValue >= 0.2 && pickValue < 0.8) {
        allGrids[gridNumber].cover = "light"
      } else if (pickValue >= 0.8 && pickValue < 1) {
        allGrids[gridNumber].cover = "none"
      } else {
        console.log("Error in pickCover's pickValue")
      };
      // console.log("pickCover is functioning.");
    };
    pickCover();
    var gridID = "#x" + allGrids[gridNumber].xValue + "y" + allGrids[gridNumber].yValue;
    const coverImage = () => {
      if (allGrids[gridNumber].cover == "heavy") {
        $(gridID).css('background-color','green')
      } else if (allGrids[gridNumber].cover == "light") {
        $(gridID).css('background-color','lightgreen')
      } else if (allGrids[gridNumber].cover == "none") {
        $(gridID).css('background-color','orange')
      } else {
        console.log("Error in coverImage")
      };
      // console.log("coverImage is functioning.");
    };
    coverImage();
    const terrainImage = () => {
      var gridIDcenter = gridID + "_center";
      // var gridIDcenter = gridID;
      if (allGrids[gridNumber].terrain == "woods") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/forest.png")')
      } else if (allGrids[gridNumber].terrain == "hill") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/hill_noBackground.png")')
      } else if (allGrids[gridNumber].terrain == "water") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/pond_noBackground.png")')
      } else if (allGrids[gridNumber].terrain == "field") {
        // No terrain image necessary here.
      } else {
        console.log("Error in terrainImage function.")
      };
      // console.log("terrainImage is functioning.");
    };
    terrainImage();
    showGridUnits(startGrids, gridNumber, blueTeam, blueTeam.infantry);
    showGridUnits(startGrids, gridNumber, blueTeam, blueTeam.cavalry);
    showGridUnits(startGrids, gridNumber, blueTeam, blueTeam.artillery);
    showGridUnits(startGrids, gridNumber, redTeam, redTeam.infantry);
    showGridUnits(startGrids, gridNumber, redTeam, redTeam.cavalry);
    showGridUnits(startGrids, gridNumber, redTeam, redTeam.artillery);
  };

  // This uses the "makeOneGrid" function to give values to ALL of the grid squares
  const makeAllGrids = (howMany) => {
    for (var i = 0; i < howMany; i++) {
      makeOneGrid(i);
    };
    startGrids = false;
  };
  makeAllGrids(totalGrids);

})
