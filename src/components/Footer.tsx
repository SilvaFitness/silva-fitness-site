export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-[10px] uppercase tracking-[0.2em]">
      <div className="flex-1 text-center md:text-left">© 2026 Silva Fitness. Todos os direitos reservados.</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">
          Termos
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Privacidade
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Cookies
        </a>
      </div>
      <div className="flex-1 text-center md:text-right font-display text-sm tracking-tighter text-white/10">
        Silva Fitness Loures
      </div>
    </footer>
  )
}
