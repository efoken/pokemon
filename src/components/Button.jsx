import styles from './Button.module.css'

export default function Button({ children, className, ...restProps }) {
  return (
    <button
      className={`${styles.button} ${className}`.trim()}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  )
}
