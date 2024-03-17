 "use client"
 import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js"
import TestComponent from "../components/TestComponent"

//load stripe here to avoid unnecessary loading when component rerenders
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)


const Checkout = () => {
 
  // const elements = useElements()

  return (
 
      <form className="mt-20" action="/api/stripe" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
   
    // <div className='min-h-screen mt-20 px-10'>
    //   <h1>Checkout</h1>
    //   <Elements stripe={stripePromise}>
    //     <label className="text-lg font-semibold text-[#5b20b6]">Card Details</label>
    //     <TestComponent/>
    //     <CardElement options={{ hidePostalCode: true }} className="border border-gray-200 rounded-md p-4"/>

    //   </Elements> 

    // </div>
  )
}

export default Checkout