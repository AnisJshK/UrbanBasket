import {useAuth,useUser} from '@clerk/clerk-react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';
export const backendUrl = import.meta.env.VITE_BACKEND_URL

const AdminAuth = () => {
    const {getToken,isLoaded,isSignedIn} = useAuth();
    const [isAdmin,setIsAdmin] = useState(null);
   

    useEffect(()=>{
        const check = async()=>{
            if(!isLoaded) return;
            if(!isSignedIn){
                setIsAdmin(false);
                return;
            }
            try {
                const token = await getToken();
                const {data} = await axios.get(`${backendUrl}/api/admin/is-admin`,{
                    headers:{Authorization:`Bearer ${token}`},
                });
                setIsAdmin(data.success);
            } catch (error) {
                setIsAdmin(false);
            }
        }
        check();
    },[isLoaded,isSignedIn])
  return isAdmin;
}

export const AuthContext = createContext(null);

export function AuthProvider ({children}){
    const {getToken} = useAuth();
     const currency = "₹";
    return (
        <AuthContext.Provider value={{getToken,currency}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AdminAuth