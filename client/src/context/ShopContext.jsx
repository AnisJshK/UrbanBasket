import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    
    const currency = '₹';
    const delivery_fee = 10;
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId,size) => {
        if(!size){
            toast.error('Select Product Size')
            return;
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;

            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    
    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;