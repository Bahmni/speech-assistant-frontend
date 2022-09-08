import {getApiCall} from '../../utils/api-utils'
import {
  getLocationUuid,
  getPatientUuid,
} from '../../utils/patient-details/patient-details'

export const fetchActiveVisits = async setPatientDetails => {
  let patientUuid = getPatientUuid()
  let locationUuid = getLocationUuid()

  const visitUrl = `https://localhost/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientUuid}&location=${locationUuid}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`

  const visitResponse = await getApiCall(visitUrl)
    .then(response => response.json())
    .then(data => {
      return data
    })
  // console.log(activeVisitResponses)
  visitResponse.results.length > 0
    ? setPatientDetails({
        patientUuid,
        locationUuid,
        visitResponse,
      })
    : setPatientDetails(null)
}
