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

export const mockActiveactiveVisit = {
  uuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
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
  startDatetime: '2017-06-07T15:58:48.000+0000',
  stopDatetime: null,
  encounters: [
    {
      uuid: '622862af-30bd-4da0-bce6-a188c0da7617',
      display: 'Consultation 06/07/2017',
      encounterDatetime: '2017-06-07T15:59:39.000+0000',
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
          uuid: '90a8127d-2fbd-4ce1-8948-6437963c36cc',
          display: 'CHEST PA',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/order/90a8127d-2fbd-4ce1-8948-6437963c36cc',
              resourceAlias: 'order',
            },
          ],
          type: 'order',
        },
      ],
      voided: false,
      visit: {
        uuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
        display: 'OPD @ General Ward - 06/07/2017 03:58 PM',
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
            resourceAlias: 'visit',
          },
        ],
      },
      encounterProviders: [
        {
          uuid: 'dfb1840b-41de-4f88-8f19-72b1ceebb165',
          display: 'Super Man: Unknown',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/622862af-30bd-4da0-bce6-a188c0da7617/encounterprovider/dfb1840b-41de-4f88-8f19-72b1ceebb165',
              resourceAlias: 'encounterprovider',
            },
          ],
        },
      ],
      links: [
        {
          rel: 'self',
          uri: 'http://localhost/openmrs/ws/rest/v1/encounter/622862af-30bd-4da0-bce6-a188c0da7617',
          resourceAlias: 'encounter',
        },
        {
          rel: 'full',
          uri: 'http://localhost/openmrs/ws/rest/v1/encounter/622862af-30bd-4da0-bce6-a188c0da7617?v=full',
          resourceAlias: 'encounter',
        },
      ],
      resourceVersion: '1.9',
    },
    {
      uuid: 'c86879a2-357b-4add-b109-231f4f076f79',
      display: 'REG 06/07/2017',
      encounterDatetime: '2017-06-07T15:59:03.000+0000',
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
          uuid: '157ce9b8-52e0-415b-a62f-454bb99d230e',
          display: 'Fee Information: 150.0',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/157ce9b8-52e0-415b-a62f-454bb99d230e',
              resourceAlias: 'obs',
            },
          ],
        },
        {
          uuid: '89dce1ab-5d08-4383-87e0-c2f0450ba3c0',
          display: 'BMI Data: 831.76, true',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/89dce1ab-5d08-4383-87e0-c2f0450ba3c0',
              resourceAlias: 'obs',
            },
          ],
        },
        {
          uuid: 'b750cb59-36ca-495d-9646-fdf9fa5d8753',
          display: 'Nutritional Values: ',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/b750cb59-36ca-495d-9646-fdf9fa5d8753',
              resourceAlias: 'obs',
            },
          ],
        },
        {
          uuid: '41816d59-2b0f-422f-826a-a77032494e0a',
          display: 'BMI Status Data: Very Severely Obese, true',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/41816d59-2b0f-422f-826a-a77032494e0a',
              resourceAlias: 'obs',
            },
          ],
        },
      ],
      orders: [],
      voided: false,
      visit: {
        uuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
        display: 'OPD @ General Ward - 06/07/2017 03:58 PM',
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
            resourceAlias: 'visit',
          },
        ],
      },
      encounterProviders: [
        {
          uuid: '0c61a7e7-3532-4a65-b02a-a0e42e1781cf',
          display: 'Super Man: Unknown',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c86879a2-357b-4add-b109-231f4f076f79/encounterprovider/0c61a7e7-3532-4a65-b02a-a0e42e1781cf',
              resourceAlias: 'encounterprovider',
            },
          ],
        },
      ],
      links: [
        {
          rel: 'self',
          uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c86879a2-357b-4add-b109-231f4f076f79',
          resourceAlias: 'encounter',
        },
        {
          rel: 'full',
          uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c86879a2-357b-4add-b109-231f4f076f79?v=full',
          resourceAlias: 'encounter',
        },
      ],
      resourceVersion: '1.9',
    },
  ],
}
