export const postApiCall = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const getApiCall = async url => {
  const response = await fetch(url, {
    method: 'GET',
  })
  const body = await response.json()
  return body
}
