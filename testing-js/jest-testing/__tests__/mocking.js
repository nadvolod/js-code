const lodash = require('lodash')



// https://lodash.com/docs/4.17.15#chunk
test(`Test lodash chunk function`, () => {
    //The Mock call
    //If we don't run this then .chunk() will behave as expected and will create 2 arrays
    lodash.chunk = jest.fn(() => 'test')

    const result = lodash.chunk(['a', 'b', 'c', 'd'], 2)
    expect(result).toBe('test')
    expect(lodash.chunk).toHaveBeenCalled()
    expect(lodash.chunk).toHaveBeenCalledWith(['a', 'b', 'c', 'd'], 2)
})

