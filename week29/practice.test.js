const sum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw "not a number!";
  }
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("throws error if NaN", () => {
  expect(() => sum("x", 1)).toThrow();
});

// test("throws error if NaN", () => {
//   expect(() => sum("a", 2).toThrow("invalid parameter"));
// })

// test("throws error if NaN", () => {
//   expect(() => sum(7, "l").toThrow("invalid parameter"));
// });

// test("parses strings to numbers", () => {
//   expect(sum(1, "9")).toBe(10);
// });

// test("parses strings to numbers", () => {
//   expect(sum("8", 4)).toBe(12);
// });
