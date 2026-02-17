import Link from "next/link";

const columns = [
  {
    title: "Productos",
    links: [
      { label: "Páginas web", href: "/servicios" },
      { label: "Planes y precios", href: "/planes" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Por qué nosotros", href: "/por-que-nosotros" },
      { label: "Comparativa", href: "/comparativa" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "WhatsApp", href: "https://wa.me/573138541255" },
      { label: "Email", href: "mailto:agenciadigital@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-slate-900">
              Ruge Digital
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Agencia digital profesional. Diseño web, redes sociales y marketing que impulsan tu negocio.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-slate-900">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-slate-900"
                      target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ruge Digital. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">Condiciones</Link>
            <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
