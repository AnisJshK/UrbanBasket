import { assets } from "../assets/admin_assets/assets"

const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="" className="w-20 h-20" />
        <button>LogOut</button>
    </div>
  )
}

export default Navbar