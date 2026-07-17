import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
<ClerkProvider>
  <ShopContextProvider>
  <App/>
  </ShopContextProvider>
</ClerkProvider>
)
