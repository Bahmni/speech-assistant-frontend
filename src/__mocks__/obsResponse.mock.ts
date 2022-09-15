export const mockObsResponse = {
  uuid: 'a7567acb-0e6d-4523-89b6-1c69f50ee1c7',
  display: 'Consultation Note: data',
  concept: {
    uuid: '81d6e852-3f10-11e4-adec-0800271c1b75',
    display: 'Consultation Note',
    links: [
      {
        rel: 'self',
        uri: 'http://localhost/openmrs/ws/rest/v1/concept/81d6e852-3f10-11e4-adec-0800271c1b75',
        resourceAlias: 'concept',
      },
    ],
  },
  person: {
    uuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
    display: 'GAN203010 - Test Radiology',
    links: [
      {
        rel: 'self',
        uri: 'http://localhost/openmrs/ws/rest/v1/patient/dc9444c6-ad55-4200-b6e9-407e025eb948',
        resourceAlias: 'patient',
      },
    ],
  },
  obsDatetime: '2022-08-02T07:37:31.000+0000',
  accessionNumber: null,
  obsGroup: null,
  valueCodedName: null,
  groupMembers: null,
  comment: null,
  location: {
    uuid: 'c5854fd7-3f12-11e4-adec-0800271c1b75',
    display: 'Registration Desk',
    links: [
      {
        rel: 'self',
        uri: 'http://localhost/openmrs/ws/rest/v1/location/c5854fd7-3f12-11e4-adec-0800271c1b75',
        resourceAlias: 'location',
      },
    ],
  },
  order: null,
  encounter: {
    uuid: 'cd012444-b58b-4041-8d57-c271db9bd2a7',
    display: 'Consultation 08/02/2022',
    links: [
      {
        rel: 'self',
        uri: 'http://localhost/openmrs/ws/rest/v1/encounter/cd012444-b58b-4041-8d57-c271db9bd2a7',
        resourceAlias: 'encounter',
      },
    ],
  },
  voided: false,
  value: 'data',
  valueModifier: null,
  formFieldPath: null,
  formFieldNamespace: null,
  links: [
    {
      rel: 'self',
      uri: 'http://localhost/openmrs/ws/rest/v1/obs/a7567acb-0e6d-4523-89b6-1c69f50ee1c7',
      resourceAlias: 'obs',
    },
    {
      rel: 'full',
      uri: 'http://localhost/openmrs/ws/rest/v1/obs/a7567acb-0e6d-4523-89b6-1c69f50ee1c7?v=full',
      resourceAlias: 'obs',
    },
  ],
  resourceVersion: '1.11',
  ok: 'true',
}
