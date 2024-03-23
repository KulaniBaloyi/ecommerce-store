import { client } from "@/ecommerce-store/schemas/lib/sanity-utils";
import { NextResponse,NextRequest } from "next/server";
import { Stripe } from "stripe";
import { groq } from "next-sanity";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;


export const POST = async (req: NextRequest) => {
  try {
    const rawBody = await req.text()
    const signature = req.headers.get("Stripe-Signature") as string

    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
     webhookSecret
    )

    if (event.type === "checkout.session.completed") {
      const session = event.data.object

      // const customerInfo = {
      //   clerkId: session?.client_reference_id,
      //   name: session?.customer_details?.name,
      //   email: session?.customer_details?.email,
      // }

      // const shippingAddress = {
      //   street: session?.shipping_details?.address?.line1,
      //   city: session?.shipping_details?.address?.city,
      //   state: session?.shipping_details?.address?.state,
      //   postalCode: session?.shipping_details?.address?.postal_code,
      //   country: session?.shipping_details?.address?.country,
      // }

      const retrieveSession = await stripe.checkout.sessions.retrieve(
        session.id,
        { expand: ["line_items"]}
      )
      console.log("expanded_session: ", retrieveSession)
      //This is where id make updates to my database or CMS

   

  


    }

    return new NextResponse("Order created", { status: 200 })
  } catch (err) {
    console.log("[webhooks_POST]", err)
    return new NextResponse("Failed to create the order", { status: 500 })
  }
}