import { getOrders } from "@/app/lib/actions/actions";
import { getOneOrder } from "@/app/lib/actions/actions";

import { auth } from "@clerk/nextjs";
import Image from "next/image";

const OrderDetail = async ({params}) => {
 
  const order = await getOneOrder(params.orderID);
  console.log("order: ",order)
  const {orderDetails,customer}= order

  const {_id,customerClerkId,products,totalAmount,createdAt} = orderDetails
  const {clerkId,name,email,orders,updatedAt}= customer
console.log("products: ", products)




  
  return (
    <div className="px-10 py-5 max-sm:px-3 mt-20">
      <p className="text-heading3-bold my-10">Your Orders</p>
      <p>Order details</p>
     <ul className="flex flex-col gap-5">
      <li>id: {_id}</li>
      <li>customerClerkId {customerClerkId}</li>
      <li>totalAmount: {totalAmount}</li>
      <li>createdAt {createdAt}</li>
      <li>{products.map((p)=>{
        <div>
          <p>name: {p.product.title}</p>
          <p>Descriotion: {p.description}</p>
          <p>Quantity: {p.quantity}</p>
          <p>Price: {p.price}</p>
          <p>Color: {p.color}</p>
        </div>
      })}</li>
     </ul>
      {!order ||
        (order.length === 0 && (
          <p className="text-body-bold my-5">You have no orders yet.</p>
        ))}

     </div>
  );
};

export default OrderDetail;

export const dynamic = "force-dynamic";