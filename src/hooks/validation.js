const nicknameValid = (nickname) => {
  if (!nickname) return '* 닉네임을 입력해주세요.'
  if (nickname.length > 20) return '* 20글자 이내로 작성해주세요.'
  return ''
}

const passwordValid = (pw, pwCheck) => {
  if (!pw || !pwCheck) return ''
  if (pw !== pwCheck) return '* 비밀번호가 일치하지 않습니다.'
  return ''
}

export { nicknameValid, passwordValid }
