import {  useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  
  const navigate = useNavigate();
  const [method, setMethod] = useState(["stripe","razor_pay"]);
  const {backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products,getToken} = useContext(ShopContext);
  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data=>({...data,[name]:value}))

  }

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    try {
      let orderItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0){
            const itemInfo = structuredClone(products.find(product=>(product._id)===(items)))
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount()+delivery_fee
      }
      const token = await getToken();
      switch(method){
        //API Calls for COD
        case 'cod':
          const response = await axios.post(`${backendUrl}/api/order/placeOrder`,orderData,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          if(response.data.success){
            setCartItems({})
            navigate('/my-orders');
          }else{
            toast.error(response.data.message)
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(`${backendUrl}/api/order/stripe`,orderData,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message)
          }
          break;
        default:

          break;
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  const inputStyle = 
    "w-full border border-zinc-300 bg-white rounded py-2 px-3.5 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 transition-colors";

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 pt-10 sm:pt-16 pb-20 px-4 sm:px-10 border-t border-zinc-200 min-h-[80vh] max-w-7xl mx-auto bg-white">
      
      {/* ---------------- Left Side: Delivery Information ---------------- */}
      <div className="flex flex-col gap-4 w-full lg:max-w-[480px]">
        <div className="text-xl sm:text-2xl mb-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className={inputStyle} type="text" placeholder="First name" />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className={inputStyle} type="text" placeholder="Last name" />
        </div>

        <input required onChange={onChangeHandler} name="email" value={formData.email} className={inputStyle} type="email" placeholder="Email address" />

        <input required onChange={onChangeHandler} name="street" value={formData.street} className={inputStyle} type="text" placeholder="Street address" />

        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="city" value={formData.city} className={inputStyle} type="text" placeholder="City" />
          <input required onChange={onChangeHandler} name="state" value={formData.state} className={inputStyle} type="text" placeholder="State" />
        </div>

        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className={inputStyle} type="number" placeholder="Zip code" />
          <input required onChange={onChangeHandler} name="country" value={formData.country} className={inputStyle} type="text" placeholder="Country" />
        </div>

        <input required onChange={onChangeHandler} name="phone" value={formData.phone} className={inputStyle} type="tel" placeholder="Phone number" />
      </div>

      {/* ---------------- Right Side: Cart Summary & Payment ---------------- */}
      <div className="flex flex-col gap-8 w-full lg:max-w-[480px]">
        
        <div className="w-full">
          <CartTotal />
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col gap-4">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          <div className="flex gap-3 flex-col sm:flex-row flex-wrap">
            
            <div 
              onClick={() => setMethod('stripe')} 
              className={`flex items-center gap-3 border p-3 px-4 rounded cursor-pointer transition-colors w-full sm:w-48 ${
                method === 'stripe' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-300 bg-white hover:border-zinc-400'
              }`}
            >
              <span className={`min-w-3.5 w-3.5 h-3.5 border rounded-full flex items-center justify-center ${method === 'stripe' ? 'border-zinc-900' : 'border-zinc-400'}`}>
                {method === 'stripe' && <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />}
              </span>
              <img className="h-4 object-contain" src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div 
              onClick={() => setMethod('razor_pay')} 
              className={`flex items-center gap-3 border p-3 px-4 rounded cursor-pointer transition-colors w-full sm:w-48 ${
                method === 'razor_pay' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-300 bg-white hover:border-zinc-400'
              }`}
            >
              <span className={`min-w-3.5 w-3.5 h-3.5 border rounded-full flex items-center justify-center ${method === 'razor_pay' ? 'border-zinc-900' : 'border-zinc-400'}`}>
                {method === 'razor_pay' && <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />}
              </span>
              <img className="h-4 object-contain" src={assets.razorpay_logo} alt="razor_pay" />
            </div>
            

            <div 
              onClick={() => setMethod('cod')} 
              className={`flex items-center gap-3 border p-3 px-4 rounded cursor-pointer transition-colors w-full sm:w-48 ${
                method === 'cod' ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-300 bg-white hover:border-zinc-400'
              }`}
            >
              <span className={`min-w-3.5 w-3.5 h-3.5 border rounded-full flex items-center justify-center ${method === 'cod' ? 'border-zinc-900' : 'border-zinc-400'}`}>
                {method === 'cod' && <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />}
              </span>
              <p className="text-xs font-semibold text-zinc-700 tracking-wider uppercase">Cash on Delivery</p>
            </div>
          </div>

          {/* Place Order CTA Button */}
          <div className="w-full text-end mt-4">
            <button type="submit"  className="bg-zinc-900 text-white hover:bg-zinc-700 font-bold uppercase tracking-widest text-xs px-8 py-3 rounded transition-colors w-full sm:w-auto cursor-pointer">
              Place Order
            </button>
          </div>
        </div>

      </div>

    </form>
  );
};

export default PlaceOrder;