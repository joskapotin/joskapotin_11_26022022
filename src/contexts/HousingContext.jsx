import { createContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../hooks/useFetch'

const HousingContext = createContext()

/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children - The content to display inside the component
 * @returns
 */
function HousingContextProvider({ children }) {
  const url = './data.json'
  const { data, loading, error } = useFetch(url)
  const values = useMemo(
    () => ({ data, loading, error }),
    [data, loading, error]
  )

  return (
    <HousingContext.Provider value={values}>{children}</HousingContext.Provider>
  )
}

export { HousingContextProvider, HousingContext }

HousingContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
