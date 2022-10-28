import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CategoriesFilter, LoginPage, Random } from "./pages";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  console.log(cart);
  //add product to cart
  const addProductToCart = (product) => {
    const shoppingCart = cart.find((item) => item.id === product.id)
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];
    setCart(shoppingCart);
  };

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route
          path="/categories"
          element={<CategoriesFilter addProductToCart={addProductToCart} />}
        />
        <Route path="/random" element={<Random />} />
        {/* <Route path="/cart" element={<ShoppingCart cart={cart}/>}/> */}
      </Routes>
    </>
  );
}

export default App;
