export const getPatientUuid = () => {
  let url = window.location.href
  const matchedPatterns = url.match(/patient\/([a-fA-F\d-]+)/)
  return matchedPatterns == null ? '' : matchedPatterns[1]
}

export const getLocationUuid = () => {
  const matchedPatterns = decodeURIComponent(document.cookie).match(
    /location={["a-z":]{7}"[A-Z a-z]*",["uuid:"]{7}"([a-fA-F\d-]*)/,
  )
  return matchedPatterns == null ? '' : matchedPatterns[1]
}
