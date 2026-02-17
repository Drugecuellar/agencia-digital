import AdvantageIcon from "./AdvantageIcon";

const advantages = [
  {
    title: "Herramientas para SEO",
    description: "Amplía tu alcance y aparece más en los resultados de búsquedas con un potente paquete de funciones integradas.",
    icon: "chart",
  },
  {
    title: "Integraciones y extensiones",
    description: "Unifica tu mundo digital mediante integraciones con las plataformas de redes sociales más usadas.",
    icon: "team",
  },
  {
    title: "Analítica web",
    description: "Accede a los datos del tráfico y al comportamiento de los usuarios para centrar el foco de tu web.",
    icon: "badge",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            SEO y datos analíticos integrados
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Para mejorar tu posicionamiento en línea
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 flex items-center justify-center text-slate-900 mb-6">
                <AdvantageIcon type={advantage.icon} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                {advantage.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
