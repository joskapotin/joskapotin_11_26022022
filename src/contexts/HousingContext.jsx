import { createContext } from 'react'
import useFetch from '../hooks/useFetch'
const HousingContext = createContext()

function HousingContextProvider({ children }) {
  const url = './data.json'
  const { data, loading, error } = useFetch(url)
  return (
    <HousingContext.Provider value={{ data, loading, error }}>
      {children}
    </HousingContext.Provider>
  )
}

export { HousingContextProvider, HousingContext }
