import styles from './AbilityTable.module.css'

export default function AbilityTable({ abilitiesData = [] }) {
  return (
    <table className={styles.abilityTable}>
      <thead>
        <tr>
          <th>Ability</th>
          <th>Type</th>
          <th>Damage</th>
        </tr>
      </thead>
      <tbody>
        {abilitiesData.length > 0 ? (
          abilitiesData.map((ability) => (
            <tr key={ability.name}>
              <td>{ability.name}</td>
              <td>{ability.type}</td>
              <td>{ability.damage}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
