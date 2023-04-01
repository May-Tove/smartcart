import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utilities/scrollToTop/index.jsx";
import Layout from "./components/Layout/index.jsx";
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
      <ScrollToTop />
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
