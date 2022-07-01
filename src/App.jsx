import { useState } from 'react'
import styles from './App.module.css'
import ErrorBoundary from './components/ErrorBoundary'
import Form, { FormBottom, FormField, FormSubmit } from './components/Form'
import { PokemonErrorView } from './components/PokemonDataView'
import PokemonInfoCard from './components/PokemonInfoCard'

function App() {
  const [incompleteValue, setIncompleteValue] = useState('')
  const [submittedValue, setSubmittedValue] = useState('')

  const handleReset = () => {
    setIncompleteValue('')
    setSubmittedValue('')
  }

  const handleSubmit = (value) => {
    setIncompleteValue(value)
    setSubmittedValue(value)
  }

  const tryPikachu = (
    <button type="button" onClick={() => handleSubmit('Pikachu')}>
      Pikachu
    </button>
  )
  const tryNinetales = (
    <button type="button" onClick={() => handleSubmit('Ninetales')}>
      Ninetales
    </button>
  )
  const tryCharizard = (
    <button type="button" onClick={() => handleSubmit('Charizard')}>
      Charizard
    </button>
  )

  return (
    <div className={styles.app}>
      <Form
        setValue={setIncompleteValue}
        value={incompleteValue}
        onSubmit={handleSubmit}
      >
        <FormField placeholder="Which Pokémon?" />
        <FormSubmit>Fetch!</FormSubmit>
        <FormBottom>
          <small>
            No idea? Try {tryPikachu}, {tryCharizard}, or {tryNinetales}.
          </small>
        </FormBottom>
      </Form>
      <ErrorBoundary
        key={submittedValue}
        fallback={PokemonErrorView}
        onReset={handleReset}
      >
        <PokemonInfoCard pokemonName={submittedValue} />
      </ErrorBoundary>
    </div>
  )
}

export default App
