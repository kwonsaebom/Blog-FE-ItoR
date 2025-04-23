import { createPortal } from 'react-dom'

import DoneIcon from '@assets/icons/icon_done.svg?react'
import ErrorIcon from '@assets/icons/icon_error.svg?react'

export default function Toast({ isError, children }) {
  const errorStyle = 'text-negative'
  const doneStyle = 'text-positive'
  const errorBorder = 'border-negative'
  const doneBorder = 'border-positive'

  return createPortal(
    <div
      className={`w-fit py-2 px-3 flex items-center gap-1 border rounded-3xl fixed text-sm transition-opacity duration-500 ease-in-out ${isError ? errorBorder : doneBorder} absolute top-22 inset-x-0 m-auto`}
    >
      {isError ? <ErrorIcon /> : <DoneIcon />}
      <p className={isError ? errorStyle : doneStyle}>{children}</p>
    </div>,
    document.getElementById('toast-root'),
  )
}
