const {getFlyingSuperHeros} = require('../super-heros')

// // A test that needs to statically validate the values in the array
// test('returns returns super heros that can fly', () => {
//     const flyingHeros = getFlyingSuperHeros()
//     console.log(flyingHeros)
//     expect(flyingHeros).toEqual(
//         [ { name: 'Dynaguy', powers: [ 'disintegration ray', 'fly' ] } ])
// })

//it's much more maintainable to use snapshots instead of copy + paste
test('returns returns super heros that can fly', () => {
    const flyingHeros = getFlyingSuperHeros()
    console.log(flyingHeros)
    expect(flyingHeros).toMatchSnapshot()
})

