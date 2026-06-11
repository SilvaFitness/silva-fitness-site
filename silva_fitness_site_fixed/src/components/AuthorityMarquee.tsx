export default function AuthorityMarquee() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden bg-luxury-dark">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="text-4xl md:text-6xl font-display uppercase text-white/10">
              Queima 1000kcal
            </span>
            <span className="text-4xl md:text-6xl font-display uppercase text-white/10">
              •
            </span>
            <span className="text-4xl md:text-6xl font-display uppercase text-white/10">
              45 Minutos
            </span>
            <span className="text-4xl md:text-6xl font-display uppercase text-white/10">
              •
            </span>
            <span className="text-4xl md:text-6xl font-display uppercase text-white/10">
              Loures Portugal
            </span>
            <span className="text-4xl md:text-6xl font-display uppercase text-white/10">
              •
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
