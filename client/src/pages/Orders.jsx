import { useContext, useEffect,useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import {useAuth} from '@clerk/react';

const Orders = () => {
  const { backendUrl,currency } = useContext(ShopContext);
  const {getToken} = useAuth();
  const [orderData,setOrderData] = useState([]);

  const loadOrderData = async(req,res)=>{
    try {
      const token = await getToken();
      const response = await axios.post(`${backendUrl}/api/order/userorders`,{},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status']=order.status
            item['payment']=order.payment
            item['paymentMethod']=order.paymentMethod
            item['date']=order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    loadOrderData();
  },[])
 
  return (
    <div className="border-t border-zinc-200 pt-10 sm:pt-16 pb-20 px-4 sm:px-10 max-w-7xl mx-auto">
      <div className="text-xl sm:text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="flex flex-col gap-4">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-5 border-b border-zinc-200 text-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-start gap-4 sm:gap-6 text-sm">
              <img 
                className="w-20 sm:w-24 h-20 sm:h-24 object-cover rounded bg-zinc-100 border border-zinc-200 flex-shrink-0" 
                src={item.image[0]} 
                alt={item.name} 
              />
              
              <div className="flex flex-col gap-1.5">
                <p className="text-base sm:text-lg font-semibold text-zinc-900">
                  {item.name}
                </p>
                
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <p className="font-medium text-zinc-900">
                    {currency}{item.price}
                  </p>
                  <span>•</span>
                  <p>Quantity: <span className="text-zinc-900">{item.quantity }</span></p>
                  <span>•</span>
                  <p>Size: <span className="text-zinc-900">{item.size}</span></p>
                </div>

                <p className="text-xs text-zinc-500 mt-1">
                  Date: <span className="text-zinc-700 font-medium">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Payment: <span className="text-zinc-700 font-medium">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-medium text-zinc-700">{item.status}</p>
              </div>

              <button onClick={loadOrderData } className="border border-zinc-300 text-zinc-800 hover:bg-zinc-900 hover:text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded transition-colors">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Orders;