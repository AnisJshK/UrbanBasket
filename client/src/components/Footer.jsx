// 1. Remove the brand imports, replace with generic visual social equivalents
import { ShoppingBag, MessageSquare, Globe, Heart, Camera } from "lucide-react";

export default function Footer() {
  const categories = [
    { heading: "Shop", links: ["All Products", "New Arrivals", "Sale", "Gift Cards"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
    { heading: "Support", links: ["Help Center", "Returns", "Track Order", "Contact"] },
  ];

  // 2. Map clean generic icons to replace the removed social brands
  const socialIcons = [
    <MessageSquare className="w-4 h-4" key="threads-or-x" />, // Clean choice for X/Threads/Chat
    <Globe className="w-4 h-4" key="web" />,                 // Clean choice for LinkedIn/Network
    <Heart className="w-4 h-4" key="community" />,           // Clean choice for Facebook/Community
    <Camera className="w-4 h-4" key="instagram" />           // Perfect clean replacement for Instagram/Photos
  ];

  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-[1.05rem] text-white">
                Urban<span className="text-green-500">Basket</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px] mb-6">
              Your city's best marketplace. Thousands of products, lightning-fast delivery.
            </p>
            
            {/* Social Icons Loop */}
            <div className="flex gap-2.5">
              {socialIcons.map((icon, i) => (
                <div
                  key={i}
                  className="w-[34px] h-[34px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-green-500/15 hover:text-green-500 hover:border-green-500/30 transition-colors"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {categories.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-bold text-[0.85rem] tracking-wider mb-4 uppercase">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-green-500 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Base Sub-bar */}
        <div className="border-t border-white/5 pt-6 flex flex-wrap gap-3 items-center justify-between">
          <span className="text-slate-600 text-xs">
            © 2026 UrbanBasket, Inc. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-slate-600 hover:text-green-500 text-xs transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}