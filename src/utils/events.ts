export const CONSULTATION_BUTTON_CLICK_EVENT = 'consultationButton:click'
export const CLOSE_CONSULTATION_PAD_CLICK_EVENT = 'closeConsultationPad:click'

export function publish(eventName, data?) {
  document.dispatchEvent(new CustomEvent(eventName, data))
}

export function subscribe(eventName, listener) {
  document.addEventListener(eventName, listener)
}

export function unsubscribe(eventName, listener?) {
  document.removeEventListener(eventName, listener)
}
