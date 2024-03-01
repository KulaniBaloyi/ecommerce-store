import { create } from "zustand"

const useMenu = create((set) => ({
    isOpen: false,
    onOpen: () =>{ 
      set({isOpen: true})   
  },
    onClose: () =>{
       set({ isOpen: false })
      },
  }))

  export default useMenu