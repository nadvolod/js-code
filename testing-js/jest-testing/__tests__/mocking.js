const lodash = require('lodash')
const {Users} = require('../classes/users')
const axios = require('axios')

// https://lodash.com/docs/4.17.15#chunk
test(`mock lodash chunk function`, () => {
    //The Mock call
    //If we don't run this then .chunk() will behave as expected and will create 2 arrays
    lodash.chunk = jest.fn(() => 'fakeChunk')

    const result = lodash.chunk(['a', 'b', 'c', 'd'], 2)
    expect(result).toBe('fakeChunk')
    expect(lodash.chunk).toHaveBeenCalled()
    expect(lodash.chunk).toHaveBeenCalledWith(['a', 'b', 'c', 'd'], 2)
})


jest.mock('axios');
test('should fetch users', () => {
    const users = [{name: 'Bob'}]
    const fakeResponse = {data: users}
    //axios.get() should return our fakeResponse
    axios.get.mockResolvedValue(fakeResponse);
    console.log(Users.all())
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users))
});

