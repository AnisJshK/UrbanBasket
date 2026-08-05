import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {toast} from 'react-toastify'
import {BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLEKEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLEKEY){
  toast.error("Missing Clerk Publishable Key")
}
createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <ClerkProvider publishableKey={PUBLISHABLEKEY}>

    <App />
  </ClerkProvider>

  </BrowserRouter>
)
