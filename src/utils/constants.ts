export const streamingURL =
  process.env.SPEECH_ASSISTANT_PROXY_URL || location.origin
export const language = 'en'
export const visitUrl = (patientId, locationId) =>
  `/openmrs/ws/rest/v1/visit?includeInactive=false&patient=${patientId}&location=${locationId}&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)`
export const saveNotesUrl = '/openmrs/ws/rest/v1/obs'
export const conceptUrl = '/openmrs/ws/rest/v1/concept?q="Consultation Note'
