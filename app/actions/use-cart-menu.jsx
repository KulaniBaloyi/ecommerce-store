
import { create,useClient } from "zustand";
  
const useCartMenu = create((set) => ({
    isOpen: false,
    onOpen: () =>{ 
      set({isOpen: true})   
  },
    onClose: () =>{
       set({ isOpen: false })
      },
  }))

  export default useCartMenu