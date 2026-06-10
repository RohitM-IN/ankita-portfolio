import { useCallback, useEffect, useState } from 'react'

const DATA_URL = '/data/portfolio.json'

export function usePortfolioData() {
  const [requestKey, setRequestKey] = useState(0)
  const [state, setState] = useState({ status: 'loading', data: null, error: null })

  const retry = useCallback(() => setRequestKey((key) => key + 1), [])

  useEffect(() => {
    const controller = new AbortController()
    setState({ status: 'loading', data: null, error: null })

    async function loadPortfolio() {
      try {
        const response = await fetch(DATA_URL, { signal: controller.signal })
        if (!response.ok) throw new Error(`Unable to load portfolio data (${response.status})`)

        const data = await response.json()
        setState({ status: 'success', data, error: null })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState({ status: 'error', data: null, error })
        }
      }
    }

    loadPortfolio()
    return () => controller.abort()
  }, [requestKey])

  return { ...state, retry }
}
