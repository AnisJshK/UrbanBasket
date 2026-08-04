import { assets } from "../assets/admin_assets/assets";

const Navbar = () => {
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
     <div className="flex w-full justify-end">
         <button className=" border border-zinc-300 text-zinc-800 hover:bg-zinc-900 hover:text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-2xl transition-colors duration-700 ">
        LogOut
      </button>
     </div>
    </div>
  );
};

export default Navbar;
