export const getApiCall = async url => {
  const response = await fetch(url, {
    method: 'GET',
  })

  if (response.ok) {
    return response.json()
  }
export const postApiCall = (url, data) => {
  console.log('Inside Post api call')
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
