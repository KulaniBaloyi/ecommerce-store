import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

interface Product {
    id:string,
    name:string,
    price:number,
    image:{
        url:string
    },
    color:string,
    size:string,
    quantity:number
}

interface CartStore {
  items: Product[];
  likes: Product[];
  toggleLike: (data:Product)=>void;
  addItem: (data: Product) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
  items: [],
  likes:[],
  addItem: (data: Product) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    
    if (existingItem) {
      return toast.error('Item already in cart.');
    }

    set({ items: [...get().items, data] });
    toast.success('Item added to cart.', {
      style: {
        zIndex: 999,
      },
    })
  },
  increaseQuantity: (idToIncrease: String) => {
    const newCartItems = get().items.map((item) =>
      item.id === idToIncrease
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    set({ items: newCartItems });

  },
  decreaseQuantity: (idToDecrease: String) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === idToDecrease)
    if(existingItem){
      set({ items: [...get().items.filter((item) => item.id !== idToDecrease)] });
      toast.error("item removed from cart")
    }
    const newCartItems = get().items.map((item) =>
      item.id === idToDecrease
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    set({ items: newCartItems })
   

  },
  toggleLike:(data:Product)=>{
    const currentLikedItems = get().likes;
    const existingLikedItem = currentLikedItems.find((item) => item.id === data.id);

    if(existingLikedItem){
      //proceed to remove from likes
      set({likes:[...get().likes.filter((item)=>item.id !==data.id)]})
    }
      //add item 
      set({ likes: [...get().items, data] });
  

  },
  removeItem: (id: string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    toast.error('Item removed from cart.');
  },
  removeAll: () => set({ items: [] }),
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;