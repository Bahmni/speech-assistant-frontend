import React from 'react'
import {ConsultationButton} from './components/consultation-button/consultation-button'
import SocketConnectionButton from './socket-connection-button'

const App = () => {
  return (
    <div>
      <ConsultationButton />
      <SocketConnectionButton />
    </div>
  )
}
export default App
