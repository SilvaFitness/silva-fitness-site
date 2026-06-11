import { GOOGLE_FORMS_URL } from '#/lib/constants'

export default function Scheduling() {
  return (
    <section id="agendamento" className="py-32 bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass reveal py-25 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
            Marque o seu PT45
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            PT45: Ensinamos Boxe, melhoramos o teu condicionamento físico e
            energia em 45 minutos com acompanhamento personalizado e segurança
            para atingir objetivos reais.
          </p>
          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/90"
          >
            marcar o meu PT45
          </a>
        </div>
      </div>
    </section>
  )
}
