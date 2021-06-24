import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(nome, descricao, valorUnitario, url) {
    const item = {nome, descricao, valorUnitario, url};
    setCart([...cart, item])
  }

  function removeItem(id) {
    const filteredCart = cart.filter(item => item.id !== id);
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

