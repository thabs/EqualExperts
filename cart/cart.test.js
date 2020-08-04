const cart = require("./cart");

test("returns the correct cart total", () => {
  expect(cart(5)).toBe(199.95);
});
