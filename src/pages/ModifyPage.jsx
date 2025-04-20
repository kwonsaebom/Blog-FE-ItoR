import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

import Input from '@components/Input'

import LogoIcon from '@assets/icons/logo_circle.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'

import { nicknameValid, passwordValid } from '@hooks/validation'

export default function ModifyPage() {
  const { isEditable } = useOutletContext()
  const isKakao = false

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const nicknameError = isEditable ? nicknameValid(nickname) : ''
  const passwordError = isEditable ? passwordValid(password, passwordCheck) : ''

  return (
    <>
      <div className='bg-gray96 py-3 px-4 pt-35 text-sm font-light text-gray56'>
        <div className='desktop:max-w-[688px] desktop:m-auto desktop:px-4'>
          <LogoIcon className='w-16 h-16' />

          <Input
            type='text'
            label='닉네임'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            isEditable={isEditable}
            error={nicknameError}
          />

          <Input type='text' label='한줄소개' isEditable={isEditable} isKakao={isKakao} />
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

        <Input
          type='email'
          label='이메일'
          isKakao={isKakao}
          isEditable={isEditable}
          isDisabled={true}
        />

        {!isKakao && (
          <>
            <Input
              type='password'
              label='비밀번호'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isEditable={isEditable}
            />
            <Input
              type='password'
              label='비밀번호 확인'
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              isEditable={isEditable}
              error={passwordError}
            />
          </>
        )}

        <Input
          type='text'
          label='이름'
          isKakao={isKakao}
          isEditable={isEditable}
          isDisabled={true}
        />

        <Input type='text' label='생년월일' isEditable={isEditable} />
      </section>
    </>
  )
}
