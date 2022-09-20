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
