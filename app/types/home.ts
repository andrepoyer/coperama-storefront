export interface IFeature {
  id: number | string
  title: string
  description: string
  icon?: string
}

export interface IHotelLogo {
  id: number | string
  name: string
  logo: { url: string }
}

export interface IHomepage {
  id?: number | string
  hero_title?: string
  hero_subtitle?: string
  hero_image?: { url: string }
  features?: IFeature[]
  hotels_logos?: IHotelLogo[]
  cta_title?: string
  cta_subtitle?: string
  cta_button_label?: string
}
