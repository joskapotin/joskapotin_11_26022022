import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(url, { signal: abortController.signal })
          const result = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.status
            return Promise.reject(error)
          }
          setData(result)
        } catch (err) {
          console.error(err)
          setError(err)
        } finally {
          setLoading(false)
        }
      }, 2000)
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
