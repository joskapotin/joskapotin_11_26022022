import { createContext, useState, useEffect } from 'react'
const HousingContext = createContext()

function HousingContextProvider(props) {
  const url = './data.json'
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log('inside context')

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log('inside useEffect')
    fetchData()
  }, [])

  return (
    <HousingContext.Provider value={{ data, loading, error }} {...props}>
      {props.children}
    </HousingContext.Provider>
  )
}

export { HousingContextProvider, HousingContext }
