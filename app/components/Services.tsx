import ServiceIcon from "./ServiceIcon";

const services = [
  {
    title: "Hecho a tu medida",
    description:
      "Transforma la información básica sobre tu negocio y tu marca en un sitio web atractivo y personalizado.",
    icon: "web",
  },
  {
    title: "Edita con arrastrar y soltar",
    description:
      "Diseña directamente con nuestro editor fácil de usar que no requiere experiencia en programación.",
    icon: "social",
  },
  {
    title: "Adaptado a todos los dispositivos",
    description:
      "Sitios web optimizados para ordenadores, móviles y tabletas con diseño responsive.",
    icon: "marketing",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Crea un sitio web personalizado
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Herramientas creativas que te ayudan a destacar en línea
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <article
              key={index}
              className="group p-0 bg-transparent"
            >
              <div className="w-12 h-12 flex items-center justify-center text-slate-900 mb-6">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
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
