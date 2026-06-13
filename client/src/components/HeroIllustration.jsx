import { Truck, ShieldCheck, TrendingUp, Sparkles, Flame, MoveRight } from "lucide-react";

export default function HeroIllustration() {
  const products = [
    { icon: "👟", name: "Air Sneakers Pro", price: "$128", bg: "bg-amber-100", tag: "Trending", tagColor: "text-amber-700", tagIcon: <Flame className="w-3 h-3" /> },
    { icon: "🎧", name: "Studio Headphones", price: "$249", bg: "bg-purple-100", tag: "New", tagColor: "text-purple-700", tagIcon: <Sparkles className="w-3 h-3" /> },
    { icon: "💼", name: "Urban Leather Bag", price: "$89", bg: "bg-green-100", tag: "Sale", tagColor: "text-green-700", tagIcon: <TrendingUp className="w-3 h-3" /> },
  ];

  return (
    <div className="relative w-full max-w-[360px]">
      {/* Main Container Card */}
      <div className="bg-white rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.06)] p-6 border border-slate-100">
        
        {/* Card Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-bold text-[0.95rem] text-slate-900">Your Cart</span>
          <span className="bg-green-100 text-green-600 text-[0.72rem] font-bold px-2.5 py-0.5 rounded-full">
            3 items
          </span>
        </div>

        {/* Product Rows */}
        <div className="space-y-1.5">
          {products.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-3.5 p-3 rounded-xl transition-colors cursor-pointer group ${
                i === 0 ? "bg-slate-50" : "bg-transparent hover:bg-slate-50"
              }`}
            >
              <div className={`w-[42px] h-[42px] rounded-xl ${p.bg} flex items-center justify-center text-xl flex-shrink-0`}>
                {p.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.82rem] font-semibold text-slate-900 truncate">{p.name}</p>
                <span className={`inline-flex items-center gap-0.5 text-[0.7rem] font-bold ${p.tagColor}`}>
                  {p.tagIcon}
                  {p.tag}
                </span>
              </div>
              <span className="text-[0.88rem] font-bold text-slate-900">{p.price}</span>
            </div>
          ))}
        </div>

        {/* Total Summary */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-[0.82rem] text-slate-500">Order total</span>
          <span className="text-1.1xl font-extrabold text-slate-900">$466</span>
        </div>

        {/* Call to action trigger */}
        <div className="mt-3.5 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl py-3 text-center text-sm font-bold shadow-md shadow-green-500/35 cursor-pointer flex items-center justify-center gap-1 group">
          Checkout <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Floating Badge - Top Right */}
      <div className="absolute -top-4.5 -right-3 bg-white rounded-xl py-2 px-3 shadow-md border border-slate-200 flex items-center gap-1.5">
        <Truck className="w-4 h-4 text-green-500" />
        <span className="text-[0.72rem] font-bold text-slate-900 whitespace-nowrap">Free Delivery</span>
      </div>

      {/* Floating Badge - Bottom Left */}
      <div className="absolute -bottom-3.5 -left-4 bg-white rounded-xl py-2 px-3.5 shadow-md border border-slate-200 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-green-500" />
        <span className="text-[0.72rem] font-bold text-slate-900 whitespace-nowrap">Secure & Encrypted</span>
      </div>
    </div>
  );
}