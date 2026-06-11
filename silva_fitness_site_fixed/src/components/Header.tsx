import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/dVshDthG/Silva-Fitness-Logo.png"
            alt="Logo Silva Fitness"
            style={{
              maxHeight: '45px',
              width: 'auto',
              filter: 'invert(1) brightness(2)',
              WebkitFilter: 'invert(1) brightness(2)',
            }}
            referrerPolicy="no-referrer"
          />
        </a>

        <nav className="hidden min-[1020px]:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#metodo" className="hover:text-white transition-colors">
            Método
          </a>
          <a href="#ambiente" className="hover:text-white transition-colors">
            Ambiente
          </a>
          <a href="#resultados" className="hover:text-white transition-colors">
            Resultados
          </a>
          <a href="#agendamento" className="hover:text-white transition-colors">
            Treinos
          </a>
          <a href="#localizacao" className="hover:text-white transition-colors">
            Localização
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#agendamento"
            className="hidden sm:flex bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Reservar Agora
          </a>
          <button
            className="min-[1020px]:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-luxury-black flex flex-col items-center justify-center gap-8 text-2xl font-display uppercase">
          <a href="#metodo" onClick={() => setIsMenuOpen(false)}>
            Método
          </a>
          <a href="#ambiente" onClick={() => setIsMenuOpen(false)}>
            Ambiente
          </a>
          <a href="#resultados" onClick={() => setIsMenuOpen(false)}>
            Resultados
          </a>
          <a href="#agendamento" onClick={() => setIsMenuOpen(false)}>
            Treinos
          </a>
          <a href="#localizacao" onClick={() => setIsMenuOpen(false)}>
            Localização
          </a>
          <a
            href="#agendamento"
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-bold"
          >
            Reservar Agora
          </a>
        </div>
      )}
    </>
  )
}
