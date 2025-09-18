//imports obrigatórios
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

//imports dos styles
import "./styles/main.css";
import "./styles/reset.css";

//imports dos componentes
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import { CartProvider } from "./components/CartContext";
import CartNotification from "./components/CartNotification";
import { FavoritesProvider } from "./components/FavoritesContext";
import FavsNotification from "./components/FavsNotification";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <CartNotification />
          <FavsNotification />
          <NavBar />

          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/category/:categoryName"
              element={<ProductsCategoryPage />}
            />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer/>
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>
);
