// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
const pokedex = document.querySelector('.pokemon')
for (let i = 0; i < 151; i++) {
    const currentPokemon = document.createElement('img')
    currentPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    pokedex.append(currentPokemon)
}