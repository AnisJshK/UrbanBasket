import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { Navigate, useNavigate } from "react-router-dom";

const MyCart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const itemCount = cartData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="border-t pt-16 max-w-6xl mx-auto px-2 sm:px-0">
      <div className="mb-1">
        <Title text1={"YOUR "} text2={"BAG"} />
      </div>
      <p className="text-sm text-gray-500 mb-10">
        {itemCount} {itemCount === 1 ? "item" : "items"} currently curated in your selection.
      </p>

      {cartData.length === 0 ? (
        <p className="text-gray-500 py-10">Your bag is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          {/* Items */}
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id,
              );
              if (!productData) return null;

              return (
                <div key={index} className="flex gap-5 py-6">
                  <img
                    className="w-24 h-28 object-cover bg-gray-100 flex-shrink-0"
                    src={productData.image[0]}
                    alt={productData.name}
                  />

                  <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                    <div>
                      <p className="font-serif text-base text-gray-900">
                        {productData.name}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                        Size: {item.size}
                      </p>

                      {/* Quantity stepper */}
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.size, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex sm:flex-col sm:items-end justify-between mt-4 sm:mt-0">
                      <p className="text-sm text-gray-900">
                        {currency}
                        {productData.price * item.quantity}
                      </p>
                      <button
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="text-xs uppercase tracking-wide text-gray-400 hover:text-red-500 transition-colors mt-2 sm:mt-auto"
                      >
                        × Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div>
            <CartTotal />
            <div className="w-full text-end">
              <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8 p-3 rounded cursor-pointer hover:bg-gray-700 ">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;