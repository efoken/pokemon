import { useEffect, useState } from 'react'
import fetchPokemon from '../utils/fetchPokemon'
import {
  PokemonIdleView,
  PokemonInfoView,
  PokemonLoadingView,
} from './PokemonDataView'

export default function PokemonInfoCard({ pokemonName }) {
  const [state, setState] = useState({
    error: undefined,
    pokemonData: undefined,
    status: pokemonName ? 'pending' : 'idle',
  })

  useEffect(() => {
    if (!pokemonName) {
      setState({ status: 'idle' })
      return
    }

    setState({ status: 'pending' })
    fetchPokemon(pokemonName)
      .then((pokemonData) => setState({ status: 'resolved', pokemonData }))
      .catch((error) => setState({ status: 'rejected', error }))
  }, [pokemonName])

  const { error, pokemonData, status } = state

  if (status === 'resolved') {
    return <PokemonInfoView pokemonData={pokemonData} />
  }
  if (status === 'idle') {
    return <PokemonIdleView />
  }
  if (status === 'pending') {
    return <PokemonLoadingView pokemonName={pokemonName} />
  }
  if (status === 'rejected') {
    throw error
  }

  throw new Error('This should be impossible')
}
