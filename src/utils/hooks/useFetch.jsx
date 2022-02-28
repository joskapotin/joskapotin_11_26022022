import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setLoading(false)
        setData(data)
      })
      .catch((error) => {
        setLoading(false)
        setError('An error occurred. Awkward..', error)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
