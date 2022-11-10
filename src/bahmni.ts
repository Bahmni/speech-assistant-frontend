function removeConsultationTab() {
  const consultationHeader = document.getElementsByClassName(
    'header-tabs consultation-tabs',
  )[0]
  if (consultationHeader) {
    const tabs = consultationHeader.getElementsByTagName('li')
    for (const tab of tabs) {
      if (tab.innerText.trim() === 'Consultation') {
        consultationHeader.removeChild(tab)
      }
    }
  }
}

function isSaConsultationAvailable() {
  return document.getElementById('sa-consultation')
}

function performDOMOperations() {
  const mutationObserver = new MutationObserver(mutations => {
    if (isSaConsultationAvailable()) {
      //TODO come back later to see if one mutation loop can be avoided
      if (isConsultationScreen(mutations)) {
        removeConsultationTab()
        dispatchSaveConsultationEvent(mutations)
      }
    }
  })
  mutationObserver.observe(document.body, {childList: true, subtree: true})
}

const isConsultationScreen = mutations => {
  for (const mutation of mutations) {
    for (const addedNode of mutation.addedNodes) {
      if (verifyNodeClassName(addedNode, 'consultation-content')) {
        if (addedNode.innerHTML) {
          return true
        }
      }
    }
  }
}

const dispatchSaveConsultationEvent = mutations => {
  for (const mutation of mutations) {
    for (const addedNode of mutation.addedNodes) {
      if (verifyNodeClassName(addedNode, 'success-message-container')) {
        if (addedNode.innerText.trim() === 'Saved') {
          document.dispatchEvent(new CustomEvent('click:saveConsultationNotes'))
          return true
        }
      }
    }
  }
}

const verifyNodeClassName = (node, selectedClassName) => {
  if (node.classList) {
    for (const className of node.classList) {
      if (className === selectedClassName) {
        return true
      }
    }
  }
  return false
}

export {performDOMOperations}
