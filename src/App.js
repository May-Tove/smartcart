import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index.jsx";
import {
  Home,
  Product,
  Contact,
  Cart,
  Checkout,
  PageNotFound,
} from "./pages/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
