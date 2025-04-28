import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isLogined: false,
      user: null,
      login: (userData) => set({ isLogined: true, user: userData }),
      logout: () => set({ isLogined: false, user: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
)
