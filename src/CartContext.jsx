import { useState, createContext, useContext } from "react";

const CartContext = createContext();
const CartUpdateContext = createContext();

export const useCart = () => useContext(CartContext);
export const useCartUpdate = () => useContext(CartUpdateContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const handleUpdateItems = cart => setItems(cart);

  return (
    <CartContext.Provider value={items}>
      <CartUpdateContext.Provider value={handleUpdateItems}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};
