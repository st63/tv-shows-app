type CoverType = {
  medium?: string
  original: string
}

type RatingType = {
  average: number | null
}

type CountryType = {
  country: {
    name: string
  }
}

export type TvShowInitialType = {
  id: number
  image: CoverType
  genres: string[]
  name: string
  rating: RatingType
  weight: number
  network: CountryType
}

export type TvShowFormattedType = {
  id: number
  cover: string
  genres: string[]
  name: string
  rating: number
  duration: number
  country: string
}
