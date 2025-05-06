import axiosInstance from '@/api/axiosInstance'

export const registerUser = async (userData) => {
  const res = await axiosInstance.post('/auth/register', userData)
  return res.data
}

export const registerKakaoUser = async (kakaoUserData) => {
  const res = await axiosInstance.post('/auth/register-oauth', kakaoUserData)
  return res.data
}

export const loginUser = async (userData) => {
  const res = await axiosInstance.post('/auth/login', userData)
  return res.data.data
}

export const getUser = async () => {
  const res = await axiosInstance.get('/users/me')
  return res.data.data
}

export const getKakaoUser = async (code) => {
  const res = await axiosInstance.get('/auth/kakao/redirect', {
    params: { code },
  })
  return res.data.data
}

export const getPostList = async (size, page) => {
  const res = await axiosInstance.get('/posts/all', {
    params: { size, page },
  })

  return res.data.data
}
