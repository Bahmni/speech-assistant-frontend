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

export const getActiveEncounterUuid = async visitRepsonse => {
  const currentDatetime = new Date()
  const encounters = visitRepsonse.results[0].encounters

  let activeEncounterUuid = null
  let encounterDateTime
  let timeDifferenceInMinutes

  encounters.forEach(encounter => {
    encounter.encounterType.display == 'Consultation' &&
      ((encounterDateTime = new Date(encounter.encounterDatetime)),
      (timeDifferenceInMinutes =
        (currentDatetime.getTime() - encounterDateTime.getTime()) / 60000),
      console.log(timeDifferenceInMinutes),
      timeDifferenceInMinutes < 60 && (activeEncounterUuid = encounter.uuid))
  })

  return activeEncounterUuid
}

export const saveConsultationNotes = async (
  consultationText,
  patientDetails,
) => {
  const activeEncounterUuid = await getActiveEncounterUuid(
    patientDetails.visitResponse,
  )
  activeEncounterUuid != null
    ? saveObsData(
        consultationText,
        patientDetails.patientUuid,
        patientDetails.location,
        activeEncounterUuid,
      )
    : console.log('No active Encounters')
}

export const saveObsData = async (
  consultationText,
  patientUuid,
  location,
  encounterUuid,
) => {
  const conceptResponse = await getApiCall(conceptUrl).then(response =>
    response.json(),
  )
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
