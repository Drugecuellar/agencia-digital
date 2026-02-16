type PlanCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  onSelectPlan?: () => void;
};

export default function PlanCard(props: PlanCardProps) {
  const { name, price, description, features, highlighted, onSelectPlan } = props;
  return (
    <article
      className={
        highlighted
          ? "relative p-8 rounded-2xl border-2 border-amber-500 bg-amber-50/50 shadow-xl shadow-amber-500/10 md:scale-105 z-10 transition-all duration-300"
          : "relative p-8 rounded-2xl border-2 border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
      }
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-slate-950 text-sm font-semibold rounded-full">
          Más popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{name}</h3>
      <p className="text-slate-600 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-slate-900">${price}</span>
        <span className="text-slate-500">/único</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-slate-600">
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
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onSelectPlan ?? (() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }))}
        className={
          highlighted
            ? "block w-full py-3 text-center font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-300"
            : "block w-full py-3 text-center font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300"
        }
      >
        Elegir plan
      </button>
    </article>
  );
}
