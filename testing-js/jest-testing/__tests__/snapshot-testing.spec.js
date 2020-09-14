const {getFlyingSuperHeros} = require('../classes/super-heros')

//painful
test('manually validate the data', ()=>{
    const flyingHeros = getFlyingSuperHeros()
    console.log(flyingHeros)
    expect(flyingHeros).toEqual(
        [ { name: 'Dynaguy', powers: [ 'disintegration ray', 'fly' ] } ]
    )
})