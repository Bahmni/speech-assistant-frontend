export const getPatientUuid = () => {
  let url = window.location.href

  const matchedPatterns = url.match(/patient\/([a-fA-F\d-]+)/)

  let patientUuid
  matchedPatterns == null
    ? (patientUuid = null)
    : (patientUuid = matchedPatterns[1])

  return patientUuid
}

export const getLocationUuid = () => {
  const location = decodeURIComponent(document.cookie).match(
    /location={["a-z":]{7}"[A-Z a-z]*",["uuid:"]{7}"([a-fA-F\d-]*)/,
  )[1]
  return location
}
