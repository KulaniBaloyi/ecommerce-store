 "use client"
 import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js"

const Checkout = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  // const stripe = useStripe()
  // const elements = useElements()

  return (
   
    <div className='min-h-screen mt-20 px-10'>
      <h1>Checkout</h1>
      <Elements stripe={stripePromise}>
        <label className="text-lg font-semibold text-[#5b20b6]">Card Details</label>
        <CardElement className="border border-gray-200 rounded-md p-4"/>

      </Elements> 

    </div>
  )
}

export default Checkout