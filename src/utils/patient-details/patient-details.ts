export const getPatientUuid = () => {
  const url = window.location.href
  const matchedPatterns = url.match(/patient\/([a-fA-F\d-]+)/)
  return matchedPatterns ? matchedPatterns[1] : ''
}

export const getLocationUuid = () => {
  const matchedPatterns = decodeURIComponent(document.cookie).match(
    /bahmni.user.location=(.[^;]*)/,
  )
  return matchedPatterns ? JSON.parse(matchedPatterns[1]).uuid : ''
}
