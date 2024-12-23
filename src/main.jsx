import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Retrieve the Clerk Publishable Key from the .env file
const clerkFrontendAPI = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkFrontendAPI) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendAPI} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
