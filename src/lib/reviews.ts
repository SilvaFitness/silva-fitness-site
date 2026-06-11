import { createServerFn } from '@tanstack/react-start'
import { FALLBACK_REVIEWS } from '#/lib/constants'

export type Review = {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url: string
}

export type GoogleReviewsResponse = {
  rating: number
  user_ratings_total: number
  reviews: Review[]
  error?: string
}

let cached: { data: GoogleReviewsResponse; ts: number } | null = null
const TTL = 86_400_000
const BASE = 'https://places.googleapis.com/v1/places'

export const fetchGoogleReviews = createServerFn({
  method: 'GET',
}).handler(async (): Promise<GoogleReviewsResponse> => {
  const now = Date.now()
  if (cached && now - cached.ts < TTL) return cached.data

  const key = process.env.GOOGLE_API_KEY
  if (!key) {
    console.error('[reviews] No API key configured')
    return FALLBACK_REVIEWS
  }

  const auth = { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key }

  try {
    const searchRes = await fetch(`${BASE}:searchText`, {
      method: 'POST',
      headers: { ...auth, 'X-Goog-FieldMask': 'places.id' },
      body: JSON.stringify({ textQuery: 'SilvaFitness Loures' }),
    }).then((r) => r.json())

    const placeId = searchRes.places?.[0]?.id as string | undefined
    if (!placeId) {
      console.error('[reviews] Place not found in search results')
      return FALLBACK_REVIEWS
    }

    const detailRes = await fetch(`${BASE}/${placeId}`, {
      headers: {
        ...auth,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
    }).then((r) => r.json())

    const reviews: Review[] = (detailRes.reviews ?? []).map(
      (r: RawReview): Review => ({
        author_name: r.authorAttribution?.displayName ?? '',
        rating: r.rating ?? 0,
        text: r.text?.text ?? '',
        relative_time_description: r.relativePublishTimeDescription ?? '',
        profile_photo_url: r.authorAttribution?.photoUri ?? '',
      }),
    )

    const data: GoogleReviewsResponse = {
      rating: detailRes.rating ?? 0,
      user_ratings_total: detailRes.userRatingCount ?? 0,
      reviews,
    }

    cached = { data, ts: now }
    return data
  } catch (err) {
    console.error('[reviews] error:', err)
    if (cached) return cached.data
    return FALLBACK_REVIEWS
  }
})

type RawReview = {
  rating?: number
  text?: { text?: string }
  relativePublishTimeDescription?: string
  authorAttribution?: { displayName?: string; photoUri?: string }
}
