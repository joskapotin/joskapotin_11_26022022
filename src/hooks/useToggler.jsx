import PropTypes from 'prop-types'
import { useState } from 'react'

/**
 *
 * @param {boolean} defaultOnValue - Set the default state
 * @returns
 */
function useToggler(defaultOnValue) {
  const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)

  function toggle() {
    setIsToggledOn((prev) => !prev)
  }

  return [isToggledOn, toggle]
}

export default useToggler

useToggler.defaultProps = {
  defaultOnValue: false,
}

useToggler.propTypes = {
  defaultOnValue: PropTypes.bool,
}
