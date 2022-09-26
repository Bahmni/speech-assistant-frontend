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

function isSaConsultationButtonAvailable() {
  return document.getElementById('consultationButton')
}

function updateConsultationHeader() {
  const opdElements = document.getElementById('opd-tabs')
  if (opdElements) {
    if (isSaConsultationButtonAvailable) removeConsultationTab()
  }
}

function performDOMOperations() {
  window.addEventListener('hashchange', () => {
    updateConsultationHeader()
  })
}

export {performDOMOperations}
