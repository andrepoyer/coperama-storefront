import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    isAuthenticated: false
  }),

  getters: {
    fullName: (state) => state.name.toUpperCase()
  },

  actions: {
    setUser(name: string, email: string) {
      this.name = name
      this.email = email
      this.isAuthenticated = true
    },

    logout() {
      this.name = ''
      this.email = ''
      this.isAuthenticated = false
    }
  }
})
