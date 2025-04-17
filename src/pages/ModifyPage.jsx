import Input from '@components/Input'

import LogoIcon from '@assets/icons/logo_circle.svg?react'
import PhotoIcon from '@assets/icons/icon_add_photo.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'

export default function ModifyPage() {
  const isKakao = false
  return (
    <>
      <div className='bg-gray96 py-3 px-4 pt-45 text-sm font-light text-gray56'>
        <div className='desktop:max-w-[688px] desktop:m-auto'>
          <LogoIcon className='w-[90px] h-[90px]' />
          <input
            type='text'
            placeholder='닉네임'
            className={
              'w-full mt-6 py-3 px-4 border border-gray90 rounded-sm bg-transparent placeholder:text56 text-2xl font-medium'
            }
          />
          <p className='px-2 py-3 -mb-2 text-xs font-light text-gray78'>* 20글자 이내</p>
          <Input type='text' label='한 줄 소개' />
        </div>
      </div>
      <section className='py-3 px-4 flex flex-col text-sm font-light text-gray56 desktop:max-w-[688px] desktop:m-auto'>
        {isKakao && (
          <label className='flex flex-col gap-3 my-3'>
            소셜 로그인
            <div className='py-3 px-4 bg-gray90 border border-gray90 rounded-sm text-gray56 flex gap-2 items-center'>
              <KakaoIcon />
              <span>카카오 로그인</span>
            </div>
          </label>
        )}
        <Input type='email' label='이메일' isKakao={isKakao} />
        {!isKakao && <Input type='password' label='비밀번호' />}
        {!isKakao && <Input type='password' label='비밀번호 확인' />}
        <Input type='text' label='이름' isKakao={isKakao} />
        <Input type='text' label='생년월일' />
      </section>
    </>
  )
}
