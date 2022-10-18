# speech-assistant-frontend

## Overview

Bahmni voice assistant UI

---

### Built With

* [React](https://reactjs.org/) ([TypeScript](https://www.typescriptlang.org)) - Front-end JS library
* [Jest](https://jestjs.io/) - JS testing framework
* [React Testing Library](https://testing-library.com/) - JS testing library for React components
* [yarn](https://yarnpkg.com/) - Yarn package manager
* [webpack](https://webpack.js.org/) - JS module bundler
* [ESLint](https://eslint.org/) - JS linter
* [Prettier](https://prettier.io/) - Code formatter
* [swc](https://swc.rs/docs/getting-started) - JS compiler
* [Github Actions](https://travis-ci.org/) - CI service

## Installation
---

### Prerequisites

* [Node](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Git](https://git-scm.com/downloads)

### Setup

1. Clone the [speech-assistant-frontend](https://github.com/Bahmni/speech-assistant-frontend) repo.
```
git clone https://github.com/Bahmni/speech-assistant-frontend
```

2. Install dependencies in the root directory of the repo.
```
yarn install
```
3. To start the application
```
yarn serve
```

4. To build the application
```
yarn build
```

5. To test the application
```
yarn test
```

### Note:

 * By default speech assistant app will be enabled while building the app
 * To disable the speech assistant app at build time, trigger the workflow with false value of Load SA App

   <img src="public/images/manual_workflow_trigger.png" width="250">