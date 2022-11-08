import {sessionUrl, visitUrl} from './constants'

export const getApiCall = async url => {
  const response = await fetch(url, {
    method: 'GET',
  })

  return response.json()
}
export const postApiCall = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export async function getActiveVisitResponse(patiendId, locationId) {
  const activeVisitResponse = await getApiCall(visitUrl(patiendId, locationId))
  return activeVisitResponse
}

export async function getProviderUuid() {
  const response = await getApiCall(sessionUrl)
  return response?.currentProvider?.uuid
}
