import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    const originalRequest = error.config
    const isLoginRequest = originalRequest?.url?.includes('/auth/login')

    if (error.response?.status === 401 && !isLoginRequest) {
      alert('세션이 만료되었습니다. 다시 로그인 해주세요.')
      window.location.href = '/'
    }

    return Promise.reject(error)
  },
)
export default axiosInstance
