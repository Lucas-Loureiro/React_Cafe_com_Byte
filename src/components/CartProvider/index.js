import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  

  function addItem(nome, descricao, valorUnitario, url, id) {
    const item = { nome, descricao, valorUnitario, url, id };
    const itemIndex = cart.findIndex(x => x.nome === nome);

    if (itemIndex !== -1) {
      console.log(cart[itemIndex].quantidade);
      item.quantidade = cart[itemIndex].quantidade + 1
      var novaLista = cart;
      novaLista[itemIndex].quantidade = item.quantidade
      setCart(novaLista)
    } else {
      item.quantidade = 1
      setCart([...cart, item])

      
    }

  }

  function removeItem(nome) {
    const filteredCart = cart.filter(item => item.nome !== nome);
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }



  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

