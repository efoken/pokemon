import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { error: undefined }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { children, fallback: FallbackComponent, onReset } = this.props

    if (error) {
      return <FallbackComponent error={error} onReset={onReset} />
    }
    return children
  }
}
