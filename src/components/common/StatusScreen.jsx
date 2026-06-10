export function LoadingScreen() {
  return (
    <main className="status-screen" aria-live="polite">
      <span className="loader" aria-hidden="true" />
      <p>Loading portfolio…</p>
    </main>
  )
}

export function ErrorScreen({ message, onRetry }) {
  return (
    <main className="status-screen" role="alert">
      <h1>Portfolio unavailable</h1>
      <p>{message}</p>
      <button className="button button-primary" type="button" onClick={onRetry}>
        Try again
      </button>
    </main>
  )
}
