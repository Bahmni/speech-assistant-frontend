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

function updateConsultationHeader() {
  const opdElements = document.getElementById('opd-tabs')
  if (opdElements) {
    if (isSaConsultationAvailable()) removeConsultationTab()
  }
}

function performDOMOperations() {
  const mutationObserver = new MutationObserver(() => {
    updateConsultationHeader()
  })
  mutationObserver.observe(document.body, {childList: true, subtree: true})
}

export {performDOMOperations}
