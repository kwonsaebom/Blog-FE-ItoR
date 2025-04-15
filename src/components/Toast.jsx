import { createPortal } from 'react-dom'

import DoneIcon from '@assets/icons/icon_done.svg?react'
import ErrorIcon from '@assets/icons/icon_error.svg?react'

export default function Toast() {
  const errorMessage = '내용을 입력해주세요'
  const doneMessage = '저장되었습니다!'

  const errorStyle = 'text-negative'
  const doneStyle = 'text-positive'

  return createPortal(
    <>
      <p className={``}>{isError ? errorMessage : doneMessage}</p>
    </>,
    document.getElementById('toast-root'),
  )
}
