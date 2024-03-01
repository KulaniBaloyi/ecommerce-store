import { create } from "zustand";

const usePreviewModal = create((set) => ({
    isOpen: false,
    onOpen: () =>{ 
      set({isOpen: true})
      
  },
    onClose: () =>{
       set({ isOpen: false })
      },
  }))

  export default usePreviewModal