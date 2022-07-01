import { Children, cloneElement } from 'react'
import Button from './Button'
import styles from './Form.module.css'

export function FormField({ disabled, onChange, placeholder, value }) {
  return (
    <input
      className={styles.formField}
      disabled={disabled}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  )
}

export function FormSubmit({ children }) {
  return <Button type="submit">{children}</Button>
}

export function FormBottom({ children }) {
  return children
}

export default function Form({ children, onSubmit, setValue, value }) {
  let formSubmit
  let formField
  let formBottom

  Children.forEach(children, (child) => {
    if (child.type === FormSubmit) {
      formSubmit = child
    } else if (child.type === FormField || child.type === 'input') {
      formField = cloneElement(child, {
        value,
        onChange: (event) => setValue(event.target.value),
      })
    } else if (child.type === FormBottom) {
      formBottom = child
    }
  })

  if (!formSubmit) {
    throw new Error('Form must have a child component "FormSubmit"')
  }

  if (!formField) {
    throw new Error(
      'Form must have a child component that is either "FormField", or "input"'
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formBody}>
        {formField}
        {formSubmit}
      </div>
      {formBottom}
    </form>
  )
}
