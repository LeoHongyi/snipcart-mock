import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import CartScreen from './screens/CartScreen'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
