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

export const saveConsultationNotes = async consultationText => {
  let urlElements = window.location.href.split('/')
  console.log('URL Elements----')
  console.log(urlElements)

  const patientUuid = urlElements[8]
  console.log('Patient UUID-----')
  console.log(patientUuid)

  const location = document.cookie.split('%22')[9]
  console.log('Location----' + location)

  const conceptResponse = await getApiCall(conceptUrl).then(response =>
    response.json(),
  )

  const conceptUuid = conceptResponse.results[0].uuid
  const obsDatetime = new Date().toISOString()
  const visitUrl = `https://localhost/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientUuid}&location=${location}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`
  console.log('Visit Url-----' + visitUrl)

  const body = requestbody(
    patientUuid,
    conceptUuid,
    obsDatetime,
    consultationText,
    location,
    'cd012444-b58b-4041-8d57-c271db9bd2a7',
  )

  postApiCall(saveNotesUrl, body)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}
