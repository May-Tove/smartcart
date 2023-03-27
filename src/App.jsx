import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index.jsx";
import {
  Home,
  Product,
  Contact,
  Checkout,
  PageNotFound,
  CheckoutSuccess,
} from "./pages/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
