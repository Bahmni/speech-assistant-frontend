export const mockEncounterResponseWithTwoActiveEncounetrsOfDiffProviders = {
  results: [
    {
      uuid: 'bfd4685b-12d8-4820-8e6e-71674ee48b3f',
      display: 'Consultation 11/24/2022',
      encounterDatetime: new Date().toISOString(),
      location: {
        uuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
        display: 'General Ward',
        name: 'General Ward',
        description: 'General Ward',
        address1: null,
        address2: null,
        cityVillage: null,
        stateProvince: 'Chattisgarh',
        country: null,
        postalCode: null,
        latitude: null,
        longitude: null,
        countyDistrict: 'Bilaspur',
        address3: null,
        address4: null,
        address5: null,
        address6: null,
        tags: [
          {
            uuid: '475d8fa3-5572-11e6-8be9-0800270d80ce',
            display: 'Visit Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/475d8fa3-5572-11e6-8be9-0800270d80ce',
                resourceAlias: 'locationtag',
              },
            ],
          },
          {
            uuid: 'b8bbf83e-645f-451f-8efe-a0db56f09676',
            display: 'Login Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/b8bbf83e-645f-451f-8efe-a0db56f09676',
                resourceAlias: 'locationtag',
              },
            ],
          },
          {
            uuid: 'a675e840-d225-11e4-9c67-080027b662ec',
            display: 'Admission Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/a675e840-d225-11e4-9c67-080027b662ec',
                resourceAlias: 'locationtag',
              },
            ],
          },
        ],
        parentLocation: null,
        childLocations: [
          {
            uuid: 'e48fb2b3-d490-11e5-b193-0800270d80ce',
            display: 'General Ward - Room 2',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/e48fb2b3-d490-11e5-b193-0800270d80ce',
                resourceAlias: 'location',
              },
            ],
          },
          {
            uuid: 'baf83667-d225-11e4-9c67-080027b662ec',
            display: 'General Ward Room 1',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/baf83667-d225-11e4-9c67-080027b662ec',
                resourceAlias: 'location',
              },
            ],
          },
        ],
        retired: false,
        attributes: [
          {
            uuid: '1d3a3de3-9d5a-47c5-80f3-188bf60a241d',
            display: 'IdentifierSourceName: GAN',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec/attribute/1d3a3de3-9d5a-47c5-80f3-188bf60a241d',
                resourceAlias: 'attribute',
              },
            ],
          },
        ],
        address7: null,
        address8: null,
        address9: null,
        address10: null,
        address11: null,
        address12: null,
        address13: null,
        address14: null,
        address15: null,
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec',
            resourceAlias: 'location',
          },
          {
            rel: 'full',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec?v=full',
            resourceAlias: 'location',
          },
        ],
        resourceVersion: '2.0',
      },
      obs: [
        {
          uuid: '5f0b3f48-fecb-44a4-87f9-cecfc8ea7eab',
          display: 'Consultation Note: super3',
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
          obsDatetime: '2022-11-24T13:25:30.000+0000',
          accessionNumber: null,
          obsGroup: null,
          valueCodedName: null,
          groupMembers: null,
          comment: null,
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
          order: null,
          encounter: {
            uuid: 'bfd4685b-12d8-4820-8e6e-71674ee48b3f',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/bfd4685b-12d8-4820-8e6e-71674ee48b3f',
                resourceAlias: 'encounter',
              },
            ],
          },
          voided: false,
          value: 'super3',
          valueModifier: null,
          formFieldPath: null,
          formFieldNamespace: null,
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/5f0b3f48-fecb-44a4-87f9-cecfc8ea7eab',
              resourceAlias: 'obs',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/5f0b3f48-fecb-44a4-87f9-cecfc8ea7eab?v=full',
              resourceAlias: 'obs',
            },
          ],
          resourceVersion: '1.11',
        },
      ],
      visit: {
        uuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
        display: 'OPD @ General Ward - 06/07/2017 03:58 PM',
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
        visitType: {
          uuid: 'c22a5000-3f10-11e4-adec-0800271c1b75',
          display: 'OPD',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/visittype/c22a5000-3f10-11e4-adec-0800271c1b75',
              resourceAlias: 'visittype',
            },
          ],
        },
        indication: null,
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
        startDatetime: '2017-06-07T15:58:48.000+0000',
        stopDatetime: null,
        encounters: [
          {
            uuid: '1034432a-607b-4038-b374-0fa4133facf0',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1034432a-607b-4038-b374-0fa4133facf0',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'bfd4685b-12d8-4820-8e6e-71674ee48b3f',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/bfd4685b-12d8-4820-8e6e-71674ee48b3f',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '622862af-30bd-4da0-bce6-a188c0da7617',
            display: 'Consultation 06/07/2017',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/622862af-30bd-4da0-bce6-a188c0da7617',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'c86879a2-357b-4add-b109-231f4f076f79',
            display: 'REG 06/07/2017',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c86879a2-357b-4add-b109-231f4f076f79',
                resourceAlias: 'encounter',
              },
            ],
          },
        ],
        attributes: [
          {
            uuid: '36977295-ff8a-4bcc-a84a-9350f5e70f2e',
            display: 'Visit Status: OPD',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7/attribute/36977295-ff8a-4bcc-a84a-9350f5e70f2e',
                resourceAlias: 'attribute',
              },
            ],
          },
        ],
        voided: false,
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
            resourceAlias: 'visit',
          },
          {
            rel: 'full',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7?v=full',
            resourceAlias: 'visit',
          },
        ],
        resourceVersion: '1.9',
      },
      encounterProviders: [
        {
          uuid: 'a1752c58-3dce-42e6-b037-840972721951',
          provider: {
            uuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
            display: 'superman - Super Man',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/provider/c1c26908-3f10-11e4-adec-0800271c1b75',
                resourceAlias: 'provider',
              },
            ],
          },
          encounterRole: {
            uuid: 'a0b03050-c99b-11e0-9572-0800200c9a66',
            display: 'Unknown',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounterrole/a0b03050-c99b-11e0-9572-0800200c9a66',
                resourceAlias: 'encounterrole',
              },
            ],
          },
          voided: false,
          links: [
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/bfd4685b-12d8-4820-8e6e-71674ee48b3f/encounterprovider/a1752c58-3dce-42e6-b037-840972721951?v=full',
              resourceAlias: 'encounterprovider',
            },
          ],
          resourceVersion: '1.9',
        },
      ],
    },
    {
      uuid: '1034432a-607b-4038-b374-0fa4133facf0',
      display: 'Consultation 11/24/2022',
      encounterDatetime: new Date().toISOString(),
      location: {
        uuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
        display: 'General Ward',
        name: 'General Ward',
        description: 'General Ward',
        address1: null,
        address2: null,
        cityVillage: null,
        stateProvince: 'Chattisgarh',
        country: null,
        postalCode: null,
        latitude: null,
        longitude: null,
        countyDistrict: 'Bilaspur',
        address3: null,
        address4: null,
        address5: null,
        address6: null,
        tags: [
          {
            uuid: '475d8fa3-5572-11e6-8be9-0800270d80ce',
            display: 'Visit Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/475d8fa3-5572-11e6-8be9-0800270d80ce',
                resourceAlias: 'locationtag',
              },
            ],
          },
          {
            uuid: 'b8bbf83e-645f-451f-8efe-a0db56f09676',
            display: 'Login Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/b8bbf83e-645f-451f-8efe-a0db56f09676',
                resourceAlias: 'locationtag',
              },
            ],
          },
          {
            uuid: 'a675e840-d225-11e4-9c67-080027b662ec',
            display: 'Admission Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/a675e840-d225-11e4-9c67-080027b662ec',
                resourceAlias: 'locationtag',
              },
            ],
          },
        ],
        parentLocation: null,
        childLocations: [
          {
            uuid: 'e48fb2b3-d490-11e5-b193-0800270d80ce',
            display: 'General Ward - Room 2',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/e48fb2b3-d490-11e5-b193-0800270d80ce',
                resourceAlias: 'location',
              },
            ],
          },
          {
            uuid: 'baf83667-d225-11e4-9c67-080027b662ec',
            display: 'General Ward Room 1',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/baf83667-d225-11e4-9c67-080027b662ec',
                resourceAlias: 'location',
              },
            ],
          },
        ],
        retired: false,
        attributes: [
          {
            uuid: '1d3a3de3-9d5a-47c5-80f3-188bf60a241d',
            display: 'IdentifierSourceName: GAN',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec/attribute/1d3a3de3-9d5a-47c5-80f3-188bf60a241d',
                resourceAlias: 'attribute',
              },
            ],
          },
        ],
        address7: null,
        address8: null,
        address9: null,
        address10: null,
        address11: null,
        address12: null,
        address13: null,
        address14: null,
        address15: null,
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec',
            resourceAlias: 'location',
          },
          {
            rel: 'full',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec?v=full',
            resourceAlias: 'location',
          },
        ],
        resourceVersion: '2.0',
      },
      obs: [
        {
          uuid: '722a4f33-5f18-43e3-9a53-15e756e2fa9d',
          display: 'Consultation Note: doctor-3',
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
          obsDatetime: '2022-11-24T13:26:17.000+0000',
          accessionNumber: null,
          obsGroup: null,
          valueCodedName: null,
          groupMembers: null,
          comment: null,
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
          order: null,
          encounter: {
            uuid: '1034432a-607b-4038-b374-0fa4133facf0',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1034432a-607b-4038-b374-0fa4133facf0',
                resourceAlias: 'encounter',
              },
            ],
          },
          voided: false,
          value: 'doctor-3',
          valueModifier: null,
          formFieldPath: null,
          formFieldNamespace: null,
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/722a4f33-5f18-43e3-9a53-15e756e2fa9d',
              resourceAlias: 'obs',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/obs/722a4f33-5f18-43e3-9a53-15e756e2fa9d?v=full',
              resourceAlias: 'obs',
            },
          ],
          resourceVersion: '1.11',
        },
      ],
      visit: {
        uuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
        display: 'OPD @ General Ward - 06/07/2017 03:58 PM',
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
        visitType: {
          uuid: 'c22a5000-3f10-11e4-adec-0800271c1b75',
          display: 'OPD',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/visittype/c22a5000-3f10-11e4-adec-0800271c1b75',
              resourceAlias: 'visittype',
            },
          ],
        },
        indication: null,
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
        startDatetime: '2017-06-07T15:58:48.000+0000',
        stopDatetime: null,
        encounters: [
          {
            uuid: '1034432a-607b-4038-b374-0fa4133facf0',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1034432a-607b-4038-b374-0fa4133facf0',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'bfd4685b-12d8-4820-8e6e-71674ee48b3f',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/bfd4685b-12d8-4820-8e6e-71674ee48b3f',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '622862af-30bd-4da0-bce6-a188c0da7617',
            display: 'Consultation 06/07/2017',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/622862af-30bd-4da0-bce6-a188c0da7617',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'c86879a2-357b-4add-b109-231f4f076f79',
            display: 'REG 06/07/2017',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c86879a2-357b-4add-b109-231f4f076f79',
                resourceAlias: 'encounter',
              },
            ],
          },
        ],
        attributes: [
          {
            uuid: '36977295-ff8a-4bcc-a84a-9350f5e70f2e',
            display: 'Visit Status: OPD',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7/attribute/36977295-ff8a-4bcc-a84a-9350f5e70f2e',
                resourceAlias: 'attribute',
              },
            ],
          },
        ],
        voided: false,
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
            resourceAlias: 'visit',
          },
          {
            rel: 'full',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7?v=full',
            resourceAlias: 'visit',
          },
        ],
        resourceVersion: '1.9',
      },
      encounterProviders: [
        {
          uuid: 'f2973947-f66f-43a9-a247-6fb1c3508dd4',
          provider: {
            uuid: 'b7a915a4-b142-41ab-ae13-a060003885a1',
            display: 'docone docone',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/provider/b7a915a4-b142-41ab-ae13-a060003885a1',
                resourceAlias: 'provider',
              },
            ],
          },
          encounterRole: {
            uuid: 'a0b03050-c99b-11e0-9572-0800200c9a66',
            display: 'Unknown',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounterrole/a0b03050-c99b-11e0-9572-0800200c9a66',
                resourceAlias: 'encounterrole',
              },
            ],
          },
          voided: false,
          links: [
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1034432a-607b-4038-b374-0fa4133facf0/encounterprovider/f2973947-f66f-43a9-a247-6fb1c3508dd4?v=full',
              resourceAlias: 'encounterprovider',
            },
          ],
          resourceVersion: '1.9',
        },
      ],
    },
  ],
}
