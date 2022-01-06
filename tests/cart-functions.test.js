const cartFunctions = require('../src/js/cart-functions');


describe("calculateChange", () => {
  test("calculateChange", () => {
    expect(cartFunctions.calculateChange(5, 6)).toEqual(1);
  });
  test("should return .73 when given 12.3 and 13.03", () => {
    expect(cartFunctions.calculateChange(12.3, 13.03)).toEqual(0.73)
  });

});

// describe("isSufficientPayment", () => {
//   test("should return true when given 5 and 6", () => {
//     expect(cartFunctions.isSufficientPayment(5, 6).toEqual(true)
  
  

//   });
// });
describe("calculateTotal", () => {
  test("should return a total of 4.99 with one item of costing 4.99", () => {
    const mockItemsArray = [{name: 'Taco', price: 4.99}]
    expect(cartFunctions.calculateTotal(mockItemsArray)).toEqual(4.99);
  });

  
});

// describe("addItem", () => {
//   test("add addItem tests here");
// });

// describe("removeItem", () => {
//   test("add removeItem tests here");
// });