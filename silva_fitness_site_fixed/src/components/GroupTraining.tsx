import { GOOGLE_FORMS_URL } from '#/lib/constants'
import { ArrowRight } from 'lucide-react'

export default function GroupTraining() {
  return (
    <section id="grupo" className="py-32 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center reveal">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
            Boxe55
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80"
                alt="Treino em Grupo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="space-y-6 mb-8">
              <h3 className="text-3xl md:text-4xl font-display font-semibold uppercase tracking-tight">
                Venha treinar em grupo e supere os seus limites
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Boxe55: Ensinamos Boxe, melhoramos o teu condicionamento físico
                e energia em aulas de grupo de 55 minutos com interação,
                diversão e muita energia.
              </p>
            </div>
            <div className="space-y-8 mb-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">
                    Energia Coletiva
                  </h4>
                  <p className="text-white/50">
                    Treine com pessoas que partilham os mesmos objetivos e
                    alimentam a sua motivação.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">
                    Treino Dinâmico
                  </h4>
                  <p className="text-white/50">
                    Sessões variadas e desafiantes, projetadas para que cada um
                    evolua ao seu ritmo.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">
                    Comunidade
                  </h4>
                  <p className="text-white/50">
                    Faça parte de uma equipa onde cada conquista é celebrada em
                    grupo.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-white font-bold uppercase underline tracking-widest group"
            >
              Marcar o primeiro treino{' '}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
