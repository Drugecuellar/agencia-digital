export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contacto
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            ¿Listo para hacer crecer tu negocio? Escríbenos y conversemos sobre
            tu proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
            <a
              href="mailto:hola@rugedigital.com"
              className="text-slate-600 hover:text-amber-500 transition-colors"
            >
              hola@rugedigital.com
            </a>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Teléfono</h3>
            <a
              href="tel:+34912345678"
              className="text-slate-600 hover:text-amber-500 transition-colors"
            >
              +34 912 345 678
            </a>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Ubicación</h3>
            <p className="text-slate-600">Madrid, España</p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-2xl text-center">
          <p className="text-slate-600 mb-2">Respuesta en menos de 24 horas</p>
          <a
            href="mailto:hola@rugedigital.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
          >
            Enviar mensaje
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
