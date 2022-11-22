import {getApiCall} from '../api-utils'
import {providerUrl} from '../constants'

const MILLISECOND_TO_MINUTE_CONVERSION_FACTOR = 60000
const SIXTY_MINUTES = 60

export const getEncounterSpecificProviderUuid = async consultationEncounter => {
  const response = await getApiCall(
    providerUrl(
      consultationEncounter.uuid,
      consultationEncounter.encounterProviders[0].uuid,
    ),
  )
  return response?.provider?.uuid
}

export const isConsultationEncounterActive = async consultationEncounter => {
  const consultationEncounterDateTime = new Date(
    consultationEncounter.encounterDatetime,
  )
  const currentDatetime = new Date()

  const timeDifferenceInMinutes =
    (currentDatetime.getTime() - consultationEncounterDateTime.getTime()) /
    MILLISECOND_TO_MINUTE_CONVERSION_FACTOR

  return timeDifferenceInMinutes < SIXTY_MINUTES
}
export const getProviderFromEncounterUrl = async (
  encounterResponse,
  providerUuId,
) => {
  console.log(encounterResponse)
  console.log(providerUuId)

  return encounterResponse.length
}
export const getEncounters = visitResponse => {
  return visitResponse.results.length > 0
    ? visitResponse.results[0].encounters
    : null
}
export const getProviderSpecificActiveConsultationEncounter = async (
  visitResponse,
  providerUuId,
) => {
  let providerResult
  const encounters = getEncounters(visitResponse)
  console.log('from previous method -encounters')
  console.log(encounters)
  for (const encounter of encounters) {
    if (
      encounter.encounterType.display == 'Consultation' &&
      isConsultationEncounterActive(encounter)
    ) {
      const provider = await getEncounterSpecificProviderUuid(encounter)
      if (provider == providerUuId) {
        providerResult = encounter
      }
    }
  }
  return providerResult
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
