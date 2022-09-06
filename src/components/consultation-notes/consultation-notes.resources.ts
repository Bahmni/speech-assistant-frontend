import {getApiCall} from '../../utils/api-utils'
import {
  getLocationUuid,
  getPatientUuid,
} from '../../utils/patient-details/patient-details'

export const fetchActiveVisits = async setPatientDetails => {
  let patientUuid = getPatientUuid()
  let locationUuid = getLocationUuid()

  const visitUrl = `https://localhost/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientUuid}&location=${locationUuid}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`

  const activeVisitResponses = await getApiCall(visitUrl)
    .then(response => response.json())
    .then(data => {
      return data
    })
  activeVisitResponses.results.length > 0
    ? setPatientDetails({
        patientUuid,
        location,
        activeVisitResponses,
      })
    : setPatientDetails(null)
}
