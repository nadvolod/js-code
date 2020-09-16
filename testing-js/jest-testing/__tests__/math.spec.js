const {multiply} = require('../classes/math')

test('should multiply 0s',()=>{
    expect(multiply(0,0)).toBe(0);
})