import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/cart';

import App from './App';
import { AuthProvider } from './context/auth';



const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(
<>
<AuthProvider>
<CartProvider>
<BrowserRouter>
<App></App>
</BrowserRouter>
</CartProvider>  
</AuthProvider>
</>
); // Render content inside the root