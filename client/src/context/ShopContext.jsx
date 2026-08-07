import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import {useAuth} from '@clerk/react'

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    
    const currency = '₹';
    const delivery_fee = 50;
    const {getToken} = useAuth();
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

        try {
            const token = await getToken();
            await axios.post(`${backendUrl}/api/cart/addToCart`,{itemId,size},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }

    
    const updateQuantity = async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        try {
            const token = await getToken();
            await axios.post(`${backendUrl}/api/cart/updateCart`,{itemId,size,quantity},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }


    const getUserCart = async()=>{
        try {
            const token = await getToken();
            const response = await axios.get(`${backendUrl}/api/cart/getCart`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            setCartItems(response.data.cartData);
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        getUserCart()
    },[])


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
        cartItems,setCartItems,
        addToCart,
        updateQuantity,
        getCartAmount,
        backendUrl,
        getToken
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;