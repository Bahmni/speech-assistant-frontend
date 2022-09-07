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
}

export const mockConceptResponse = {
  results: [
    {
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
  ],
}

export const mockVisitResponse = {
  results: [
    {
      uuid: 'cbde1954-59fb-424f-a6dc-ad9db366523f',
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
      startDatetime: '2022-09-05T12:12:44.000+0000',
      stopDatetime: null,
      encounters: [
        {
          uuid: 'a53155d5-9277-4c03-81fa-6d6246410ac4',
          display: 'Consultation 09/05/2022',
          encounterDatetime: new Date().toISOString(),
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
            uuid: '81852aee-3f10-11e4-adec-0800271c1b75',
            display: 'Consultation',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encountertype/81852aee-3f10-11e4-adec-0800271c1b75',
                resourceAlias: 'encountertype',
              },
            ],
          },
          obs: [],
          orders: [
            {
              uuid: 'fdba5295-77b0-40e6-9989-99fd402b5b91',
              display: 'DLC',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/order/fdba5295-77b0-40e6-9989-99fd402b5b91',
                  resourceAlias: 'order',
                },
              ],
              type: 'order',
            },
          ],
          voided: false,
          visit: {
            uuid: 'cbde1954-59fb-424f-a6dc-ad9db366523f',
            display: 'OPD @ General Ward - 09/05/2022 12:12 PM',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/visit/cbde1954-59fb-424f-a6dc-ad9db366523f',
                resourceAlias: 'visit',
              },
            ],
          },
          encounterProviders: [
            {
              uuid: '24fd1283-60b9-40b7-a81c-06d58912df8e',
              display: 'Super Man: Unknown',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/encounter/a53155d5-9277-4c03-81fa-6d6246410ac4/encounterprovider/24fd1283-60b9-40b7-a81c-06d58912df8e',
                  resourceAlias: 'encounterprovider',
                },
              ],
            },
          ],
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/a53155d5-9277-4c03-81fa-6d6246410ac4',
              resourceAlias: 'encounter',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/a53155d5-9277-4c03-81fa-6d6246410ac4?v=full',
              resourceAlias: 'encounter',
            },
          ],
          resourceVersion: '1.9',
        },
        {
          uuid: 'c73fa4ae-9649-40aa-92e2-c607a2ccc586',
          display: 'REG 09/05/2022',
          encounterDatetime: '2022-09-05T12:12:51.000+0000',
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
              uuid: '8130d390-3160-4bd3-b864-ecfaba415cb3',
              display: 'Fee Information: 1.0',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/obs/8130d390-3160-4bd3-b864-ecfaba415cb3',
                  resourceAlias: 'obs',
                },
              ],
            },
          ],
          orders: [],
          voided: false,
          visit: {
            uuid: 'cbde1954-59fb-424f-a6dc-ad9db366523f',
            display: 'OPD @ General Ward - 09/05/2022 12:12 PM',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/visit/cbde1954-59fb-424f-a6dc-ad9db366523f',
                resourceAlias: 'visit',
              },
            ],
          },
          encounterProviders: [
            {
              uuid: 'd409db34-98ec-4e16-a65e-e27eab1228ad',
              display: 'Super Man: Unknown',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c73fa4ae-9649-40aa-92e2-c607a2ccc586/encounterprovider/d409db34-98ec-4e16-a65e-e27eab1228ad',
                  resourceAlias: 'encounterprovider',
                },
              ],
            },
          ],
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c73fa4ae-9649-40aa-92e2-c607a2ccc586',
              resourceAlias: 'encounter',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c73fa4ae-9649-40aa-92e2-c607a2ccc586?v=full',
              resourceAlias: 'encounter',
            },
          ],
          resourceVersion: '1.9',
        },
      ],
    },
  ],
}

export const mockNoConsultationEncounerVisitResponse = {
  results: [
    {
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
    },
  ],
}

const currentDatetime = new Date()
currentDatetime.setMinutes(currentDatetime.getMinutes() - 61)
const timeBeforeOneHour = currentDatetime.toISOString()

export const mockExpiredConsultationEncounterVisitResponse = {
  results: [
    {
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
          uuid: '1534f149-06d9-4078-a648-d3da3fc8ebb0',
          display: 'Consultation 09/07/2022',
          encounterDatetime: timeBeforeOneHour,
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
            uuid: '81852aee-3f10-11e4-adec-0800271c1b75',
            display: 'Consultation',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encountertype/81852aee-3f10-11e4-adec-0800271c1b75',
                resourceAlias: 'encountertype',
              },
            ],
          },
          obs: [],
          orders: [
            {
              uuid: '0fd78fff-ba0b-40fe-ade4-cc8079b58e33',
              display: 'Differential Count',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/order/0fd78fff-ba0b-40fe-ade4-cc8079b58e33',
                  resourceAlias: 'order',
                },
              ],
              type: 'order',
            },
          ],
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
              uuid: 'ad9d2194-dab8-45f5-a3c6-e2f9b49619bc',
              display: 'Super Man: Unknown',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1534f149-06d9-4078-a648-d3da3fc8ebb0/encounterprovider/ad9d2194-dab8-45f5-a3c6-e2f9b49619bc',
                  resourceAlias: 'encounterprovider',
                },
              ],
            },
          ],
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1534f149-06d9-4078-a648-d3da3fc8ebb0',
              resourceAlias: 'encounter',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1534f149-06d9-4078-a648-d3da3fc8ebb0?v=full',
              resourceAlias: 'encounter',
            },
          ],
          resourceVersion: '1.9',
        },
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
    },
  ],
}
