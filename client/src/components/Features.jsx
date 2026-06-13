import { Zap, ShieldAlert, Undo2, HelpCircle } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    title: "Fast Delivery",
    desc: "Get your orders delivered in record time. Same-day and next-day options available across the city.",
    bg: "bg-amber-100/80",
    borderHover: "hover:border-amber-500/20",
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-green-600" />,
    title: "Secure Payments",
    desc: "Bank-grade encryption on every transaction. Shop with confidence using your preferred payment method.",
    bg: "bg-green-100/80",
    borderHover: "hover:border-green-500/20",
  },
  {
    icon: <Undo2 className="w-6 h-6 text-purple-600" />,
    title: "Easy Returns",
    desc: "Not satisfied? No problem. Hassle-free returns within 30 days, no questions asked.",
    bg: "bg-purple-100/80",
    borderHover: "hover:border-purple-500/20",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-pink-600" />,
    title: "Premium Support",
    desc: "Real humans available 24/7. Chat, call, or email — we're always here to help you.",
    bg: "bg-pink-100/80",
    borderHover: "hover:border-pink-500/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-bold tracking-widest text-green-500 uppercase block mb-3">
            Why UrbanBasket
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built around your experience
          </h2>
          <p className="text-slate-500 text-[1.05rem] max-w-[520px] mx-auto leading-relaxed">
            Every feature is designed to make shopping feel effortless, safe, and genuinely enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((f, i) => (
            <div
              key={i}
              className={`bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-200 group border-b-[1.5px] ${f.borderHover}`}
            >
              <div className={`w-[52px] h-[52px] rounded-xl ${f.bg} flex items-center justify-center mb-[1.1rem] transition-transform group-hover:scale-105`}>
                {f.icon}
              </div>
              <h3 className="mb-2 text-[1.05rem] font-bold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}