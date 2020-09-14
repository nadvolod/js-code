const superHeros = [
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Dash', powers: ['speed']}
]

function getFlyingSuperHeros() {
    return superHeros.filter(hero => {
        return hero.powers.includes('fly')
    })
}

module.exports = { getFlyingSuperHeros }