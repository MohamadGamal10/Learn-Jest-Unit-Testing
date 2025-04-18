const theSum = require("../sum");



test("return 0 if no arguments", () => {
    expect(theSum()).toBe(0);
});


test("returns the number", () => {
    expect(theSum(1)).toBe(1);
});


test("returns the number 1 + number 2", () => {
    expect(theSum(15, 25)).toBe(40);
});


test("returns the number 1 + number 2 + number 3", () => {
    expect(theSum(10, 20, 30)).toBe(60);
});


test("returns the sum result of all numbers", () => {
    expect(theSum(10, 20, 30, 40, 50, 60)).toBe(210);
});