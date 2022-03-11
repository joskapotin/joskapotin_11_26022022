/* eslint-disable import/prefer-default-export */

export const fetchData = async (url, abortController) => {
  const response = await fetch(url, { signal: abortController.signal })
  if (!response.ok) {
    const error = response.status
    return Promise.reject(error)
  }
  const result = await response.json()
  return result
}
