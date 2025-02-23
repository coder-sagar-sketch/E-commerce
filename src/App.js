import {
  Routes,
  Route,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { Products } from "./pages/Products/products";
import { Product } from "./pages/Product/product";
import { Cart } from "./pages/Cart/cart";
import { nofound as Nofound } from "./pages/Nofound/nofound";
import { useCart } from "./Context/Context";
import Header from "./Components/header/header";
import Footer from "./Components/Footer/Footer";

function App() {
  const navigation = useNavigate();

  const { cartItemCount } = useCart();

  const queryUrl = (searchquery) => {
    navigation(`/?${createSearchParams({ q: searchquery })}`);
  };

  return (
    <div>
      <Navbar queryUrl={queryUrl} productcount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Nofound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
