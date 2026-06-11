import { MapPin, Facebook, Instagram } from 'lucide-react'

export default function Location() {
  return (
    <section id="localizacao" className="py-32 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="reveal h-[500px] rounded-3xl overflow-hidden glass order-2 lg:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.024484227903!2d-9.176969600000001!3d38.8319001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd192dc5077899f1%3A0x202be708e128dfec!2sSilvaFitness.pt!5e0!3m2!1spt-PT!2spt!4v1778780929678!5m2!1spt-PT!2spt"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        <div className="reveal order-1 lg:order-2">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-8">
            Estamos em <br /> <span className="text-white/30">Loures</span>
          </h2>
          <div className="space-y-6 text-white/60">
            <div className="flex items-start gap-4">
              <MapPin className="text-white mt-1" />
              <div>
                <p className="text-white font-bold uppercase mb-1">Endereço</p>
                <p>Loures, Portugal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="text-white mt-1" />
              <div>
                <p className="text-white font-bold uppercase mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/silvafitness.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  silvafitness.pt {'\u00A0'}
                  {'\u2197'}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Facebook className="text-white mt-1" />
              <div>
                <p className="text-white font-bold uppercase mb-1">Facebook</p>
                <a
                  href="https://www.facebook.com/profile.php?id=100047615835577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  silvafitness {'\u00A0'}
                  {'\u2197'}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 glass rounded-3xl">
            <h4 className="text-xl font-display uppercase mb-4">
              Horário de Funcionamento
            </h4>
            <div className="flex justify-between text-sm py-2 border-b border-white/5">
              <span>Segunda - Sexta</span>
              <span>06:00 - 22:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
