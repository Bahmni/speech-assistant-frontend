import {postApiCall, getApiCall} from '../../utils/api-utils'
import {
  getProviderSpecificActiveConsultationEncounter,
  getConsultationObs,
} from '../../utils/encounter-details/encounter-details'
import {
  consultationEncounterTypeUrl,
  encounterUrl,
  unknownEncounterRoleUrl,
  consultationNotesConceptUrl,
  saveNotesUrl,
  updateObsUrl,
  encounterurl,
} from '../../utils/constants'

interface ObsType {
  person: string
  concept: string
  obsDatetime: string
  value: string
  location: string
  encounter: string
}

interface EncounterProvidersType {
  provider: string
  encounterRole: string
}

interface EncounterObsType {
  concept: string
  value: string
}

interface EncounterType {
  encounterDatetime: string
  patient: string
  encounterType: string
  location: string
  encounterProviders: EncounterProvidersType[]
  obs: EncounterObsType[]
  visit: string
}

export const getEncounterTypeUuid = async () => {
  const response = await getApiCall(consultationEncounterTypeUrl)
  return response?.results[0]?.uuid
}
const getEncounterRoleUuid = async () => {
  const response = await getApiCall(unknownEncounterRoleUrl)
  return response?.results[0]?.uuid
}

const getconsultationNotesConceptUuid = async () => {
  const response = await getApiCall(consultationNotesConceptUrl)
  return response?.results[0]?.uuid
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
    person,
    concept,
    obsDatetime,
    value,
    location,
    encounter,
  }
}

const encounterRequestBody = (
  encounterDatetime,
  visitUuid,
  encounterTypeUuid,
  encounterRoleUuid,
  conceptuuid,
  value,
  patientDetails,
): EncounterType => {
  return {
    encounterDatetime,
    patient: patientDetails.patientUuid,
    encounterType: encounterTypeUuid,
    location: patientDetails.locationUuid,
    encounterProviders: [
      {
        provider: patientDetails.providerUuid,
        encounterRole: encounterRoleUuid,
      },
    ],
    obs: [
      {
        concept: conceptuuid,
        value,
      },
    ],
    visit: visitUuid,
  }
}

export const createConsultationObs = async (
  encounterDatetime,
  consultationText,
  patientUuid,
  location,
  encounterUuid,
) => {
  const consultationNotesConceptUuid = await getconsultationNotesConceptUuid()
  const body = requestbody(
    patientUuid,
    consultationNotesConceptUuid,
    encounterDatetime,
    consultationText,
    location,
    encounterUuid,
  )

  await postApiCall(saveNotesUrl, body).then(response => response.json())
}
export const getActiveEncounterDate = () => {
  const date = new Date()
  date.setHours(date.getHours() - 1)
  const fromDate = date.toISOString()
  return fromDate
}

async function createEncounterWithObs(
  encounterDatetime,
  visitUuid,
  consultationText,
  patientDetails,
) {
  const encounterTypeUuid = await getEncounterTypeUuid()
  const encounterRoleUuid = await getEncounterRoleUuid()
  const consultationNotesConceptUuid = await getconsultationNotesConceptUuid()

  const encounterData = encounterRequestBody(
    encounterDatetime,
    visitUuid,
    encounterTypeUuid,
    encounterRoleUuid,
    consultationNotesConceptUuid,
    consultationText,
    patientDetails,
  )
  postApiCall(encounterUrl, encounterData).then(response => response.json())
}

export const updateConsultationObs = (obsUuid, consultationText) => {
  const body = {value: consultationText}
  postApiCall(updateObsUrl(obsUuid), body).then(response => response.json())
}

export const getEncounters = async (patientid, fromdate, encounterType) => {
  const response = await getApiCall(
    encounterurl(patientid, fromdate, encounterType),
  )
  return response
}

const saveConsultationObs = (
  consultationActiveEncounter,
  consultationText,
  encounterDatetime,
  patientDetails,
) => {
  const consultationObs = getConsultationObs(consultationActiveEncounter)
  if (consultationObs) {
    const obsUuid = consultationObs.uuid
    updateConsultationObs(obsUuid, consultationText)
  } else {
    createConsultationObs(
      encounterDatetime,
      consultationText,
      patientDetails.patientUuid,
      patientDetails.location,
      consultationActiveEncounter.uuid,
    )
  }
}

export const saveConsultationNotes = async (
  consultationText,
  patientDetails,
  visitUuid,
) => {
  const encounterTypeUuid = await getEncounterTypeUuid()

  const encounterDateTimeForActiveEncounter = getActiveEncounterDate()

  const encountersResult = await getEncounters(
    patientDetails.patientUuid,
    encounterDateTimeForActiveEncounter,
    encounterTypeUuid,
  )

  const consultationActiveEncounter =
    await getProviderSpecificActiveConsultationEncounter(
      encountersResult,
      visitUuid,
      patientDetails.locationUuid,
      patientDetails.providerUuid,
    )
  const encounterDatetime = new Date().toISOString()

  if (consultationActiveEncounter) {
    saveConsultationObs(
      consultationActiveEncounter,
      consultationText,
      encounterDatetime,
      patientDetails,
    )
  } else
    createEncounterWithObs(
      encounterDatetime,
      visitUuid,
      consultationText,
      patientDetails,
    )
}
