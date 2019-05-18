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
      expect(antLocation).toEqual({ x: 2, y: 2, dir: "L" });
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
      expect(ant).toEqual({ x: 2, y: 1, dir: "U" });
    });
  });
  describe(`step 2`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`prev tile color should flip to black`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should rotate 90 deg, move right one tile`, () => {
      expect(ant).toEqual({ x: 3, y: 1, dir: "R" });
    });
  });
  describe(`step 3`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`prev tile color should flip to black`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should rotate 90 deg, move down one tile`, () => {
      expect(ant).toEqual({ x: 3, y: 2, dir: "D" });
    });
  });
  describe(`step 4`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`prev tile color should flip to black`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should rotate 90 deg, move left one tile`, () => {
      expect(ant).toEqual({ x: 2, y: 2, dir: "L" });
    });
  });
  describe(`step 5`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`prev tile color should flip to white`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should rotate -90 deg, move down one tile`, () => {
      expect(ant).toEqual({ x: 2, y: 3, dir: "D" });
    });
  });
  describe(`step 6`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`prev tile color should flip to black`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should rotate 90 deg, move left one tile`, () => {
      expect(ant).toEqual({ x: 1, y: 3, dir: "L" });
    });
  });
  describe(`step 10`, () => {
    langtonAnt.next();
    langtonAnt.next();
    langtonAnt.next();
    const [grid, ant] = langtonAnt.next();
    it(`prev tile should flip to white`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should rotate -90 deg, move right one tile`, () => {
      expect(ant).toEqual({ x: 3, y: 3, dir: "R" });
    });
  });

  describe(`step 15`, () => {
    langtonAnt.next();
    langtonAnt.next();
    langtonAnt.next();
    langtonAnt.next();
    const [grid, ant] = langtonAnt.next();
    it(`prev tile should flip to white`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1]
      ]);
    });
    it(`ant should rotate -90 deg, move up one tile`, () => {
      expect(ant).toEqual({ x: 3, y: 2, dir: "U" });
    });
  });

  describe(`step 16`, () => {
    const [grid, ant] = langtonAnt.next();
    it(`prev tile should flip to white`, () => {
      expect(grid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1]
      ]);
    });
    it(`ant should rotate -90 deg, move left one tile`, () => {
      expect(ant).toEqual({ x: 2, y: 2, dir: "L" });
    });
  });
});

// TODO: Support user-specified grid size.
// TODO: Support user-specified initial ant direction.
// TODO: Support user-specified step interval (i.e. ant takes 10 steps with each 'tick').
// TODO: Handle case where ant can no longer advance because it reaches grid wall.
