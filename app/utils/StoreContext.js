"use client"

import {useState, useContext,createContext} from "react";
import CartMenu from "../components/menus/CartMenu";
import SearchModal from "../components/modals/SearchModal";
import Menu from "../components/menus/Menu";
import PreviewProduct from "../components/modals/PreviewModal";

const StoreContext = createContext({})

export function useStore(){
  return useContext(StoreContext)
}


export function StoreProvider({children}){
  
  //cart
  const [cartItems,setCartItems]= useState([])
  const [cartMenu,setCartMenu] = useState(false)
  const [previewProduct,setpreviewProduct] = useState(false)
  const [menu,setMenu] = useState(false)
  const [searchResult,setSearchResult] = useState()
  const cartQuantity = cartItems.reduce((quantity,item)=> item.quantity + quantity,0)
  //store items
  const [products,setProducts]=useState([])
  //subttotal
  const [total,setTotal] = useState(0)
  const [searchModal,setSearchModal]= useState(false)
  const [itemQuantity,setItemQuantity] = useState(0)
  
function getItemQuantity(id){
  return cartItems.find(item=>item.id===id)?.quantity||0
}


function increaseCartQuantity(id){
    setCartItems(currItems=>{
      //if we dont have this item at all stored anywhere, then add a new item for it
      //otherwise increse the item by 1
      if (currItems.find(item=> item.id ===id)==null){
        return [...currItems,{id,quantity:1}]
        
      }else{
        
        return currItems.map(item=>{
          //if we wanted to limit the number of items one can order we would put condition here
          if(item.id ===id){
            return {...item,quantity:item.quantity+1}
          }else return {...item} 
        })
      }
    })
  }

  function decreaseCartQuantity(id){
    setCartItems(currItems=>{
      if (currItems.find(item=> item.id ===id)?.quantity ===1){
        return currItems.filter(item=>item.id !== id)
      }else{
        return currItems.map(item=>{
          if(item.id ===id){
            return {...item,quantity:item.quantity-1}
          }else return item
        })
      }
    })
  }

  function removeFromCart(id){
    setCartItems(currItems=>{
      return currItems.filter(item=>item.id !==id)
    })    
  }

    return <StoreContext.Provider value={{searchResult,setSearchResult,previewProduct,setpreviewProduct,menu,setMenu,itemQuantity,setItemQuantity,products,searchModal,setSearchModal,setProducts,cartMenu,setCartMenu,getItemQuantity,total,setTotal,cartQuantity,cartItems,increaseCartQuantity,decreaseCartQuantity,removeFromCart}}>{children}</StoreContext.Provider>
}