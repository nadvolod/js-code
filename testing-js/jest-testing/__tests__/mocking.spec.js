const lodash = require('lodash')
const {Users} = require('../classes/users')
//Axios is an HTTP client: https://github.com/axios/axios
const axios = require('axios')

//Mock a single call
// https://lodash.com/docs/4.17.15#chunk
test('should mock chunk call',()=>{
    lodash.chunk = jest.fn(()=> 'fakeChunk')

    const result = lodash.chunk(['a','b','c'], 2)
    console.log(result)
    expect(result).toBe('fakeChunk')
    expect(lodash.chunk).toHaveBeenCalled()
    expect(lodash.chunk).toHaveBeenCalledWith(['a', 'b', 'c'], 2)
})

//Mock an entire module
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