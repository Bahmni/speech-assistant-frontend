export const getApiCall = async url => {
  const response = await fetch(url, {
    method: 'GET',
  })

  if (response.ok) {
    return response.json()
  }
}
