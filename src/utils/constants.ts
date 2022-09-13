export const streamingURL =
  process.env.SPEECH_ASSISTANT_PROXY_URL ||
  'http://' + location.hostname + (location.port ? ':' + location.port : '')
export const language = 'en'
