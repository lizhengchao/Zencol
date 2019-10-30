import { pad } from "./helper";

describe("pad", () => {
  it("pads a number with leading zeros", () => {
    const cases = [
      { input: 1, width: 4, character: "0", expected: "0001" },
      { input: 12, width: 3, character: undefined, expected: "012" },
      { input: 123, width: 2, character: "0", expected: "123" },
      { input: 123, width: 4, character: "#", expected: "#123" },
      { input: 123, width: NaN, character: "#", expected: "123" },
      { input: 123, width: Infinity, character: "#", expected: "123" },
      { input: NaN, width: 4, character: "#", expected: "#NaN" },
      { input: Infinity, width: 4, character: "#", expected: "Infinity" },
      { input: 123, width: -1, character: "#", expected: "123" }
    ];
    cases.forEach(c => {
      expect(pad(c.input, c.width, c.character)).toBe(c.expected);
    });
  });
});
