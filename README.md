# Cannon & Cavalry

## https://cannon-and-cavalry.herokuapp.com

## <i>The Game:</i>
This is a turn-based strategy game that is designed for two players using the same device. Similar to the battles in games like "RISK" and "Civilization", each player must maneuver their troops in a way to increase their chance of success. Things like terrain, unit types, troop numbers, direction, and offense/defense status help determine the odds for each player when a battle takes place.

## <i>Features:</i>
- In the "Settings", a player can start their game with either a 4x4 or 5x5 grid square
- A song ("Heart of Courage" by Two Steps From Hell) can be played or paused during the game

## <i>Layout:</i>
In the beginning of the game...
- The site begins with the Menu options in a <div> element that is over the actual game layout, both separated by another, semi-transparent <div>. This is done by using the z-index attribute in CSS
- At any time, a player can read the the advantages/disadvantages of the different terrain, vegetation, or unit types at any point by clicking on the "Menu" button (upper left) and then clicking on "Glossary"
- In a similar way, players can learn how to play the game by clicking on "How To Play" within the Menu
- After clicking on "Two Players", the first player entrs their commander name and a 3-character long name for their army's nation in the BLUE box. For example, the commander can be "Washington" and with the nation "USA". The second player does the same in their RED box.
  
With the main game layout...
<ol>
  <li>
    Menu button: found on the upper left corner with a 'list' symbol. Players can find "How To Play", "Glossary", "About" (which describes the game's origin and the developer), and "Return To Game".
  </li>
  <li>
    Audio button: to play or pause the looping music
  </li>
  <li>
    Battlefield: a 4x4 or 5x5 grid square with different colors and terrain. This is where the locations of each player's units are on the battlefield. Units along the side of a grid square are <b>defending in that particular direction</b>. If <b>multiple units</b> from the same team are in the center of the same grid square, a flag image will replace their usual image
  </li>
</ol>
