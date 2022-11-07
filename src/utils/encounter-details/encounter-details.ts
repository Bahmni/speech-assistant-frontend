export const getProviderSpecificActiveConsultationEncounter = async (
  response,
  locationUuid,
  providerUuId,
) => {
  console.log(response)

  let encounters = response.results.length > 0 ? response.results : null
  console.log(encounters)

  if (response.results.length > 0) {
    const consultationActiveEncounter = encounters?.find(
      encounter =>
        locationUuid == encounter.location.uuid &&
        encounter.encounterProviders[0].provider.uuid == providerUuId,
    )
    return consultationActiveEncounter
  }
  return false
}

export const getConsultationObs = consultationActiveEncounter => {
  const observations = consultationActiveEncounter.obs
  let consultationObs = null
  if (observations) {
    consultationObs = observations.find(obs => {
      return obs.display.match(/^Consultation Note:/) !== null
    })
  }
  return consultationObs
}
