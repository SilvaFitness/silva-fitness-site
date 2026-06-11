import { GOOGLE_FORMS_URL } from '#/lib/constants'
import { ArrowRight } from 'lucide-react'

export default function ExperimentalTraining() {
  return (
    <section id="servicos" className="py-32 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-8 leading-tight">
            A sua melhor versão <br />{' '}
            <span className="text-white/30">começa aqui</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase mb-2">
                  Avaliação Inicial
                </h4>
                <p className="text-white/50">
                  Analisamos seus objetivos e limitações para traçar o melhor
                  caminho.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase mb-2">
                  Treino Personalizado
                </h4>
                <p className="text-white/50">
                  Cada repetição conta. Foco total na sua técnica e evolução.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold uppercase mb-2">
                  Acompanhamento
                </h4>
                <p className="text-white/50">
                  Suporte constante para garantir que você nunca perca a
                  motivação.
                </p>
              </div>
            </div>
          </div>

          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-4 text-white font-bold uppercase underline tracking-widest group"
          >
            Agendar Treino Experimental{' '}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="relative reveal">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src="https://i.postimg.cc/MKRJjhch/776b42c3-7859-4891-9344-7131c8008323.jpg"
              alt="Personal Trainer"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
            <div className="uppercase tracking-widest">Treino Experimental</div>
          </div>
        </div>
      </div>
    </section>
  )
}
