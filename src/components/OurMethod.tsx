import { useRef } from 'react'
import { YouTubeEmbed } from '#/components/YouTubeEmbed'

export default function OurMethod() {
  const bentoRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="metodo"
      className="py-24 bg-luxury-black overflow-hidden"
      ref={bentoRef}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 text-center reveal">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
            Conheça o <span className="text-white/30">Nosso Método</span>
          </h2>
        </div>

        <div className="space-y-32">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <YouTubeEmbed
              videoId="pBf-rxjqaZI"
              className="rounded-3xl overflow-hidden glass aspect-video lg:aspect-square"
            />
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-display font-semibold uppercase tracking-tight">
                A Origem: De Superação a Transformação
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                O fundador Gilson da Silva superou as limitações da asma através
                do desporto e das artes marciais. Dessa experiência, nasceu um
                método cientificamente comprovado e totalmente adaptável. Seja
                com treinos personalizados ou em grupo, o nosso foco é criar uma
                comunidade onde aprendes, evoluis e te superas.
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <YouTubeEmbed
              videoId="g_DbDr5UbSs"
              className="lg:order-2 rounded-3xl overflow-hidden glass aspect-video lg:aspect-square"
            />
            <div className="lg:order-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-display font-semibold uppercase tracking-tight">
                O Fim do Cansaço Diário
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Ficas sem ar ao subir escadas? Isso não acontece de um dia para
                o outro. A maioria das pessoas não precisa de mais motivação;
                precisa de estrutura, de um método claro e da pessoa certa ao
                seu lado. Juntos, vamos mudar a tua realidade física.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
