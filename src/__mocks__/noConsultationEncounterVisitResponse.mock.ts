export const mockNoConsultationEncounerVisitResponse = {
  uuid: '92f5bce4-b225-4fa4-b1da-0abe14bc05ae',
  visitType: {
    uuid: 'c22a5000-3f10-11e4-adec-0800271c1b75',
    display: 'OPD',
    name: 'OPD',
    description: 'Visit for patients coming for OPD',
    retired: false,
    links: [
      {
        rel: 'self',
        uri: 'http://localhost/openmrs/ws/rest/v1/visittype/c22a5000-3f10-11e4-adec-0800271c1b75',
        resourceAlias: 'visittype',
      },
      {
        rel: 'full',
        uri: 'http://localhost/openmrs/ws/rest/v1/visittype/c22a5000-3f10-11e4-adec-0800271c1b75?v=full',
        resourceAlias: 'visittype',
      },
    ],
    resourceVersion: '1.9',
  },
  startDatetime: '2022-09-07T11:27:43.000+0000',
  stopDatetime: null,
  encounters: [
    {
      uuid: '86ce87d3-7137-48bb-aaac-f5fd86910d0b',
      display: 'REG 09/07/2022',
      encounterDatetime: '2022-09-07T11:27:49.000+0000',
      patient: {
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
      location: {
        uuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
        display: 'General Ward',
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec',
            resourceAlias: 'location',
          },
        ],
      },
      form: null,
      encounterType: {
        uuid: '81888515-3f10-11e4-adec-0800271c1b75',
        display: 'REG',
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/encountertype/81888515-3f10-11e4-adec-0800271c1b75',
            resourceAlias: 'encountertype',
          },
        ],
      },
      obs: [
        {
          uuid: '13148937-f09a-4f81-b8e5-360f4fee2e10',
          display: 'Fee Information: 1.0',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/13148937-f09a-4f81-b8e5-360f4fee2e10',
              resourceAlias: 'obs',
            },
          ],
        },
      ],
      orders: [],
      voided: false,
      visit: {
        uuid: '92f5bce4-b225-4fa4-b1da-0abe14bc05ae',
        display: 'OPD @ General Ward - 09/07/2022 11:27 AM',
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/92f5bce4-b225-4fa4-b1da-0abe14bc05ae',
            resourceAlias: 'visit',
          },
        ],
      },
      encounterProviders: [
        {
          uuid: '8b49adf9-e48c-4651-a5d6-56f03e4c24e8',
          display: 'Super Man: Unknown',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/86ce87d3-7137-48bb-aaac-f5fd86910d0b/encounterprovider/8b49adf9-e48c-4651-a5d6-56f03e4c24e8',
              resourceAlias: 'encounterprovider',
            },
          ],
        },
      ],
      links: [
        {
          rel: 'self',
          uri: 'http://localhost/openmrs/ws/rest/v1/encounter/86ce87d3-7137-48bb-aaac-f5fd86910d0b',
          resourceAlias: 'encounter',
        },
        {
          rel: 'full',
          uri: 'http://localhost/openmrs/ws/rest/v1/encounter/86ce87d3-7137-48bb-aaac-f5fd86910d0b?v=full',
          resourceAlias: 'encounter',
        },
      ],
      resourceVersion: '1.9',
    },
  ],
}
