// cartStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";
import {toast} from 'react-hot-toast'; 

const useCart = create(persist((set, get) => ({
  cart: [],
  cartTotal: 0,
  totalItems: 0,
  addToCart: (product, quantity ) =>{
    set((state) => {
    
      const existingProductIndex = state.cart.findIndex((item) => item._id === product._id);
      //const newQuantity = parseInt(quantity, 10);
  
  
      if (existingProductIndex !== -1) {
        // If the product already exists, update the quantity to the new quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity = quantity;
        
        return {
          cart: updatedCart,
          cartTotal: calculateCartTotal(updatedCart),
          totalItems: calculateTotalItems(updatedCart),
          
        };
      } else {
        
        return {
          cart: [...state.cart, { ...product, quantity: quantity }],
          cartTotal: calculateCartTotal([...state.cart, { ...product, quantity: quantity }]),
          totalItems: calculateTotalItems([...state.cart, { ...product, quantity: quantity }]),
         
        };
      }
    })
    toast.success("item added to cart",{ icon: "🛒" })
  }
  ,

  removeFromCart: (productId) =>{
    set((state) => {
      const updatedCart = state.cart.filter((item) => item._id !== productId);

      return {
        cart: updatedCart,
        cartTotal: calculateCartTotal(updatedCart),
        totalItems: calculateTotalItems(updatedCart),
      };
    })
    toast.success("item is removed")
  }
   ,
  clearCart: () => set({ cart: [], cartTotal: 0, totalItems: 0 }),
}), {
  name: 'cart-storage',
  storage:createJSONStorage(()=>localStorage)
}))


export default useCart

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart) {
    return cart.reduce((total, item) => total + 1, 0);
  }