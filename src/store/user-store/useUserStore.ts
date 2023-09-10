import { create } from 'zustand'

type StatusType = 'loading' | 'completed'

type UserType = {
  email: string | null,
  type: string | null,
  token: string | null
}

type State = {
  user: UserType
  status: StatusType
}

type Actions = {
  setStatus: (status: StatusType) => void
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
  setStatus: (status) => set(() => ({ status })),
  addUser: (user: UserType) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: { email: null, type: null, token: null } })),
}))