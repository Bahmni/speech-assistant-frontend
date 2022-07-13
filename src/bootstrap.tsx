import React from 'react'
import {render} from 'react-dom'
import App from './app/App'

//TODO make the container configurable mf-container

function getSAMfContainer(bodyContainer) {
  return bodyContainer.querySelector("div[mf-container='sa']")
}

function renderApp() {
  const mfContainer = getSAMfContainer(bodyContainer)
  render(<App />, mfContainer)
}

const bodyContainer = document.getElementsByTagName('body')[0]
if (!getSAMfContainer(bodyContainer)) {
  const divContainer = document.createElement('div')
  divContainer.setAttribute('mf-container', 'sa')
  bodyContainer.appendChild(divContainer)
}
renderApp()
