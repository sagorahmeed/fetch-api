import React, { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
    const [showModal, setShowModal] = useState(false) 
  return (
    <div>
        <Modal/>
    </div>
  )
}

export default App