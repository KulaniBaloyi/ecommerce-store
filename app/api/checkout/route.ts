import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { urlFor } from "@/ecommerce-store/schemas/lib/sanity-utils";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;

    const updatedItems = await Promise.all(
      items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "zar",
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [urlFor(item.image).url()],
          },
        },
      }))
    );
    //console.log("updated items: ", updatedItems);
  
    

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
    });
const dataSession = await session
    console.log("session: ",dataSession)
    return NextResponse.json({
      message: "Connection is alive",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
};