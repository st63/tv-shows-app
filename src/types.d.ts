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

type TvShowInitialType = {
  id: number
  image: CoverType
  genres: string[]
  name: string
  rating: RatingType
  weight: number
  network: CountryType
}

type TvShowFormattedType = {
  id: number
  cover: string
  genres: string[]
  name: string
  rating: number
  duration: number
  country: string
}
