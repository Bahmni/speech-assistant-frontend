export const getPatientUuid = () => {
  let url = window.location.href
  const matchedPatterns = url.match(/patient\/([a-fA-F\d-]+)/)
  return matchedPatterns == null ? '' : matchedPatterns[1]
}

export const getLocationUuid = () => {
  const matchedPatterns = decodeURIComponent(document.cookie).match(
    /location=.+["uuid:"]([a-fA-F\d-]+)/,
  )
  return matchedPatterns == null ? '' : matchedPatterns[1]
}
