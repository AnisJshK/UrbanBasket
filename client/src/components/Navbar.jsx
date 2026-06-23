import { useState, useEffect } from "react";
import logo from "../assets/UrbanBasket.png"; 
import { useClerk, UserButton, useUser } from "@clerk/react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCartIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-12 lg:px-20 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/80 border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <div 
        onClick={() => navigate("/")} 
        className="flex items-center gap-2.5 group cursor-pointer select-none"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md shadow-green-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-green-500/30">
          <img
            src={logo}
            alt="UrbanBasket"
            className="w-8 h-8 object-contain rounded-lg"
          />
        </div>
        <span className="font-extrabold text-[1.25rem] text-slate-900 tracking-tight transition-colors group-hover:text-black">
          Urban<span className="text-green-500">Basket</span>
        </span>
      </div>

      {/* Desktop Navigation links */}
      <div className="hidden md:flex items-center gap-8">
        <a
          onClick={()=>navigate('/')}
          className="text-slate-600 hover:text-green-600 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-500 hover:after:w-full after:transition-all after:duration-300"
        >
          Home
        </a>
        <a
           onClick={()=>navigate('/products')}
          className="text-slate-600 hover:text-green-600 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-500 hover:after:w-full after:transition-all after:duration-300"
        >
          Products
        </a>
        <a
          onClick={()=>navigate('/my-orders')}
          className="text-slate-600 hover:text-green-600 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-500 hover:after:w-full after:transition-all after:duration-300"
        >
          Orders
        </a>
        <a
           onClick={()=>navigate('/contact-us')}
          className="text-slate-600 hover:text-green-600 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-500 hover:after:w-full after:transition-all after:duration-300"
        >
          Contact
        </a>
      </div>

      {/* Actions (Desktop & Base UI) */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-2 border border-slate-100 rounded-full p-1 pr-3 bg-slate-50/50">
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Action 
                  label="My Orders" 
                  labelIcon={<ShoppingCartIcon className="w-4 h-4 text-slate-600" />} 
                  onClick={() => navigate('/my-orders')}
                />
              </UserButton.MenuItems>
            </UserButton>
            <span className="text-xs font-medium text-slate-600 max-w-[80px] truncate hidden sm:inline-block">
              {user.firstName || "Account"}
            </span>
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="hidden md:block px-5 py-2 bg-slate-900 hover:bg-green-600 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Log in
          </button>
        )}

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-600 hover:text-slate-900 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 py-6 transition-all duration-300 flex flex-col gap-4 md:hidden z-40 ${
          mobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <a
          onClick={()=>navigate('/Home')}
          className="text-slate-700 hover:text-green-600 font-semibold text-md py-2 border-b border-slate-50"
        >
          Home
        </a>
        <a
          onClick={()=>navigate('/products')}
          className="text-slate-700 hover:text-green-600 font-semibold text-md py-2 border-b border-slate-50"
        >
          Products
        </a>
        <a
          onClick={()=>navigate('/my-orders')}
          className="text-slate-700 hover:text-green-600 font-semibold text-md py-2 border-b border-slate-50"
        >
          Orders
        </a>
        <a
          onClick={()=>navigate('/contact-us')}
          className="text-slate-700 hover:text-green-600 font-semibold text-md py-2 border-b border-slate-50"
        >
          Contact
        </a>
        {!user && (
          <button
            onClick={() => openSignIn()}
            className="w-full mt-2 px-5 py-3 bg-green-500 text-white rounded-xl font-bold text-center text-sm shadow-md shadow-green-500/20"
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
}