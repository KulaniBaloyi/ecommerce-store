import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware"; 

const useCart = create(persist((set, get) => ({

  items: [],
  addItem: (data) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);

  
    
    if (existingItem) {
      const updatedItems = currentItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      toast('Item already in cart.')
      set({ items: updatedItems });
    } else {
      const newItem = { ...data, quantity: 1 }
      set({ items: [...currentItems, newItem] })
      toast('Item added to cart.')
    }
  },
  decreaseItem:(data)=>{
    const currentItems = get().items
    const existingItem = currentItems.find(item=>item.id===data.id)
    if(existingItem){
      const updatedItems = currentItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      set({ items: updatedItems });
    }
  },
  removeItem: (id) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    toast('item removed from cart')
  },
  removeAll: () =>{
    set({ items: [] }),
    toast('cart cleared')
  } 
}), {
  name: 'cart-storage',
  storage:createJSONStorage(()=>localStorage)
}))


export default useCart