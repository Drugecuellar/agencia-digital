"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Por qué nosotros", href: "#por-que-nosotros" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-violet-100/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="#"
          className="text-xl font-bold tracking-tight text-violet-600 transition-colors hover:text-violet-700"
        >
          Ruge Digital
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="hidden rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-violet-700 md:inline-flex"
          >
            Comenzar
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-violet-50 hover:text-violet-600 md:hidden"
            aria-label="Menú"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-violet-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-2.5 text-sm font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-violet-600 py-2.5 text-center text-sm font-semibold text-white"
            >
              Comenzar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
