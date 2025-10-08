// ✅ main.jsx

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LoadingProvider } from './context/LoadingContext.jsx'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

// 🔧 Rendering the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
        <ToastContainer position="top-right" />
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>
)
