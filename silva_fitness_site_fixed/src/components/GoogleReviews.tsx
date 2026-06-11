import { useMemo } from 'react'

import { GOOGLE_FORMS_URL } from '#/lib/constants'
import { ArrowRight } from 'lucide-react'

type Review = {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url: string
}

interface GoogleReviewsProps {
  reviews: Review[]
  error?: string
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-3 w-[320px] md:w-[380px] shrink-0 select-none flex-1">
      <div className="flex items-center gap-3">
        <img
          src={review.profile_photo_url}
          alt={review.author_name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-sm truncate">{review.author_name}</p>
        </div>
        <a
          href="https://www.google.com/maps/place/SilvaFitness.pt/@38.8319001,-9.1769696,17z/data=!3m1!4b1!4m6!3m5!1s0xd192dc5077899f1:0x202be708e128dfec!8m2!3d38.8319001!4d-9.1769696!16s%2Fg%2F11pyc6nxqp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white/20 hover:text-white/50 transition-colors shrink-0 text-sm no-underline before:content-[''] before:absolute before:-inset-2"
          aria-label="Ver no Google Maps"
        >
          ↗
        </a>
      </div>
      <div className="text-yellow-400 text-sm">{'★'.repeat(review.rating)}</div>
      <p className="text-white/70 text-sm leading-relaxed line-clamp-4 flex-1">
        {review.text}
      </p>
    </div>
  )
}

function ReviewRow({
  reviews,
  reverse = false,
  offset = false,
}: {
  reviews: Review[]
  reverse?: boolean
  offset?: boolean
}) {
  const repeated = useMemo(() => {
    // Duplicate 6 times to ensure seamless infinite scroll
    return Array.from({ length: 6 }, () => reviews).flat()
  }, [reviews])

  return (
    <div
      className={`flex w-max ${reverse ? 'animate-marquee-reverse-slow' : 'animate-marquee-slow'}`}
      style={offset ? { paddingLeft: '6rem' } : undefined}
    >
      {repeated.map((review, i) => (
        <div
          key={`${review.author_name}-${i}`}
          className="mr-6 flex items-stretch"
        >
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  )
}

export default function GoogleReviews({ reviews, error }: GoogleReviewsProps) {
  if (error) return null

  return (
    <section id="resultados" className="py-32 overflow-hidden">
      {/* Heading — centered with side padding */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight">
            Resultados <span className="text-white/30">Reais</span>
          </h2>
        </div>
      </div>

      {/* Carousel — full width, no side padding */}
      <div className="reveal py-8 flex flex-col gap-6">
        {reviews.length ? (
          <div className="flex flex-col gap-6 overflow-hidden group">
            {/* Top row — slides left */}
            <ReviewRow reviews={reviews} />
            {/* Bottom row — slides right, offset for pyramid effect */}
            <ReviewRow reviews={reviews} reverse offset />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <div className="text-2xl md:text-3xl mb-4">★★★★★</div>
              <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight mb-6">
                Veja as nossas avaliações no Google
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Conheça as experiências reais dos nossos alunos e descubra
                porque a Silva Fitness é uma referência em Loures.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CTA — centered with side padding */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-10">
        <a
          href={GOOGLE_FORMS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          Quero marcar o meu primeiro treino!
        </a>
      </div>
    </section>
  )
}
