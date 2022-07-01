import AbilityTable from './AbilityTable'
import Button from './Button'
import styles from './PokemonDataView.module.css'
import Spinner from './Spinner'

export function PokemonLoadingView({ pokemonName }) {
  return (
    <div className={styles.dataView}>
      <h2 className={styles.dataViewHeader}>Loading {pokemonName}…</h2>
      <div className={styles.dataViewBody}>
        <Spinner />
      </div>
      <AbilityTable />
    </div>
  )
}

export function PokemonIdleView() {
  return (
    <div className={styles.dataView}>
      <h2 className={styles.dataViewHeader}>
        No Pokémon yet! <sup>(xxx)</sup>
      </h2>
      <div className={styles.dataViewBody}>Please submit a Pokémon!</div>
      <AbilityTable />
    </div>
  )
}

export function PokemonErrorView({ error, onReset }) {
  return (
    <div
      className={styles.dataView}
      style={{ borderColor: 'var(--colors-error)' }}
    >
      <h2 className={styles.dataViewHeader}>Error! :(</h2>
      <div className={styles.dataViewBody}>
        <small role="alert">
          {error.message}
          <Button
            style={{
              backgroundColor: 'var(--colors-error)',
              margin: 'var(--space-1) auto',
            }}
            onClick={onReset}
          >
            Try again
          </Button>
          This error was caught by the error boundary!
        </small>
      </div>
      <AbilityTable />
    </div>
  )
}

export function PokemonInfoView({
  pokemonData: { name, number, type, imageUrl, abilities },
}) {
  return (
    <div
      className={styles.dataView}
      style={{
        borderStyle: 'solid',
        borderColor: `var(--colors-${type.toLowerCase()})`,
      }}
    >
      <h2 className={styles.dataViewHeader}>
        {name} <sup>({number})</sup>
      </h2>
      <div className={styles.dataViewBody}>
        <img
          className={styles.dataViewImage}
          src={imageUrl}
          alt={name}
          width={180}
          height={180}
        />
      </div>
      <AbilityTable abilitiesData={abilities} />
    </div>
  )
}
