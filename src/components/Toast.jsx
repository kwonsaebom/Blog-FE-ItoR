import { createPortal } from 'react-dom'

import DoneIcon from '@assets/icons/icon_done.svg?react'
import ErrorIcon from '@assets/icons/icon_error.svg?react'

export default function Toast({ isError }) {
  const errorMessage = '내용을 입력해주세요'
  const doneMessage = '저장되었습니다!'

  const errorStyle = 'text-negative'
  const doneStyle = 'text-positive'
  const errorBorder = 'border-negative'
  const doneBorder = 'border-positive'

  return createPortal(
    <div
      className={`w-fit py-2 px-3 flex gap-1 border rounded-3xl transition-opacity duration-500 ease-in-out ${isError ? errorBorder : doneBorder} absolute top-22 inset-x-0 m-auto`}
    >
      {isError ? <ErrorIcon /> : <DoneIcon />}
      <p className={isError ? errorStyle : doneStyle}>{isError ? errorMessage : doneMessage}</p>
    </div>,
    document.getElementById('toast-root'),
  )
}
