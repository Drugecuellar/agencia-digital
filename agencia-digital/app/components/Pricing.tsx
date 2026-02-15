import PlanCard from "./PlanCard";

const webPlans = [
  { name: "Landing Page", price: "299", description: "Ideal para promociones o lanzamientos", features: ["Hasta 5 secciones", "Diseño responsive", "Formulario de contacto", "Optimización SEO básica"], highlighted: false },
  { name: "Sitio Corporativo", price: "599", description: "Para empresas que necesitan presencia profesional", features: ["Hasta 10 páginas", "Blog integrado", "Panel de administración", "SEO avanzado", "Google Analytics"], highlighted: true },
  { name: "E-commerce", price: "999", description: "Tienda online completa", features: ["Catálogo ilimitado", "Pasarela de pagos", "Gestión de inventario", "Email marketing", "Soporte prioritario"], highlighted: false },
];

const socialPlans = [
  { name: "Básico", price: "199", description: "Para negocios empezando", features: ["2 redes sociales", "12 posts/mes", "Respuesta a comentarios", "Reporte mensual"], highlighted: false },
  { name: "Profesional", price: "399", description: "Crecimiento acelerado", features: ["4 redes sociales", "24 posts/mes", "Diseño de stories", "Análisis de métricas", "Estrategia mensual"], highlighted: true },
  { name: "Enterprise", price: "699", description: "Gestión integral", features: ["Redes ilimitadas", "Contenido diario", "Campañas publicitarias", "Community manager dedicado", "Reuniones estratégicas"], highlighted: false },
];

export default function Pricing() {
  return (
    <section id="planes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Planes y Precios</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Soluciones a medida para cada etapa de tu negocio</p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Páginas Web</h3>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {webPlans.map((plan, index) => <PlanCard key={index} {...plan} />)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Redes Sociales</h3>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {socialPlans.map((plan, index) => <PlanCard key={index} {...plan} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
