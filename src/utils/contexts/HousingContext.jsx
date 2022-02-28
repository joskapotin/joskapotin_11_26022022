import { createContext, useState, useEffect } from 'react'
const HousingContext = createContext()

function HousingContextProvider({ children }) {
  const url = './data.json'
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  console.log('inside context')

  useEffect(() => {
    ;(async function () {
      console.log('inside useEffect')
      if (data.length === 0) {
        setLoading(true)
        setTimeout(async () => {
          try {
            const response = await fetch(url)
            const result = await response.json()
            if (!response.ok) {
              // get error message from body or default to response status
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
        }, 5000)
      }
    })()
  }, [data])

  return (
    <HousingContext.Provider value={{ data, loading, error }}>
      {children}
    </HousingContext.Provider>
  )
}

export { HousingContextProvider, HousingContext }
