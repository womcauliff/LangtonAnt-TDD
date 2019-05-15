/**
 * A state machine encapsulating the logic for the Langton's Ant simulation.
 * The ant's current direction is represented as one of four States.
 * Each tile value (`1`, `0`) is represented as an Event, which maps to the value of
 * the ant's next direction.
 */
const stateMachine = {
  "⬅️": {
    0: "⬇️",
    1: "⬆️"
  },
  "⬆️": {
    1: "➡️"
  },
  "➡️": {
    1: "⬇️"
  },
  "⬇️": {
    0: "➡️",
    1: "⬅️"
  }
};

class LangtonAnt {
  constructor() {
    this.step = 0;
    this.grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    this.ant = { x: 2, y: 2, dir: "⬅️" };
  }

  /**
   * Returns the resulting color state after transitioning from current color state.
   * @param {Number} currentColor The current color of the tile.
   * @returns {Number} The color the tile should be after the ant leaves.
   */
  transitionColor(currentColor) {
    return currentColor ? 0 : 1;
  }

  /**
   * Returns the resulting direction state after transitioning
   * from the current direction state on a particular color value.
   * @param {*} currentDirection
   * @param {Number} color
   */
  transitionDirection(currentDirection, color) {
    const nextDirection = stateMachine[currentDirection][color];
    return nextDirection;
  }

  /**
   * Returns the resulting location state after transitioning
   * from the current location state on a particular direction value.
   * @param {*} currentLocation
   * @param {*} direction
   */
  transitionLocation(currentLocation, direction) {
    let { x, y } = currentLocation;

    switch (direction) {
      case "⬅️":
        x -= 1;
        break;
      case "⬆️":
        y -= 1;
        break;
      case "➡️":
        x += 1;
        break;
      case "⬇️":
        y += 1;
        break;
      // no default
    }

    return { x, y };
  }

  next() {
    // If this is the first call to this method, just return the initial grid value
    if (this.step === 0) {
      this.step += 1;
      return [this.grid, this.ant];
    }

    // Else, calculate the changes needed to grid's tile colors,
    // and to the ant's location and direction.
    this.step += 1;

    const { x, y, dir } = this.ant;
    const prevColor = this.grid[y][x];

    const nextColor = this.transitionColor(prevColor);
    const nextDirection = this.transitionDirection(dir, prevColor);
    const nextLocation = this.transitionLocation({ x, y }, nextDirection);

    // Update color of previous tile.
    this.grid = this.grid.map((row, rowIndex) => {
      if (y === rowIndex) {
        return row.map((tile, tileIndex) => {
          if (x === tileIndex) {
            return nextColor;
          }
          return tile;
        });
      }
      return row;
    });

    // Update ant location and direction
    this.ant = { x: nextLocation.x, y: nextLocation.y, dir: nextDirection };

    // Return the resulting grid and ant
    return [this.grid, this.ant];
  }
}

export default LangtonAnt;
