const unroll = require("./unroll");

describe("#unroll", () => {
  test("it is a function", () => {
    expect(typeof unroll).toBe("function");
  });

  test("it unrolls a 4x4 array", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const output = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(input)).toEqual(output);
  });

  test("it unrolls a 3x3 array", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const output = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(unroll(input)).toEqual(output);
  });

  test("it unrolls a 2x2 array", () => {
    const input = [
      [1, 2],
      [3, 4]
    ];
    const output = [1, 2, 4, 3];
    expect(unroll(input)).toEqual(output);
  });

  test("it unrolls a 1x1 array", () => {
    const input = [
      [1]
    ];
    const output = [1];
    expect(unroll(input)).toEqual(output);
  });

  test("it handles an empty array", () => {
    const input = [];
    const output = [];
    expect(unroll(input)).toEqual(output);
  });
});