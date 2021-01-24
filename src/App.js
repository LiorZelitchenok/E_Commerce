import React, { useState, useEffect } from "react";
import Products from "./Components/Products/Products";
import NavBar from "./Components/NavBar/NavBar";
import CheckOut from "./Components/CheckOutForm/CheckOut/CheckOut";
import Cart from "./Components/Cart/Cart";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  //Fetching the products from the E - Commerce API
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  //Fetching the cart from the E - Commerce API
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  //Handle add to cart item
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  //Handle update the cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  //Handle remove from the cart
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  //Handle emprty the cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <Router>
      <NavBar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route exact path="/checkout">
          <CheckOut cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
