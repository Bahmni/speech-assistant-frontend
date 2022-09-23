import React from 'react'
import App from './app/App'
import {createRoot} from 'react-dom/client'

const mfContainerAttribute = 'mf-container'
const mfContainerValue = 'sa'
const speechAssistantApp = 'sa-app'

function renderApp() {
  const appContainer = document.getElementById(speechAssistantApp)
  const root = createRoot(appContainer)
  root.render(<App />)
}

function createDOM() {
  const divContainer = document.createElement('div')
  divContainer.setAttribute(mfContainerAttribute, mfContainerValue)
  const appDivContainer = document.createElement('div')
  appDivContainer.setAttribute('id', speechAssistantApp)

  divContainer.appendChild(appDivContainer)
  document.body.appendChild(divContainer)
}

if (
  !document.querySelector(
    `body div[${mfContainerAttribute}='${mfContainerValue}']`,
  )
) {
  createDOM()
}
renderApp()
