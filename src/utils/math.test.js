import { multiply } from "./math";

describe("multiply: returns the multiplication", () => {
  const cases = [
    ["of two numbers", 1000, 5.26, 5260],
    ["of others two numbers", 2, 6.24, 12.48],
    ["of a number and a string", 15, "7.29", 109.35],
    ["of a string and a number", "3", 5, 15],
    ["of two strings", "5", "5", 25],
  ];

  test.each(cases)("%s", (_, a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
  });
});

describe("multiply: throws an error when", () => {
  const cases = [
    [
      "arguments are texts",
      "some invalid value",
      "another invalid value",
      "Arguments must be numbers",
    ],
  ];

  test.each(cases)("%s", (_, a, b, expected) => {
    expect(() => multiply(a, b)).toThrowError(expected);
  });
});
