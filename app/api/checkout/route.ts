import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { urlFor } from "@/ecommerce-store/schemas/lib/sanity-utils";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export const POST = async (request: NextRequest) => {

 
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  

  try {
    const reqBody = await request.json();
    //destructure request params
    const { items, email } = await reqBody;

    if (!items || !email) {
      return new NextResponse("Not enough data to checkout", { status: 400 });
    }

    //create a cart array for stripe
    const updatedItems = await items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "zar",
          unit_amount: item.price * 100,
          product_data: {
            name: `${item.name}`,
            metadata:{
              productId:item._id,
            },
            description: item.description,
            images: [urlFor(item.image).url()],
            
          },
        },
      }))

      if(!updatedItems)return NextResponse.json("Error failed to update items into a stripe format")

    //create a stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
     line_items: updatedItems,
      mode: "payment",
      success_url:
        "http://localhost:3000/success?session_id={CHECHOUT_SESSION_ID}",
      cancel_url: `http://localhost:3000/cancel`,
      metadata: {
        email,
      },
    })

    if(!session)return NextResponse.json("Error failed to create session")

//const dataSession = await session
    //console.log("session: ",dataSession)
    return NextResponse.json(session, { headers: corsHeaders });
  } catch (error: any) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};