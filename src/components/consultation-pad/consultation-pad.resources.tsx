import {getApiCall} from '../../utils/api-utils'

export const activeEncounter =async ()=> {
  let url = window.location.href

  const patientUuid=url.match(/patient\/([a-fA-F\d-]+)/)[1]
  const location =decodeURIComponent(document.cookie).match(/location={["a-z":]{7}"[A-Z a-z]*",["uuid:"]{7}"([a-fA-F\d-]*)/)[1]
  console.log(location)

  const visitUrl = `https://localhost/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientUuid}&location=${location}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`
  console.log('Visit Url-----' + visitUrl)
  const visitResponse = await getApiCall(visitUrl).then(response=>response.json())
  console.log("visits data--------")
  console.log(visitResponse)
  console.log(visitResponse)
  console.log(visitResponse.results[0])
  console.log("---")
  const currentDatetime = new Date().toISOString()
  console.log(currentDatetime)
  visitResponse.results[0].encounters.forEach((encounter)=>{
    (encounter.encounterType.display=="Consultation")&&(console.log(encounter.encounterDatetime))
    console.log(encounter.encounterType.display)
    //if consultation is not there then create encounter of that consultation
})
}