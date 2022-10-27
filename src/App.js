import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CategoriesFilter, LoginPage } from "./pages";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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

  console.log(cart);

  // console.log("user on app", user);

  //Shopping Cart
  //1. Function to add -> setCart([...cart, {product I selected}])
  //2. If product is already in the cart, I want to update quantity, else I add the product
  //3. object => { name: "Dress", price: 50, quantity: 1 }

  //Filtering
  //1. Endpoint in the backend to get all categories
  //2. Map over the categories in the frontend
  //3. You need a place to store the selected categories -> useState([])
  //4. You need a state for categories and one for selectedCategories
  //5. Put the selectedCategories in the state
  //6. if not there, add it. Else, remove it

  // const addCategories = selectedCategories.includes(selected)
  //   ? selectedCategories.filter(cat => cat != selected)
  //   : [...selectedCategories, selected]

  //7. Filter products based on categories
  //8. Map filter products

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route
          path="/categories"
          element={<CategoriesFilter addProductToCart={addProductToCart} />}
        />
        {/* <Route path="/cart" element={<ShoppingCart cart={cart}/>}/> */}
        {/* <Route path="/details" element={<ShoppingCart setCart={setCart}/>}/> */}
      </Routes>
    </>
  );
}

export default App;
