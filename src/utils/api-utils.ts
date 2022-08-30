export const postApiCall = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const getApiCall = url => {
  return fetch(url, {
    method: 'GET',
  })
}
