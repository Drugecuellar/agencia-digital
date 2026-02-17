import Link from "next/link";

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Páginas web", href: "#servicios" },
      { label: "Redes sociales", href: "#servicios" },
      { label: "Marketing digital", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Planes y precios", href: "#planes" },
      { label: "Por qué nosotros", href: "#por-que-nosotros" },
      { label: "Comparativa", href: "#comparativa" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Escríbenos", href: "#contacto" },
      { label: "WhatsApp", href: "https://wa.me/573138541255" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#" className="text-xl font-bold text-white">
              Ruge Digital
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Agencia digital profesional. Diseño web, redes sociales y marketing que impulsan tu negocio.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-cyan-400"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ruge Digital. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-cyan-400">Condiciones</Link>
            <Link href="#" className="hover:text-cyan-400">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
