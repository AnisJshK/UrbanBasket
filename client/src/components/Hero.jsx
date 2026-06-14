import { ArrowRight } from "lucide-react";
import HeroIllustration from "./HeroIllustration";
import { useClerk } from "@clerk/react";

export default function Hero() {
  const { openSignUp, openSignIn } = useClerk();

  return (
    <section className="min-h-screen pt-[110px] pb-20 px-6 md:px-12 lg:px-20 flex items-center bg-gradient-to-br from-green-50/70 via-white via-55% to-gray-50 relative overflow-hidden">
      <div className="absolute -top-[100px] -right-[120px] w-[520px] h-[520px] bg-radial-gradient from-green-500/12 to-transparent rounded-full pointer-events-none" />
      <div className="absolute -bottom-[60px] left-[10%] w-[320px] h-[320px] bg-radial-gradient from-green-500/7 to-transparent rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative shadow-2xl p-2 rounded-2xl">
      
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* New UrbanBasket Big Title requested in image_618988.jpg */}
          <h0 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-black tracking-tight leading-none mb-4 text-slate-900 select-none">
            Urban<span className="text-green-500">Basket</span>
          </h0>

          <div className="inline-flex items-center gap-1.5 bg-green-100 border border-green-200 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[0.78rem] text-green-600 font-semibold tracking-wide">
              Now live — 10,000+ products
            </span>
          </div>

          <h1 className="text-[2.4rem] md:text-[3.2rem] lg:text-[3.75rem] font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-5">
            Shop Smarter.<br />
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Shop Faster.
            </span>
          </h1>

          <p className="text-md md:text-lg text-slate-500 leading-relaxed max-w-[480px] mb-9">
            Discover thousands of products with a seamless shopping experience powered by UrbanBasket. Your city's best marketplace, at your fingertips.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
            <div
              onClick={() => openSignUp()}
              className="inline-flex items-center gap-1.5 px-7 py-3 cursor-pointer bg-gradient-to-br from-green-500 to-green-600 text-white font-bold rounded-xl text-[0.95rem] shadow-lg shadow-green-500/38 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/42 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <div
              onClick={() => openSignIn()}
              className="px-7 py-3 bg-white text-slate-900 cursor-pointer font-semibold rounded-xl text-[0.95rem] border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:border-green-500 transition-all duration-200"
            >
              Log in
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-orange-500", "bg-purple-500", "bg-green-500", "bg-blue-500", "bg-pink-500"].map((color, i) => (
                <div
                  key={i}
                  className={`w-[30px] h-[30px] rounded-full ${color} border-2 border-white flex items-center justify-center text-[0.65rem] text-white font-bold`}
                >
                  {["A", "B", "C", "D", "E"][i]}
                </div>
              ))}
            </div>
            <span className="text-[0.82rem] text-slate-500">
              <strong className="text-slate-900">5,000+</strong> happy shoppers this month
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center animate-[float_5s_ease-in-out_infinite]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}