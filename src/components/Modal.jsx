import { createPortal } from 'react-dom'
import { useState } from 'react'

import ModalContent from '@components/ModalContent'

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>모달 열기</button>
      {showModal &&
        createPortal(
          <ModalContent {...props} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  )
}
