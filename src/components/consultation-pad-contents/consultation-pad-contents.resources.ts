import {postApiCall, getApiCall} from '../../utils/api-utils'
import {saveNotesUrl, conceptUrl} from '../../utils/constants'

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

const getConsultationEncounter = encounters => {
  for (const encounter of encounters) {
    if (encounter.encounterType.display == 'Consultation') return encounter
  }
  console.log('Outside for each')
  return false
}

const isConscultationEncounterActive = consultationEncounter => {
  const consultationEncounterDateTime = new Date(
    consultationEncounter.encounterDatetime,
  )
  const currentDatetime = new Date()
  const timeDifferenceInMinutes =
    (currentDatetime.getTime() - consultationEncounterDateTime.getTime()) /
    60000
  return timeDifferenceInMinutes < 60
}

export const saveConsultationNotes = (consultationText, patientDetails) => {
  let encounters
  let consultationEncounter
  let activeConsultationEncounterUuid
  ;(encounters = patientDetails.visitResponse.encounters),
    (consultationEncounter = getConsultationEncounter(encounters)),
    consultationEncounter
      ? isConscultationEncounterActive(consultationEncounter)
        ? ((activeConsultationEncounterUuid = consultationEncounter.uuid),
          saveObsData(
            consultationText,
            patientDetails.patientUuid,
            patientDetails.location,
            activeConsultationEncounterUuid,
          ))
        : console.log('No Active Consultation Encounter')
      : console.log('No Consultation Encounter')
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

  postApiCall(saveNotesUrl, body)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}
