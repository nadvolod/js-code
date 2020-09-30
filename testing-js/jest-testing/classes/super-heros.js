const superHeros = [
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Dash', powers: ['speed']},
    {name: 'Superman', powers: ['speed', 'fly']},
]

function getFlyingSuperHeros() {
    return superHeros.filter(hero => {
        return hero.powers.includes('fly')
    })
}

module.exports = { getFlyingSuperHeros }