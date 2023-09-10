import { create } from 'zustand'

type UserType = {
  email: string | null,
  type: string | null,
  token: string | null
}

type State = {
  user: UserType
  status: 'loading' | 'completed'
}

type Actions = {
  addUser: (user: UserType) => void
  clearUser: () => void
}

export const useUserStore = create<State & Actions>((set) => ({
  user: {
    email: null,
    type: null,
    token: null
  },
  status: 'loading',
  addUser: (user: UserType) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: { email: null, type: null, token: null } })),
}))