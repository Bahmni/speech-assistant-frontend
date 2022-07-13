import React from 'react'
import {render} from 'react-dom'
import App from './App'

//TODO make the container configurable mf-container

function getSttMfContainer(bodyContainer) {
  return bodyContainer.querySelector("div[mf-container='stt']")
}

function renderApp() {
  const mfContainer = getSttMfContainer(bodyContainer)
  render(<App />, mfContainer)
}

const bodyContainer = document.getElementsByTagName('body')[0]
if (!getSttMfContainer(bodyContainer)) {
  const divContainer = document.createElement('div')
  divContainer.setAttribute('mf-container', 'stt')
  bodyContainer.appendChild(divContainer)
}
renderApp()
