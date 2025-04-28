import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { registerUser, registerKakaoUser } from '@/api/apiRequest'
import Input from '@components/Input'
import Modal from '@components/Modal'
import useModal from '@hooks/useModal'

import LogoIcon from '@assets/icons/logo_circle.svg?react'
import PhotoIcon from '@assets/icons/icon_add_photo.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'

import {
  emailValid,
  nameValid,
  nicknameValid,
  passwordValid,
  passwordCheckValid,
  birthValid,
  introValid,
} from '@/utils/validation'

export default function SignUpForm() {
  const { isOpen, open, close } = useModal()
  const pathname = useLocation().pathname
  const isKakao = pathname.includes('kakao')

  const wrapperStyle = 'desktop:max-w-[688px] desktop:m-auto'
  const inputWrapperStyle = 'py-3 px-4 flex flex-col text-sm font-light text-gray56 ' + wrapperStyle

  const navigate = useNavigate()

  const handleSignUp = () => {
    close()
    navigate('/')
  }

  // 일반 회원가입
  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => open(),
    onError: (error) => {
      alert(error?.response?.data?.message || '회원가입에 실패했습니다.')
    },
  })

  // 카카오 회원가입
  const { mutate: kakaoMutate } = useMutation({
    mutationFn: registerKakaoUser,
    onSuccess: () => open(),
    onError: (error) => {
      console.error('카카오 회원가입 에러:', error.response?.data || error.message)
      alert(error?.response?.data?.message || '카카오 회원가입에 실패했습니다.')
    },
  })

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    birthDate: '',
    nickname: '',
    introduction: '',
  })

  const location = useLocation()
  const kakaoUserData = location.state?.kakaoUserData

  useEffect(() => {
    if (isKakao && kakaoUserData?.nickname) {
      setForm((prev) => ({ ...prev, nickname: kakaoUserData.nickname }))
    }
  }, [isKakao, kakaoUserData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const errors = {
    email: emailValid(form.email),
    name: nameValid(form.name),
    birthDate: birthValid(form.birthDate),
    introduction: introValid(form.introduction),
    ...(!isKakao && {
      nickname: nicknameValid(form.nickname),
      password: passwordValid(form.password),
      passwordCheck: passwordCheckValid(form.password, form.passwordCheck),
    }),
  }

  const ProfilePhotoSection = () => (
    <div className='py-5 flex flex-col gap-4'>
      <span>프로필 사진</span>
      <LogoIcon className='w-[90px] h-[90px]' />
      <button className='w-fit px-2 py-1 border border-gray90 rounded-xs text-xs font-normal cursor-pointer'>
        <PhotoIcon className='inline-block' />
        <span className='ml-1'>프로필 사진 추가</span>
      </button>
    </div>
  )

  const KakaoInfo = () =>
    isKakao && (
      <label className='flex flex-col gap-3 my-3'>
        소셜 로그인
        <div className='py-3 px-4 bg-gray90 border border-gray90 rounded-sm text-gray56 flex gap-2 items-center'>
          <KakaoIcon />
          <span>카카오 로그인</span>
        </div>
      </label>
    )

  const inputs = [
    { name: 'email', type: 'email', label: '이메일' },
    isKakao && { name: 'name', type: 'text', label: '이름' },
    !isKakao && { name: 'password', type: 'password', label: '비밀번호' },
    !isKakao && { name: 'passwordCheck', type: 'password', label: '비밀번호 확인' },
    !isKakao && { name: 'name', type: 'text', label: '이름' },
    { name: 'birthDate', type: 'text', label: '생년월일' },
    { name: 'nickname', type: 'text', label: '닉네임' },
    { name: 'introduction', type: 'text', label: '한 줄 소개' },
  ].filter(Boolean)

  const handleSubmit = async () => {
    const hasError = Object.values(errors).some((errorMsg) => errorMsg !== '')

    if (hasError) {
      alert('입력한 정보를 다시 확인해주세요.')
      return
    }

    if (isKakao) {
      const kakaoRequestBody = {
        email: form.email,
        nickname: form.name, // 수정 필요 ➡️ 이름 138, 141 번째 줄 바꾸기
        profilePicture: kakaoUserData?.picture || 'https://example.com/profile.jpg',
        birthDate: form.birthDate,
        name: kakaoUserData?.nickname, // 수정 필요
        introduction: form.introduction,
      }

      kakaoMutate(kakaoRequestBody) // ✅ 카카오 회원가입 API 호출
    } else {
      const requestBody = {
        email: form.email,
        nickname: form.nickname,
        password: form.password,
        profilePicture: 'https://example.com/profile.jpg',
        birthDate: form.birthDate,
        name: form.name,
        introduction: form.introduction,
      }

      mutate(requestBody) // ✅ 일반 회원가입 API 호출
    }
  }

  return (
    <>
      <header className='bg-gray96 h-[125px] flex items-center desktop:h-[148px]'>
        <div className={wrapperStyle}>
          <h1 className='py-1.5 px-4 text-2xl font-medium min-w-[782px] m-auto'>회원가입</h1>
          <p className='py-1.5 px-4 text-gray-30 text-sm font-light'>
            가입을 위해 회원님의 정보를 입력해주세요.
          </p>
        </div>
      </header>

      <section className={inputWrapperStyle}>
        <ProfilePhotoSection />
        <KakaoInfo />

        {inputs.map(({ name, type, label, isEditable }, idx) => (
          <Input
            key={idx}
            name={name}
            type={type}
            label={label}
            value={form[name]}
            onChange={handleChange}
            error={errors[name]}
            isEditable={isEditable}
            isKakao={isKakao && name === 'nickname'}
          />
        ))}

        <button
          onClick={handleSubmit}
          className='w-full py-2 my-5 border border-point rounded-[25px] text-point font-normal cursor-pointer'
        >
          회원가입 완료
        </button>

        {isOpen && (
          <Modal
            titleContent='회원가입이 완료되었습니다!'
            subTitleContent='이제 로그인하여 서비스를 이용해보세요.'
            primaryText='확인'
            isCancel={false}
            isLoginPage={false}
            onClose={handleSignUp}
          />
        )}
      </section>
    </>
  )
}
