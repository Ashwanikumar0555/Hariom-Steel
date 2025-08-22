import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";   // 👈 Import Clerk
import "./index.css";
import App from "./App.jsx";

// 👇 Get your key from .env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
);


// import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//       <App />
  
//   </StrictMode>
// )
