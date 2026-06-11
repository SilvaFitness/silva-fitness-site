import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2,
      })

      gsap.from('.hero-sub', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'back.out(1.7)',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
          alt="Personal Training Background"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="overflow-visible mb-4 pt-4">
          <h1 className="hero-title font-display text-6xl md:text-9xl uppercase leading-[0.95] tracking-tighter">
            Tu és a peça <br /> <span className="text-white/30">que falta</span>
          </h1>
        </div>

        <p className="hero-sub text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Ensinamos Boxe, melhoramos o teu condicionamento físico e energia.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#agendamento"
            className="group relative bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Começar Agora{' '}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>
          <div className="flex items-center gap-2 text-white/40 text-sm uppercase tracking-widest">
            <CheckCircle2 size={16} />
            <span>Vagas Limitadas</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  )
}
