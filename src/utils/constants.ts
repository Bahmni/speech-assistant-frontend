export const streamingURL = 'http://localhost'
export const language = 'en'
export const saveNotesUrl = '/openmrs/ws/rest/v1/obs'
export const conceptUrl = '/openmrs/ws/rest/v1/concept?q="Consultation Note'
export const visitUrl = (patientId, locationId) =>
  `/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientId}&location=${locationId}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`
