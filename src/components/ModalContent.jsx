export default function ModalContent({
  onClose,
  titleContent,
  subTitleContent,
  closeText = '취소',
  primaryText,
  isCancel,
}) {
  const dangerColor = 'bg-negative border-negative'
  const primaryColor = 'bg-point border-point'
  return (
    <>
      <div className='w-fit p-4 shadow-modal bg-white rounded-sm text-sm '>
        <p className='py-2 '>{titleContent}</p>
        <p className='pb-6 text-gray56 text-xs'>{subTitleContent}</p>
        <div className='flex gap-3'>
          <button
            onClick={onClose}
            className='w-[140px] h-[40px] bg-white border border-gray96 rounded-xs'
          >
            {closeText}
          </button>
          <button
            className={`w-[140px] h-[40px] rounded-xs border text-white ${isCancel ? dangerColor : primaryColor}`}
          >
            {primaryText}
          </button>
        </div>
      </div>
    </>
  )
}
