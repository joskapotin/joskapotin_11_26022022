import { useState, useEffect } from 'react'
import { fetchData } from '../services/services'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()

    if (data.length === 0) {
      ;(async () => {
        try {
          setLoading(true)
          const result = await fetchData(url, abortController)
          setData(result)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      })()
    }

    return () => {
      abortController.abort()
    }
  }, [url, data])

  return { data, loading, error }
}

export default useFetch
