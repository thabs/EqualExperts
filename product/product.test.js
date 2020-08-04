const {
  addProduct,
  queryQuantity,
  queryUnitPrice,
  queryTotal,
  clearCart,
} = require("./product");

/*test("returns the correct dove soap total", () => {
  expect(addProduct("dove_soap", 5)).toBe(199.95);
});*/

describe("Product Quantity tests", () => {
  beforeAll(() => {
    addProduct("dove_soap", 5);
  });

  it("Should return correct quatinty", () => {
    return expect(queryQuantity("dove_soap")).toEqual(5);
  });

  it("Should return correct unit price", () => {
    return expect(queryUnitPrice("dove_soap")).toEqual(39.99);
  });

  it("Should return correct total value", () => {
    return expect(queryTotal("dove_soap")).toEqual(199.95);
  });
});

describe("Product Quantity in two batches", () => {
  beforeAll(() => {
    clearCart();
    addProduct("dove_soap", 5);
    addProduct("dove_soap", 3);
  });

  it("Should return correct quatinty", () => {
    return expect(queryQuantity("dove_soap")).toEqual(8);
  });

  it("Should return correct unit price", () => {
    return expect(queryUnitPrice("dove_soap")).toEqual(39.99);
  });

  it("Should return correct total value", () => {
    return expect(queryTotal("dove_soap")).toEqual(319.92);
  });
});
