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
  if (response.ok) {
    return await response.json()
  }
}
