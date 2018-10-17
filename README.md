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
<img src="view/stysheets/images/can_and_cav_layout.png">
<ol>
  <li>
    Menu button: found on the upper left corner with a 'list' symbol. Players can find "How To Play", "Glossary", "About" (which describes the game's origin and the developer), and "Return To Game".
  </li>
  <li>
    Audio button: to play or pause the looping music
  </li>
  <li>
    Battlefield: a 4x4 or 5x5 grid square with different colors and terrain. 
      <ul>
        <li>
          This is where the locations of each player's units are on the battlefield.
        </li>
        <li>
          The selected unit (see "Army Boxes") will be surrounded by a <b>yellow border</b>
        </li>
        <li>
          Units along the side of a grid square are <b>defending in that particular direction</b>.
        </li>
        <li>
          If <b>multiple units</b> from the same team are in the center of the same grid square, a flag image will replace their usual image.
        </li>
      </ul>
  </li>
  <li>
    Unit Box: in the upper left corner of the large, grey box beneath the battlefield. When a player selects one of their units (see "Army Boxes" below), that unit's statistics and options displayed.
    <ul>
      <li>
        Their current health (infantry starts with 10, cavalry 8, and artillery 6) is in the box beneath the 'Health' title.
      </li>
      <li>
        The color grey covers their current direction among the arrow, or it covers the circle in the center if that unit doesn't have a specific direction. Clicking on an arrow/circle covers it with yellow and chooses that unit's new direction. Only <b>infantry units</b> can move diagonally, so diagonal arrows only appear when an infantry unit is selected.
      </li>
      <li>
        The <b>ATTACK</b> button causes a unit to move in their new (aka yellow) direction. Only <b>cavalry units</b> can move two grid squares in one turn. A unit is at ATTACK mode if this button's text color is white and its background color is red. When a cavalry is selected and ATTACK mode is on, clicking on an arrows multiple times will alternate between moving them one or two grid squares. <u>NOTE</u>: Being in ATTACK mode gives you a slight disadvantage in comparison to DEFEND mode, so it is best to leave a unit in DEFEND mode if they are not going to move anyways
      </li>
      <li>
        The <b>DEFEND</b> button strengthens a unit in its current location, but cannot move. A unit is in DEFEND mode if that button's text color is white and its background color is blue. If a unit is defending a particular side of a grid square, then that unit's chance of victory is greatly increased against if their enemy is attacking against that side. <b>HOWEVER</b>, if an enemy attacks an undefended side, then the <i>enemy unit's</i> chance of victory is greatly increased. Defending from the center of a grid square slightly increases the defender's chance no matter which side the attacker comes from.
      </li>
    </ul>
  </li>
  <li>
    Battle Report Box: After a player issues their orders (see "Give Orders" below) and their turn ends, their battle report is shown here.
    <ul>
      <li>
        ORDERS: reminds what you told your units to do
      </li>
      <li>
        RESULTS: reports whather each unit was able to carry out your orders or not. For example, an infantry or artillery unit cannot move into a body of water, and this will be reported in the "Results" list.
      </li>
      <li>
        BATTLES: reports the outcome of any battles or cannon barrage when the player's orders were carried out. <b>Artillery units</b> will automatically fire on any enemy within their range. See "Artillery" in the game's Glossary to learn more.
      </li>
    </ul>
  </li>
  <li>
    Army Boxes: two boxes on the bottom of the grey box with blue and red colors, respectively. 
    <ul>
      <li>
        Player 1's units are in blue while player 2's units are red. Each nation's name is at the title of their box.
      </li>
      <li>
        Within an Army Box, there are three columns that contain their existing infanty (left column), artillery (center column), and cavalry (right column) units.
      </li>
      <li>
        To <b>select a unit</b>, the player simply clicks that unit's ID. For example, the "1st Battalion, 5th Regiment" has an ID like "1-5".
      </li>
    </ul>
  </li>
  <li>
    GIVE ORDERS button: orange button at the very bottom. Once clicked, all of the changes that had been set up for the current team's units are carried out. 
    <ul>
      <li>
        If a moving unit enters the grid square with an enemy unit, a battle automatically takes place.
      </li>
      <li>
        All existing artillery units (for both player 1 and 2) fire upon any enemy units within their range.
      </li>
    </ul>
  </li>
</ol>
