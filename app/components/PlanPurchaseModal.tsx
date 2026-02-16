"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/constants";

export type PlanInfo = {
  name: string;
  price: string;
  description: string;
};

type PlanPurchaseModalProps = {
  plan: PlanInfo | null;
  onClose: () => void;
};

export default function PlanPurchaseModal({ plan, onClose }: PlanPurchaseModalProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plan) return;

    const text = [
      `Hola, me interesa adquirir el plan *${plan.name}* ($${plan.price} USD).`,
      "",
      `*Mis datos:*`,
      `• Nombre: ${nombre}`,
      `• Email: ${email}`,
      `• Teléfono: ${telefono}`,
      mensaje ? `• Mensaje: ${mensaje}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsAppLink(text), "_blank", "noopener,noreferrer");
    onClose();
  };

  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 id="modal-title" className="text-2xl font-bold text-slate-900 mb-2">
          Solicitar {plan.name}
        </h2>
        <p className="text-slate-600 mb-6">
          ${plan.price} USD — {plan.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
              Nombre completo *
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-1">
              Teléfono / WhatsApp *
            </label>
            <input
              id="telefono"
              type="tel"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
              placeholder="+57 300 123 4567"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-1">
              Mensaje adicional (opcional)
            </label>
            <textarea
              id="mensaje"
              rows={3}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
