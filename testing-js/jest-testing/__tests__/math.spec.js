const {multiply} = require('../classes/math')

test('should multiply 0s correctly', ()=>{
    expect(multiply(0,0)).toBe(0);
})