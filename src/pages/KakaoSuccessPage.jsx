import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getKakaoUser } from '@api/apiRequest'

export default function KakaoSuccessPage() {
  const navigate = useNavigate()

  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  const {
    data: kakaoUserData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['kakaoUser', code],
    queryFn: async () => {
      const kakaoUserData = await getKakaoUser(code)
      return kakaoUserData
    },
    enabled: !!code,
  })

  useEffect(() => {
    if (kakaoUserData) {
      const isSignedUp = !kakaoUserData.responseMessage.includes('회원가입')
      if (isSignedUp) {
        navigate('/')
      } else {
        navigate('/signup/kakao', { state: { kakaoUserData } })
      }
    }
  }, [kakaoUserData, navigate])
  return <></>
}
