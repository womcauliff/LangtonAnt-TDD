import LangtonAnt from "./LangtonAnt";

describe(`LangtonAnt`, () => {
  const langtonAnt = new LangtonAnt(5);

  describe(`initial grid`, () => {
    const [initialGrid, antLocation] = langtonAnt.next();
    it(`grid should be 5x5 white tiles`, () => {
      expect(initialGrid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should be on center tile, facing left`, () => {
      expect(antLocation).toEqual({ x: 2, y: 2, dir: "⬅️" });
    });
  });
  describe(`step 1`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`center tile flips to black`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant rotates 90 deg, moves up one tile`, () => {
      expect(ant).toEqual({ x: 2, y: 1, dir: "⬆️" });
    });
  });
});
