import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const MY_DOMAIN = 'http://localhost:3000';


export async function POST(req) {
  const { data } = await req.json();
 const { amount } = data;
  try{
     const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1OvOl5Cdm1NaM97mg7g42dTb',
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_types:["card"],
    success_url: `${MY_DOMAIN}/success`,
    cancel_url: `${MY_DOMAIN}/cancel`,
  });

 return NextResponse.json({session:session})


  }catch(err){
    console.log(err)
  }
}
// export async function POST(req) {
//   //const user= await currenUser()
//   // if(!user){
//   //   return NextResponse.json("unauthorized",{status: 401});
//   // }
//   const { data } = await req.json();
//   const { amount } = data;
//   console.log(amount)
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Number(amount) * 100,
//       currency: "ZAR",
//     });

//     //console.log(paymentIntent)

//     return NextResponse.json({intent:paymentIntent?.client_secret, status: 200 });
//   } catch (error) {
//     return NextResponse.json({status: 400});
//   }
// }