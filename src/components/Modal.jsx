import { createPortal } from 'react-dom'
import AuthForm from '@components/AuthForm'
import ModalContent from '@components/ModalContent'

export default function Modal({ isLoginPage, onClose, ...props }) {
  return createPortal(
    <>
      <div
        className='fixed inset-0 bg-[rgba(182,182,182,0.3)] backdrop-blur-[2px]'
        onClick={onClose}
      />
      {isLoginPage ? <AuthForm onClose={onClose} /> : <ModalContent onClose={onClose} {...props} />}
    </>,
    document.getElementById('modal-root'),
  )
}
