import { useAuth } from '@clerk/clerk-react';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

// 1. Create and export the Context
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { getToken } = useAuth();
  const currency = "₹";

  const value = {
    getToken,
    currency,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to check admin state
const AdminAuth = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const check = async () => {
      if (!isLoaded) return;
      if (!isSignedIn) {
        setIsAdmin(false);
        return;
      }
      try {
        const token = await getToken();
        const { data } = await axios.get(`${backendUrl}/api/admin/is-admin`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsAdmin(data.success);
      } catch (error) {
        setIsAdmin(false);
      }
    };
    check();
  }, [isLoaded, isSignedIn]);

  return isAdmin;
};

export default AdminAuth;