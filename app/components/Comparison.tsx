const comparisons = [
  {
    aspect: "Diseño personalizado",
    ruge: "Sí — Diseño único para tu marca",
    otros: "Plantillas genéricas o diseño repetitivo",
  },
  {
    aspect: "Soporte directo",
    ruge: "Atención por WhatsApp y email",
    otros: "Solo tickets o chat automatizado",
  },
  {
    aspect: "Hosting y dominio",
    ruge: "Incluido o guiado paso a paso",
    otros: "Tú debes contratar por separado",
  },
  {
    aspect: "Optimización SEO",
    ruge: "Integrado desde el inicio",
    otros: "A menudo extra o inexistente",
  },
  {
    aspect: "Tiempo de entrega",
    ruge: "Plazos claros y comunicados",
    otros: "Retrasos frecuentes sin aviso",
  },
  {
    aspect: "Mantenimiento post-lanzamiento",
    ruge: "Soporte y ajustes disponibles",
    otros: "Soporte limitado o de pago",
  },
];

export default function Comparison() {
  return (
    <section id="comparativa" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ruge vs. otras opciones
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Compara lo que ofrecemos frente a agencias genéricas, freelancers sin procesos o plataformas DIY.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold text-slate-900">Aspecto</th>
                <th className="px-6 py-4 font-semibold text-amber-600 bg-amber-50/50">
                  Ruge Digital
                </th>
                <th className="px-6 py-4 font-semibold text-slate-500">Otras opciones</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? "bg-white border-b border-slate-100"
                      : "bg-slate-50/50 border-b border-slate-100"
                  }
                >
                  <td className="px-6 py-4 font-medium text-slate-800">{row.aspect}</td>
                  <td className="px-6 py-4 text-slate-700">
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-amber-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {row.ruge}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{row.otros}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-center text-slate-600 text-sm max-w-2xl mx-auto">
          Elegimos compararnos con alternativas comunes: agencias que usan plantillas en masa, freelancers sin estructura y herramientas tipo Wix/Squarespace que requieren que tú hagas todo el trabajo.
        </p>
      </div>
    </section>
  );
}
