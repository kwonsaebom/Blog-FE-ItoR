import LogoIcon from '@assets/icons/logo_circle.svg?react'

export default function UserInfo() {
  return (
    <>
      <section className='desktop:max-w-[688px] desktop:m-auto flex flex-col items-start'>
        <LogoIcon className='w-12 h-12 desktop:w-16 desktop:h-16 ' />
        <p className='py-3 px-2 text-2xl font-medium'>닉네임</p>
        <p className='px-2 text-sm font-light text-gray30'>한줄소개</p>
      </section>
    </>
  )
}
