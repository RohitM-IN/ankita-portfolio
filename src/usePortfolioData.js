import { useEffect, useState } from 'react'

export function usePortfolioData() {
  const [state, setState] = useState({ data: null, error: null })

  useEffect(() => {
    const controller = new AbortController()

    fetch('/data/portfolio.json', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load portfolio data (${response.status})`)
        return response.json()
      })
      .then((data) => setState({ data, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') setState({ data: null, error })
      })

    return () => controller.abort()
  }, [])

  return state
}
