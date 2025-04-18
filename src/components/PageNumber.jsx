import PreIcon from '@assets/icons/icon_previous.svg?react'
import NextIcon from '@assets/icons/icon_next.svg?react'

export default function PageNumber({ page, isPre, isNext, isDisabled, onClick }) {
  const baseStyle = `w-8 h-8 flex justify-center items-center border border-neutral5 rounded-xs text-sm cursor-pointer`

  let content

  if (isPre) {
    content = <PreIcon className={`${isDisabled ? 'text-neutral5' : 'text-black'}`} />
  } else if (isNext) {
    content = <NextIcon className={`${isDisabled ? 'text-neutral5' : 'text-black'}`} />
  } else {
    content = <span>{page}</span>
  }

  return (
    <button className={baseStyle} disabled={isDisabled} onClick={onClick}>
      {content}
    </button>
  )
}
