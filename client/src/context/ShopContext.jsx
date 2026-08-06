import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    
    const currency = '₹';
    const delivery_fee = 50;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [cartItems,setCartItems] = useState({});
    const [products,setProducts] = useState([]);

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

    const updateQuantity = async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id===items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async()=>{
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);

           if(response.data.success){
            setProducts(response.data.products)
           }else{
            toast.error(response.data.message);
           }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getProductsData()
    },[])
    
    
    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,addToCart,updateQuantity,getCartAmount,
        backendUrl
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;