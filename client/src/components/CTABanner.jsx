export default function CTABanner() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
      <div className="max-w-[700px] mx-auto text-center">
        <span className="bg-green-100 text-green-600 text-[0.78rem] font-bold px-3.5 py-1 rounded-full tracking-widest uppercase inline-block mb-5">
          Get started today
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
          Ready to experience<br />smarter shopping?
        </h2>
        <p className="text-slate-500 text-[1.05rem] leading-relaxed mb-9">
          Join thousands of happy customers who already shop with UrbanBasket. Create your free account in 30 seconds.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://accounts.dev/sign-up"
            className="px-9 py-3.5 bg-gradient-to-br from-green-500 to-green-600 text-white font-bold rounded-xl text-md shadow-lg shadow-green-500/38 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/42 transition-all duration-200"
          >
            Create Free Account
          </a>
          <a
            href="https://accounts.dev/sign-in"
            className="px-9 py-3.5 bg-white text-slate-900 font-semibold rounded-xl text-md border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:border-green-500 transition-all duration-200"
          >
            Sign in instead
          </a>
        </div>
      </div>
    </section>
  );
}