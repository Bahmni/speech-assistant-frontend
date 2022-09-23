export const mockVisitResponseWithActiveEncounter = {
  results: [
    {
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
          uuid: 'ff71def2-e08b-4357-8d7f-5d8a3e332faa',
          display: 'Consultation 09/22/2022',
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
          obs: [
            {
              uuid: '8dd4d632-ec99-4056-b6dc-d489f1dc5f30',
              display: 'Consultation Note: keerthana',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/obs/8dd4d632-ec99-4056-b6dc-d489f1dc5f30',
                  resourceAlias: 'obs',
                },
              ],
            },
            {
              uuid: 'eb04a5ce-1c2d-4499-97e9-df5c0fbaae61',
              display: 'Consultation Note: aman',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/obs/eb04a5ce-1c2d-4499-97e9-df5c0fbaae61',
                  resourceAlias: 'obs',
                },
              ],
            },
          ],
          orders: [
            {
              uuid: 'e1a5fb85-43c9-4436-9e14-e1b18a50eefc',
              display: 'Agranulocyte Count',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/order/e1a5fb85-43c9-4436-9e14-e1b18a50eefc',
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
              uuid: '4eeea7e6-083f-4f5b-be69-a741c1949a4b',
              display: 'Super Man: Unknown',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/encounter/ff71def2-e08b-4357-8d7f-5d8a3e332faa/encounterprovider/4eeea7e6-083f-4f5b-be69-a741c1949a4b',
                  resourceAlias: 'encounterprovider',
                },
              ],
            },
          ],
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/ff71def2-e08b-4357-8d7f-5d8a3e332faa',
              resourceAlias: 'encounter',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/ff71def2-e08b-4357-8d7f-5d8a3e332faa?v=full',
              resourceAlias: 'encounter',
            },
          ],
          resourceVersion: '1.9',
        },
        {
          uuid: 'ba3cbbc1-37ba-4e0f-b328-a2b1f2edf6ac',
          display: 'Consultation 09/21/2022',
          encounterDatetime: '2022-09-21T11:50:54.000+0000',
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
          obs: [
            {
              uuid: 'cea37920-d170-4f15-a9e2-2f15853302d2',
              display: 'Consultation Note: sacsa',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/obs/cea37920-d170-4f15-a9e2-2f15853302d2',
                  resourceAlias: 'obs',
                },
              ],
            },
            {
              uuid: '8023f14a-ac18-46d8-8b34-2e4fae7a789e',
              display: 'Consultation Note: xsasas',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/obs/8023f14a-ac18-46d8-8b34-2e4fae7a789e',
                  resourceAlias: 'obs',
                },
              ],
            },
          ],
          orders: [
            {
              uuid: '9c54f2b3-cc73-42ab-8504-4ab9e9b6709b',
              display: 'Agranulocyte Count',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/order/9c54f2b3-cc73-42ab-8504-4ab9e9b6709b',
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
              uuid: 'a83d7532-e69d-4281-b451-4cc4b8525fc4',
              display: 'Super Man: Unknown',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/encounter/ba3cbbc1-37ba-4e0f-b328-a2b1f2edf6ac/encounterprovider/a83d7532-e69d-4281-b451-4cc4b8525fc4',
                  resourceAlias: 'encounterprovider',
                },
              ],
            },
          ],
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/ba3cbbc1-37ba-4e0f-b328-a2b1f2edf6ac',
              resourceAlias: 'encounter',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/ba3cbbc1-37ba-4e0f-b328-a2b1f2edf6ac?v=full',
              resourceAlias: 'encounter',
            },
          ],
          resourceVersion: '1.9',
        },
        {
          uuid: '9f1e56de-24ea-4a7b-bc68-bce6cda50d8e',
          display: 'Consultation 09/21/2022',
          encounterDatetime: '2022-09-21T09:51:34.000+0000',
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
              uuid: '7d7e02cc-722b-4217-a39b-0ed888fad159',
              display: 'Super Man: Unknown',
              links: [
                {
                  rel: 'self',
                  uri: 'http://localhost/openmrs/ws/rest/v1/encounter/9f1e56de-24ea-4a7b-bc68-bce6cda50d8e/encounterprovider/7d7e02cc-722b-4217-a39b-0ed888fad159',
                  resourceAlias: 'encounterprovider',
                },
              ],
            },
          ],
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/9f1e56de-24ea-4a7b-bc68-bce6cda50d8e',
              resourceAlias: 'encounter',
            },
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/9f1e56de-24ea-4a7b-bc68-bce6cda50d8e?v=full',
              resourceAlias: 'encounter',
            },
          ],
          resourceVersion: '1.9',
        },
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
    },
  ],
}
