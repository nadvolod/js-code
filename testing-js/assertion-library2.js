const sum = (a, b) => a - b;
//const subtract = (a, b) => a - b;

const result = sum(10, 5);
const expected = 15;

expect(result).toBe(expected)

function expect(actual){
    return{
        toBe(expected){
            if (result !== expected) {
              throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
        //We can add other functions here as well
        toEqual(expected){},
    }
}