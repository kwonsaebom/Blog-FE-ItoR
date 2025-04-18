import { useOutletContext } from 'react-router-dom'

import Input from '@components/Input'

import LogoIcon from '@assets/icons/logo_circle.svg?react'
import PhotoIcon from '@assets/icons/icon_add_photo.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'

export default function ModifyPage() {
  const { isEditable } = useOutletContext()
  const isKakao = false
  return (
    <>
      <div className='bg-gray96 py-3 px-4 pt-35 text-sm font-light text-gray56'>
        <div className='desktop:max-w-[688px] desktop:m-auto px-4'>
          <LogoIcon className='w-16 h-16' />
          <input
            type='text'
            placeholder='닉네임'
            disabled={!isEditable}
            className={
              'w-full mt-6 py-3 px-4 border border-gray90 rounded-sm bg-transparent placeholder:text56 text-black text-2xl font-medium'
            }
          />
          <p className='px-2 py-3 -mb-1 text-xs font-light text-gray78'>* 20글자 이내</p>
          <input
            type='text'
            placeholder='한줄소개'
            disabled={!isEditable}
            className={`w-full py-3 px-4 mb-4 border border-gray90 rounded-sm text-black ${isKakao ? 'bg-gray90 placeholder:text-gray56' : ' bg-transparent placeholder:text-gray78'}`}
          />
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
        <Input type='email' label='이메일' isKakao={isKakao} isEditable={isEditable} />
        {!isKakao && <Input type='password' label='비밀번호' isEditable={isEditable} />}
        {!isKakao && <Input type='password' label='비밀번호 확인' isEditable={isEditable} />}
        <Input type='text' label='이름' isKakao={isKakao} isEditable={isEditable} />
        <Input type='text' label='생년월일' />
      </section>
    </>
  )
}
