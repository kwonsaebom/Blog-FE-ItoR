import PhotoIcon from '@assets/icons/icon_add_photo.svg?react'

export default function PostWritePage() {
  return (
    <div className='flex flex-col gap-5 desktop:max-w-[688px] m-auto'>
      <section className='py-3 flex justify-center items-center gap-1'>
        <PhotoIcon />
        <span className='text-sm text-gray56'>사진 추가하기</span>
      </section>
      <input
        placeholder='제목'
        className='py-10 px-4 text-2xl font-medium placeholder:text-gray56 border-b border-gray96 focus:outline-0'
      />
      <textarea
        placeholder='어떠한 것을 깨달았나요?'
        className='h-100 py-3 px-4 text-sm font-light text-gray30 placeholder:text-gray56 resize-none focus:outline-0'
      />
    </div>
  )
}
