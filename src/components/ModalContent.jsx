export default function ModalContent({
  onClose,
  titleContent,
  subTitleContent,
  closeText = '취소',
  primaryText,
  isCancel,
  setToastOpen,
}) {
  const dangerColor = 'bg-negative border-negative'
  const primaryColor = 'bg-point border-point'

  const handleDelete = () => {
    setToastOpen?.(true)
    onClose()
  }

  return (
    <div className='w-fit p-4 shadow-modal bg-white rounded-sm text-sm fixed top-1/3 inset-x-0 m-auto z-40'>
      <p className='py-2 '>{titleContent}</p>
      {subTitleContent ? (
        <p className='pb-6 text-gray56 text-xs'>{subTitleContent}</p>
      ) : (
        <div className='py-2'></div>
      )}
      <div className='flex gap-3'>
        <button
          onClick={onClose}
          className='w-[140px] h-[40px] bg-white border border-gray96 rounded-xs cursor-pointer'
        >
          {closeText}
        </button>
        <button
          onClick={handleDelete}
          className={`w-[140px] h-[40px] rounded-xs border text-white cursor-pointer ${isCancel ? dangerColor : primaryColor}`}
        >
          {primaryText}
        </button>
      </div>
    </div>
  )
}
