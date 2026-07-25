import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-zinc-200 pt-10 sm:pt-16 pb-20 px-4 sm:px-10 max-w-7xl mx-auto">
      <div className="text-xl sm:text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="flex flex-col gap-4">
        {products.slice(1, 4).map((item, index) => (
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
                  <p>Quantity: <span className="text-zinc-900">1</span></p>
                  <span>•</span>
                  <p>Size: <span className="text-zinc-900">M</span></p>
                </div>

                <p className="text-xs text-zinc-500 mt-1">
                  Date: <span className="text-zinc-700 font-medium">25, July 2026</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-medium text-zinc-700">Ready to ship</p>
              </div>

              <button className="border border-zinc-300 text-zinc-800 hover:bg-zinc-900 hover:text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded transition-colors">
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