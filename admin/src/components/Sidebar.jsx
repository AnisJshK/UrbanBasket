import { NavLink } from "react-router-dom"
import {ListChecksIcon, ListIcon, Plus} from 'lucide-react'
import { assets } from "../assets/admin_assets/assets"

const Sidebar = () => {
  return (
      <div className="w-[18%] min-h-screen  border-r-2 border-zinc-200 " >
            <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
            <NavLink className={"flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l  border-zinc-300 text-zinc-800 hover:bg-green-600 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-2xl transition-colors duration-700"} to={"/add"}>
                {/* <img className="w-5 h-5" src={assets.add_icon} alt="" /> */}
                <Plus/>
                
                <p className="hidden md:block">Add Items</p>
            </NavLink>
            <NavLink className={"flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l  border-zinc-300 text-zinc-800 hover:bg-green-600 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-2xl transition-colors duration-700"} to={"/list"}>
                 {/* <img className="w-5 h-5" src={assets.order_icon} alt="" /> */}
                 <ListIcon/>
                
                <p className="hidden md:block">List Items</p>
            </NavLink>
            <NavLink className={"flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l  border-zinc-300 text-zinc-800 hover:bg-green-600 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-2xl transition-colors duration-700"} to={"/orders"}>
                {/* <img className="w-5 h-5" src={assets.order_icon} alt="" />
                <Plus/> */}
                <ListChecksIcon/>
                
                <p className="hidden md:block">Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar