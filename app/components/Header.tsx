"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Servicios", href: "/servicios" },
  { label: "Planes", href: "/planes" },
  { label: "Por qué nosotros", href: "/por-que-nosotros" },
  { label: "Comparativa", href: "/comparativa" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-slate-700"
        >
          <Image
            src="/malamute-logo.png"
            alt="Ruge Digital - Alaskan Malamute"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          RC-Digital
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/planes"
            className="hidden rounded-full bg-gray-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-600 md:inline-flex"
          >
            Log in
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
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
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/planes"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gray-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-gray-600"
            >
              Log in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
