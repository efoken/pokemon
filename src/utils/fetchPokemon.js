const fetchPokemon = async (pokemonName) => {
  const query = `
    query PokemonInfo($name: String = "${pokemonName}") {
      pokemon(name: $name) {
        number
        name
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }`

  return fetch('https://graphql-pokemon2.vercel.app', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((result) => {
      const { pokemon } = result.data
      if (!pokemon) {
        return Promise.reject(
          new Error(`The Pokémon "${pokemonName}" is not in the database.`)
        )
      }
      const {
        name,
        number,
        image: imageUrl,
        attacks: { special: abilities },
      } = pokemon
      return { name, number, imageUrl, abilities }
    })
}

export default fetchPokemon
