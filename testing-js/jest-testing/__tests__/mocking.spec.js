const lodash = require('lodash')
const {Users} = require('../classes/users')
const axios = require('axios')

//Mock a single call
// https://lodash.com/docs/4.17.15#chunk
test('should mock chunk()',()=>{
    lodash.chunk = jest.fn(()=> 'fakeChunkValue')
    const result = lodash.chunk(['a', 'b', 'c', 'd'], 2)
    expect(result).toBe('fakeChunkValue')
    expect(lodash.chunk).toBeCalled()
    expect(lodash.chunk).toHaveBeenCalledWith(['a', 'b', 'c', 'd'], 2)
})

//Mock an entire module
jest.mock('axios')
test('should fetch fake users', function () {
    const users = [{name: 'Nikolay'}]
    const fakeResponse = {data: users}
    axios.get.mockResolvedValue(fakeResponse)

    return Users.all().then(data => expect(data).toEqual(users))
});