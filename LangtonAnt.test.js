import LangtonAnt from "./LangtonAnt";

describe(`LangtonAnt`, () => {
  const langtonAnt = new LangtonAnt(5);

  describe(`initial grid`, () => {
    const [initialGrid, antLocation] = langtonAnt.grid();
    it(`should be 5x5 grid of white tiles`, () => {
      expect(initialGrid).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]);
    });
    it(`ant should be in center tile, facing left`, () => {
      expect(antLocation).toEqual({ x: 2, y: 2, dir: "⬅️" });
    });
  });
  // describe(`step 1`, () => {
  //   it(`should have ant take step to right`, () => {});
  // });
});
