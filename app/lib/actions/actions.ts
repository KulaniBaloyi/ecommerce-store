import qs from "query-string"

interface Query{
  categoryId?: string
  colorId?:string
  sizeId?:string
  isFeatured?:boolean
}

const URL =`http://localhost:3000/api/1ede9d0b-58c3-46b9-b01c-7fc205cbaaa4/products`


  
  export const getProducts = async (query:Query) => {
   
    const url = qs.stringifyUrl({
     url:URL,
     query:{
       colorId:query.colorId,
       sizeId:query.sizeId,
       categoryId: query.categoryId,
       isFeatured: query.isFeatured
     }
   
    })
    
    const res = await fetch(url)
    return res.json()
  }
  
  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`http://localhost:3000/api/1ede9d0b-58c3-46b9-b01c-7fc205cbaaa4/products/${productId}`)
  
    return await product.json()
  }
  
  export const getSearchedProducts = async (query: string) => {
    const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
    return await searchedProducts.json()
  }
  
  export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
    return await orders.json()
  }

  export const getOneOrder = async (orderId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`)
    return await orders.json()
  }
  
  
  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    return await relatedProducts.json()
  }