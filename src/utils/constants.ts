export const streamingURL = location.origin
export const language = 'en'
export const bahmniSaveButtonResponseTime = 3000
export const saveNotesUrl = '/openmrs/ws/rest/v1/obs'
export const visitUrl = (patientId, locationId) =>
  `/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientId}&location=${locationId}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`
export const updateObsUrl = obsUuid => `/openmrs/ws/rest/v1/obs/${obsUuid}`
export const consultationEncounterTypeUrl =
  '/openmrs/ws/rest/v1/encountertype?q=Consultation'
export const unknownEncounterRoleUrl =
  '/openmrs/ws/rest/v1/encounterrole?q=unknown'
export const consultationNotesConceptUrl =
  '/openmrs/ws/rest/v1/concept?q="Consultation Note"'
export const encounterUrl = '/openmrs/ws/rest/v1/encounter'
export const sessionUrl = '/openmrs/ws/rest/v1/session?v=full'
export const customEncounterUrl = (patientId, date, encounterType) =>
  `/openmrs/ws/rest/v1/encounter?patient=${patientId}&encounterType=${encounterType}&fromdate=${date}&v=custom:(uuid,display,encounterDatetime,location,obs,visit,encounterProviders)`
