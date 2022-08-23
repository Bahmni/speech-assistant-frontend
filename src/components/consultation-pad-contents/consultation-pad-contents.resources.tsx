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
  const conceptResponse = await getApiCall(conceptUrl).then(response =>
    response.json(),
  )
  const conceptUuid = conceptResponse.results[0].uuid
  const obsDatetime = new Date().toISOString()

  const body = requestbody(
    'dc9444c6-ad55-4200-b6e9-407e025eb948',
    conceptUuid,
    obsDatetime,
    consultationText,
    'c5854fd7-3f12-11e4-adec-0800271c1b75',
    'cd012444-b58b-4041-8d57-c271db9bd2a7',
  )

  postApiCall(saveNotesUrl, body)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}
