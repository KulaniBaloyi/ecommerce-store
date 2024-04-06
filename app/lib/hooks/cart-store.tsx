// cartStore.js
import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {

    id:string
    price: number
    image: string
    name:string
  quantity: number;
  color?: string; // ? means optional
  size?: string; // ? means optional
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
  
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItem) => {
      
        const currentItems = get().items; // all the items already in cart
        const isExisting = currentItems.find((item) => item.id === data.id
        );

        if (isExisting) {
          const updatedItems = currentItems.map((item) =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        set({ items: updatedItems });
        toast.success("Item quantity increased", { icon: "" });
        } 

        //if item is not in cart we add it
        //we first retrieve all the existing items in cart and at the end we add the item
        set({ items: [...get().items, data] });
        toast.success('Item added to cart.');
    
        

        
      },
      removeItem: (id: String) => {
        set({items:[...get().items.filter((item)=>item.id !== id)]})   
        toast.success("Item removed from cart");
      },
      increaseQuantity: (id: String) => {
        const newCartItems = get().items.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ items: newCartItems });
        toast.success("Item quantity increased");
      },
      decreaseQuantity: (id: String) => {
        const newCartItems = get().items.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        set({ items: newCartItems });
        toast.success("Item quantity decreased");
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCart;
