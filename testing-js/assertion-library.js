const sum = (a, b) => a - b;
//const subtract = (a, b) => a - b;

const result = sum(10, 5);
const expected = 15;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}