import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './component/Routes/Private';
import Forgetpass from './pages/Forgetpass';
import AdminRoute from './component/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import UpdateProduct from './pages/Admin/UpdateProduct';
import User from './pages/Admin/Users';
import ProductList from './pages/Admin/Product';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Dashboard from './pages/user/Dashboard';
import CartPage from './pages/Cartpage';
import Details from './pages/Detail';
 // Add this import if Dashboard is defined
// import Users from './pages/Admin/Users';


import AdminOrders from './pages/Admin/AdminOrders';
import Users from './pages/Admin/Users';

// import Cartpage from './pages/Cartpage';
// import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<Details/>}/>
        
        {/* User Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<ProductList />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;