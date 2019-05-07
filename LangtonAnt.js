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

  next() {
    if (this.step === 1) {
      this.grid = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ];
      this.ant = { x: 2, y: 1, dir: "⬆️" };
    }
    this.step += 1;
    return [this.grid, this.ant];
  }
}

export default LangtonAnt;
