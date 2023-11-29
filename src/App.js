import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, Contact } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

import Login from "./pages/Login";
import Delivery from "./components/Delivery";
import Payment from "./components/Payment";
import OrderConfirm from "./components/OrderConfirm";
import Registration from "./pages/Registration";
import OrderPage from "./pages/OrderPage";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="products/*">
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<OrderPage/>}/>
          <Route path="checkout/*" element={<Checkout />}>
            <Route index element={<Delivery/>}/>
            <Route path="payment" element={<Payment/>}/>
            <Route path="confirm" element={<OrderConfirm/>}/>
          </Route>

          {/* <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          /> */}
          <Route path="error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
