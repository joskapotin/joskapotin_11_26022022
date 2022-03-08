import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal })
        const result = await response.json()
        if (!response.ok) {
          const fetchError = (data && data.message) || response.status
          return Promise.reject(fetchError)
        }
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }

      return undefined
    }

    if (data.length === 0) {
      setLoading(true)
      fetchData()
    }

    return () => {
      abortController.abort()
    }
  }, [url, data])

  return { data, loading, error }
}

export default useFetch
