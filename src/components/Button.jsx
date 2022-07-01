import clsx from 'clsx'
import styles from './Button.module.css'

export default function Button({ children, className, ...restProps }) {
  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  )
}
