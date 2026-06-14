import { useState, useEffect } from "react";
import logo from "../assets/UrbanBasket.png"; 
import { useClerk,UserButton,useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ShoppingCart, ShoppingCartIcon } from "lucide-react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate()
  const {openSignIn} = useClerk();
  const {user} = useUser()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-12 lg:px-20 backdrop-blur-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/92 border-b border-gray-200"
          : "bg-white/70 border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <div className=" w-12 h-auto bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/35 transition-transform group-hover:scale-105">
          <img
          src={logo}
          alt="UrbanBasket"
          className="w-full h-full object-contain transition-transform group-hover:scale-105 rounded-lg"
          />
          </div>
        <span className="font-bold text-[1.15rem] text-gray-900 tracking-tight">
          Urban<span className="text-green-500">Basket</span>
        </span>
      </a>

      {/* Nav Right */}
      <div className="flex items-center gap-4 md:gap-6">
        <a
          href="#features"
          className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
        >
          Features
        </a>
        {user?
      <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Action label="My Orders" labelIcon={<ShoppingCartIcon width={15}/>} onClick={()=>navigate('/my-orders')}/>
        </UserButton.MenuItems>
      </UserButton>
      </>
      :
      <>
      <div
            onClick={()=>openSignIn()}
          className="px-[1.1rem] py-[0.45rem] border-[1.5px] border-green-500 rounded-lg text-green-500 hover:bg-green-500 cursor-pointer hover:text-white font-semibold text-sm transition-all duration-200"
        >
          Log in
        </div></>  
      }
      </div>
    </nav>
  );
}