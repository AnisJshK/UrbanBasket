import { Package, Heart, Star, Rocket } from "lucide-react";

const STATS_DATA = [
  { value: "10K+", label: "Products", icon: <Package className="w-8 h-8 text-green-500" /> },
  { value: "5K+", label: "Customers", icon: <Heart className="w-8 h-8 text-green-500" /> },
  { value: "99%", label: "Satisfaction", icon: <Star className="w-8 h-8 text-green-500" /> },
  { value: "24h", label: "Nationwide Delivery", icon: <Rocket className="w-8 h-8 text-green-500" /> },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-950 to-emerald-950 relative overflow-hidden">
      {/* Structural Backdrop Decor */}
      <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full border border-green-500/15 pointer-events-none" />
      <div className="absolute -bottom-[80px] -left-[80px] w-[400px] h-[400px] rounded-full border border-green-500/10 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Trusted by thousands
          </h2>
          <p className="text-slate-400">Numbers that speak for themselves.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS_DATA.map((s, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-3.5 transform transition-transform hover:scale-110">
                {s.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-green-500 tracking-tight leading-none">
                {s.value}
              </div>
              <div className="text-sm text-slate-400 mt-2 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}