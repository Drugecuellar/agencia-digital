import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#0c1929]">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-yellow-400 text-sm font-medium uppercase tracking-[0.2em] mb-6">
          Sitios web
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-red-800 mb-6 leading-[1.1] tracking-tight">
          Líderes en diseño web
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Genera un sitio web único gracias a nuestra experiencia en diseño web profesional, 
          con soluciones adaptadas para ti.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/planes"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-[#0c1929] font-semibold rounded-lg transition-colors duration-200"
          >
            Comenzar
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/80 hover:border-white hover:bg-white/5 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Explorar servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
