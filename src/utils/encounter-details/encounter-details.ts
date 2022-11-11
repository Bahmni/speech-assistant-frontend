export const getProviderSpecificActiveConsultationEncounter = async (
  response,
  visitUuid,
  locationUuid,
  providerUuId,
) => {
  let encounters = response?.results?.length > 0 ? response.results : null

  if (await encounters) {
    const consultationActiveEncounter = encounters?.find(
      encounter =>
        locationUuid === encounter.location?.uuid &&
        encounter.encounterProviders[0].provider.uuid === providerUuId &&
        visitUuid === encounter.visit.uuid,
    )
    return consultationActiveEncounter
  }
  return null
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
