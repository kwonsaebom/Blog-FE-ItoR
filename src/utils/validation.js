// utils/validation.js

const emailValid = (email) => {
  if (!email) return '* 이메일을 입력해주세요.'
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (!emailRegex.test(email)) return '* 이메일 형식이 적합하지 않습니다.'
  return ''
}

const nameValid = (name) => {
  if (!name) return '* 이름을 입력해주세요.'
  if (name.length > 10) return '* 이름은 최대 10글자 입니다.'
  return ''
}

const birthValid = (birth) => {
  if (!birth) return '* 생일을 입력해주세요.'
  return ''
}

const nicknameValid = (nickname) => {
  if (!nickname) return '* 닉네임을 입력해주세요.'
  if (nickname.length > 20 || nickname.length < 3)
    return '* 닉네임은 최소 3자 이상, 최대 20자 이하여야 합니다.'

  const nicknameRegex = /^[a-zA-Z0-9]+$/
  if (!nicknameRegex.test(nickname)) return '* 닉네임은 영문과 숫자만 사용할 수 있습니다.'

  return ''
}

const passwordValid = (pw) => {
  if (!pw) return '* 비밀번호를 입력해주세요.'
  if (pw.length < 8) return '* 8자 이상 입력해주세요.'
  if (!/[A-Z]/.test(pw) || !/\d/.test(pw)) return '* 영문 대문자와 숫자를 포함해주세요.'
  return ''
}

const passwordCheckValid = (pw, pwCheck) => {
  if (!pwCheck) return '* 비밀번호 확인을 입력해주세요.'
  if (pw !== pwCheck) return '* 비밀번호가 일치하지 않습니다.'
  return ''
}

const introValid = (intro) => {
  if (!intro) return '* 한 줄 소개를 입력해주세요.'
  return ''
}

export {
  emailValid,
  birthValid,
  nameValid,
  nicknameValid,
  passwordValid,
  passwordCheckValid,
  introValid,
}
