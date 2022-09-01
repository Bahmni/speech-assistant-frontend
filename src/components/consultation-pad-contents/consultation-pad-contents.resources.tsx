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

export const getPatientUuid = () => {
  let url = window.location.href
  const patientUuid = url.match(/patient\/([a-fA-F\d-]+)/)[1]

  return patientUuid
}

export const getLocationUuid = () => {
  const location = decodeURIComponent(document.cookie).match(
    /location={["a-z":]{7}"[A-Z a-z]*",["uuid:"]{7}"([a-fA-F\d-]*)/,
  )[1]
  return location
}

let encounterUuid

export const activeEncounter = async () => {
  const patientUuid = getPatientUuid()
  console.log('Patient UUid')
  console.log(patientUuid)
  const location = getLocationUuid()
  console.log('Location UUid')
  console.log(location)

  const visitUrl = `https://localhost/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientUuid}&location=${location}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`

  const visitResponse = await getApiCall(visitUrl).then(response =>
    response.json(),
  )

  console.log(visitResponse)

  const currentDatetime = new Date()
  let encounterDateTime
  let time
  let isActive = false

  visitResponse.results[0].encounters.forEach(encounter => {
    encounter.encounterType.display == 'Consultation' &&
      ((encounterDateTime = new Date(encounter.encounterDatetime)),
      (time =
        (currentDatetime.getTime() - encounterDateTime.getTime()) / 60000),
      console.log(time),
      time < 60 &&
        ((encounterUuid = encounter.uuid),
        (isActive = true),
        console.log('Encounter UUid'),
        console.log(encounterUuid)))
  })

  return isActive
}

export const saveConsultationNotes = async consultationText => {
  ;(await activeEncounter())
    ? saveobsData(consultationText)
    : console.log('No active Encounters')
}

export const saveobsData = async consultationText => {
  const patientUuid = getPatientUuid()
  const location = getLocationUuid()

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
