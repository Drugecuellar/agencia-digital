import ServiceIcon from "./ServiceIcon";

const services = [
  {
    title: "Creación de Páginas Web",
    description:
      "Diseñamos y desarrollamos sitios web profesionales, rápidos y optimizados para SEO. Desde landing pages hasta e-commerce completos.",
    icon: "web",
  },
  {
    title: "Administración de Redes Sociales",
    description:
      "Gestionamos tu presencia en redes sociales con contenido estratégico, community management y campañas que generan engagement real.",
    icon: "social",
  },
  {
    title: "Marketing Digital",
    description:
      "Estrategias integrales de marketing digital: SEO, SEM, email marketing y análisis de datos para maximizar tu ROI.",
    icon: "marketing",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Soluciones digitales que impulsan el crecimiento de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center text-amber-500 mb-6 rounded-xl bg-amber-50 group-hover:bg-amber-100 transition-colors">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
