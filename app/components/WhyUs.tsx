import AdvantageIcon from "./AdvantageIcon";

const advantages = [
  {
    title: "Resultados Medibles",
    description: "Trabajamos con métricas claras y reportes transparentes. Sabrás exactamente qué obtienes por tu inversión y cómo evoluciona tu negocio.",
    icon: "chart",
  },
  {
    title: "Equipo Especializado",
    description: "Diseñadores, desarrolladores y estrategas con años de experiencia en proyectos de todos los tamaños. Conocimiento que se traduce en calidad.",
    icon: "team",
  },
  {
    title: "Compromiso con tu Éxito",
    description: "No somos un proveedor más. Nos involucramos en tu proyecto como si fuera nuestro, con comunicación constante y dedicación total hasta alcanzar los objetivos.",
    icon: "badge",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Más que una agencia, somos tu socio estratégico en el mundo digital</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-colors duration-300">
              <div className="w-14 h-14 flex items-center justify-center text-amber-500 mb-6 rounded-xl bg-amber-500/10">
                <AdvantageIcon type={advantage.icon} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{advantage.title}</h3>
              <p className="text-slate-400 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
