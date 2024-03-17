"use client"
import { useElements, useStripe } from '@stripe/react-stripe-js'


const TestComponent = () => {
    const stripe = useStripe()
    const elements = useElements()

    const cardElement = elements?.getElement("card");

    const onSubmit = async () => {
    
        const cardElement = elements?.getElement("card");
        
    
        try {
          if (!stripe || !cardElement) return null;
          const data = await fetch('http://localhost:3000/api/stripe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data:{amount: 6000} }), // Corrected nested data structure
          });
          console.log("data__:",data);
          if (!data.data?.intent) {
            throw new Error("Missing clientSecret from server response");
        }
          const res = await stripe?.confirmCardPayment(data?.data?.intent, {
            payment_method: { card: cardElement },
          });
          //console.log(res.paymentIntent.status);
          const status = res?.paymentIntent?.status;
          if (status === 'succeeded') {
            //toast.success('Payment Successful');
            // const email = user?.emailAddresses[0]?.emailAddress;
    alert("payment is successful")
            // if(email){
            //   const res = await createOrder(email,cart);
            //   if(res) {
            //   router.push("/order");
            //   }
            // }
            
          }
        } catch (error) {
          console.log("payment error ",error);
          //toast.error('Payment Failed');
          alert("payment failed")
        }
      };

    console.log("stripe instance i think: ", stripe)
    console.log("card element from stripe ithink: ", cardElement)
  return (
    <button  onClick={onSubmit} className="text-lg w-full font-semibold text-center mr-4 bg-[#5B20B6]  text-white py-2 px-4 rounded hover:text-[#5B20B6] hover:bg-white border border-[#5B20B6]">
    Checkout
  </button>  
  )
}

export default TestComponent