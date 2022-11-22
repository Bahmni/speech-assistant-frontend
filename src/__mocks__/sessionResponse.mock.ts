export const mockSessionResponse = {
  sessionId: '2A21896ADEFEF81893A989CE9FF875DF',
  authenticated: true,
  user: {
    uuid: 'c1c21e11-3f10-11e4-adec-0800271c1b75',
    display: 'superman',
    username: 'superman',
    systemId: 'superman',
    userProperties: {
      defaultLocale: 'en',
      favouriteObsTemplates: '',
      recentlyViewedPatients:
        '[{"uuid":"bf379289-62b7-47b3-ab7b-5186cb6fc46c","name":"MARIAM MSAFIRI","identifier":"SEM203001"},{"uuid":"dc9444c6-ad55-4200-b6e9-407e025eb948","name":"Test Radiology","identifier":"GAN203010"},{"uuid":"3ae1ee52-e9b2-4934-876d-30711c0e3e2f","name":"Test Hypertension","identifier":"GAN203009"},{"uuid":"f5a00c0c-6230-4a13-b794-18ee0c137aa9","name":"Test TB","identifier":"GAN203008"},{"uuid":"0b573f9a-d75d-47fe-a655-043dc2f6b4fa","name":"Test Diabetes","identifier":"GAN203007"},{"uuid":"1dfff08c-141b-46df-b6a2-6b69080a5000","name":"Test Hyperthyroidism","identifier":"GAN203006"},{"uuid":"9a133946-e529-4d2d-a376-ce0045f0a685","name":"Sample Two","identifier":"GAN203005"},{"uuid":"4177d31e-b495-423d-b4ef-a454cc95c0d1","name":"SAmple one","identifier":"GAN203004"},{"uuid":"0c5a49d1-b5c2-4456-aacc-fe08d4a6ea09","name":"Test Hyperthyroidism","identifier":"GAN200031"},{"uuid":"7e8b881a-e2b9-4e61-9ae6-859c13212c58","name":"Test Patient","identifier":"GAN200062"}]',
      loginAttempts: '0',
      favouriteWards: 'General Ward###Labour Ward',
    },
    person: {
      uuid: 'c1bc22a5-3f10-11e4-adec-0800271c1b75',
      display: 'Super Man',
    },
    privileges: [
      {
        uuid: '697875ea-a662-11e6-91e9-0800270d80ce',
        display: 'SuperAdmin',
        name: 'SuperAdmin',
      },
      {
        uuid: '8d94f280-c2cc-11de-8d13-0010c6dffd0f',
        display: 'Provider',
        name: 'Provider',
      },
    ],
    links: [
      {
        rel: 'self',
        uri: 'http://localhost/openmrs/ws/rest/v1/user/c1c21e11-3f10-11e4-adec-0800271c1b75',
        resourceAlias: 'user',
      },
      {
        rel: 'default',
        uri: 'http://localhost/openmrs/ws/rest/v1/user/c1c21e11-3f10-11e4-adec-0800271c1b75?v=default',
        resourceAlias: 'user',
      },
    ],
  },
  locale: 'en',
  allowedLocales: ['en', 'es', 'fr', 'it', 'pt_BR'],
  sessionLocation: null,
  currentProvider: {
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
}
