import { defineStore } from 'pinia'
import type { IHomepage } from '@/types/home'

export const useHomepageStore = defineStore('homepage', {
  state: () => ({
    data: null as IHomepage | null,
    loading: false as boolean
  }),
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async fetchHomepage(strapi: any) {
      try {
        this.loading = true
        const res = await strapi.findOne('homepage', {
          populate: {
            hero_image: '*',
            features: '*',
            hotels_logos: '*'
          }
        })
        this.data = res.data ? (res.data.attributes ?? res.data) : res
      } finally {
        this.loading = false
      }
    }
  }
})
