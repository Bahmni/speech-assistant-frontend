import {postApiCall, getApiCall} from '../../utils/api-utils'
import {saveNotesUrl, conceptUrl, customVisitUrl} from '../../utils/constants'

interface ObsType {
  person: string
  concept: string
  obsDatetime: string
  value: string
  location: string
  encounter: string
}

const requestbody = (
  person,
  concept,
  obsDatetime,
  value,
  location,
  encounter,
): ObsType => {
  return {
    person: person,
    concept: concept,
    obsDatetime: obsDatetime,
    value: value,
    location: location,
    encounter: encounter,
  }
}

const MILLISECOND_TO_MINUTE_CONVERSION_FACTOR = 60000
const SIXTY_MINUTES = 60

const isConsultationEncounterActive = consultationEncounter => {
  const consultationEncounterDateTime = new Date(
    consultationEncounter.encounterDatetime,
  )
  const currentDatetime = new Date()

  const timeDifferenceInMinutes =
    (currentDatetime.getTime() - consultationEncounterDateTime.getTime()) /
    MILLISECOND_TO_MINUTE_CONVERSION_FACTOR

  return timeDifferenceInMinutes < SIXTY_MINUTES
}

export const getEncounters = async patientDetails => {
  const encounters = await getApiCall(
    customVisitUrl(patientDetails.patientUuid, patientDetails.locationUuid),
  )
  return encounters?.results?.length > 0
    ? encounters?.results[0]?.encounters
    : null
}

export const saveObsData = async (
  consultationText,
  patientUuid,
  location,
  encounterUuid,
) => {
  const conceptResponse = await getApiCall(conceptUrl)
  const conceptUuid = conceptResponse.results[0].uuid

  const obsDatetime = new Date().toISOString()

  const body = requestbody(
    patientUuid,
    conceptUuid,
    obsDatetime,
    consultationText,
    location,
    encounterUuid,
  )

  postApiCall(saveNotesUrl, body).then(response => response.json())
}

export const saveConsultationNotes = async (
  consultationText,
  patientDetails,
) => {
  const encounters = await getEncounters(patientDetails)
  const consultationActiveEncounter = encounters?.find(
    encounter =>
      encounter.encounterType.display == 'Consultation' &&
      isConsultationEncounterActive(encounter),
  )
  if (consultationActiveEncounter)
    saveObsData(
      consultationText,
      patientDetails.patientUuid,
      patientDetails.location,
      consultationActiveEncounter.uuid,
    )
}
