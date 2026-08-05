import { UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/admin_assets/assets";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  const {user} = useUser()
  const navigate = useNavigate()
  return (
    <div className="flex items-center py-2 px-[4%]  rounded-2xl ">
      <div className="w-14 h-14 bg-linear-to-br  rounded-xl flex items-center justify-center shadow-md shadow-green-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-green-500/30">
                <img
                  src={assets.logo}
                  alt="UrbanBasket"
                  className="w-full h-auto object-contain rounded-lg"
                />
                
              </div>
              <span className="font-extrabold text-[1.25rem] text-slate-900 tracking-tight transition-colors group-hover:text-black">
          Urban<span className="text-green-500">Basket</span>
        </span>
     {/* <div className="flex w-full justify-end">
         <button className=" border border-zinc-300 text-zinc-800 hover:bg-zinc-900 hover:text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-2xl transition-colors duration-700 ">
        LogOut
      </button>
     </div> */}
      <div className="flex items-center gap-4 ml-auto">
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
            <span className="text-xs font-medium text-slate-600 max-w-20 truncate hidden sm:inline-block">
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
        </div>
    </div>
  );
};

export default Navbar;
