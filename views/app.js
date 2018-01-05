$(()=>{
  // console.log("app.js is functioning.")

  const allGrids = [
    // rowOneColumnOne
    {
      xValue: 1,
      yValue: 1,
      terrain: null,
      elevation: null
    },
    // rowOneColumnTwo
    {
      xValue: 2,
      yValue: 1,
      terrain: null,
      elevation: null
    },
    // rowOneColumnThree
    {
      xValue: 3,
      yValue: 1,
      terrain: null,
      elevation: null
    },
    // rowOneColumnFour
    {
      xValue: 4,
      yValue: 1,
      terrain: null,
      elevation: null
    },
    // rowTwoColumnOne
    {
      xValue: 1,
      yValue: 2,
      terrain: null,
      elevation: null
    },
    // rowTwoColumnTwo
    {
      xValue: 2,
      yValue: 2,
      terrain: null,
      elevation: null
    },
    // rowTwoColumnThree
    {
      xValue: 3,
      yValue: 2,
      terrain: null,
      elevation: null
    },
    // rowTwoColumnFour
    {
      xValue: 4,
      yValue: 2,
      terrain: null,
      elevation: null
    },
    // rowThreeColumnOne
    {
      xValue: 1,
      yValue: 3,
      terrain: null,
      elevation: null
    },
    // rowThreeColumnTwo
    {
      xValue: 2,
      yValue: 3,
      terrain: null,
      elevation: null
    },
    // rowThreeColumnThree
    {
      xValue: 3,
      yValue: 3,
      terrain: null,
      elevation: null
    },
    // rowThreeColumnFour
    {
      xValue: 4,
      yValue: 3,
      terrain: null,
      elevation: null
    },
    // rowFourColumnOne
    {
      xValue: 1,
      yValue: 4,
      terrain: null,
      elevation: null
    },
    // rowFourColumnTwo
    {
      xValue: 2,
      yValue: 4,
      terrain: null,
      elevation: null
    },
    // rowFourColumnThree
    {
      xValue: 3,
      yValue: 4,
      terrain: null,
      elevation: null
    },
    // rowFourColumnFour
    {
      xValue: 4,
      yValue: 4,
      terrain: null,
      elevation: null
    }
  ]

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

  // This takes the above the function to give values to ALL of the grid squares
  const makeAllGrids = (howMany) => {
    for (var i = 0; i < howMany; i++) {
      makeOneGrid(i);
      console.log(allGrids[i]);
    }
  };
  makeAllGrids(16);

  // These display the terrain on the grid squares
  // $('#x1y1').text(allGrids[0].terrain);
  // $('#x2y1').text(allGrids[1].terrain);
  // $('#x3y1').text(allGrids[2].terrain);
  // $('#x4y1').text(allGrids[3].terrain);
  // $('#x1y2').text(allGrids[4].terrain);
  // $('#x2y2').text(allGrids[5].terrain);
  // $('#x3y2').text(allGrids[6].terrain);
  // $('#x4y2').text(allGrids[7].terrain);
  // $('#x1y3').text(allGrids[8].terrain);
  // $('#x2y3').text(allGrids[9].terrain);
  // $('#x3y3').text(allGrids[10].terrain);
  // $('#x4y3').text(allGrids[11].terrain);
  // $('#x1y4').text(allGrids[12].terrain);
  // $('#x2y4').text(allGrids[13].terrain);
  // $('#x3y4').text(allGrids[14].terrain);
  // $('#x4y4').text(allGrids[15].terrain);

  // These display the terrain on the grid squares
  $('#x1y1').text(allGrids[0].elevation);
  $('#x2y1').text(allGrids[1].elevation);
  $('#x3y1').text(allGrids[2].elevation);
  $('#x4y1').text(allGrids[3].elevation);
  $('#x1y2').text(allGrids[4].elevation);
  $('#x2y2').text(allGrids[5].elevation);
  $('#x3y2').text(allGrids[6].elevation);
  $('#x4y2').text(allGrids[7].elevation);
  $('#x1y3').text(allGrids[8].elevation);
  $('#x2y3').text(allGrids[9].elevation);
  $('#x3y3').text(allGrids[10].elevation);
  $('#x4y3').text(allGrids[11].elevation);
  $('#x1y4').text(allGrids[12].elevation);
  $('#x2y4').text(allGrids[13].elevation);
  $('#x3y4').text(allGrids[14].elevation);
  $('#x4y4').text(allGrids[15].elevation);

})
