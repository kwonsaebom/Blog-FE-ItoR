import axiosInstance from '@/api/axiosInstance'

export const registerUser = async (userData) => {
  const res = await axiosInstance.post('/auth/register', userData)
  return res.data
}
