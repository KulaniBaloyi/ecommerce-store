import { NextResponse } from "next/server"
import { prisma } from "@/app/lib/db"
export async function GET() {
    const cartItems = await prisma.cart.findFirst({
      include:{
        products:true
      }
    })
    
 
  return NextResponse.json(cartItems)
 
}

export async function POST(request) {
  try {
    const { id } = await request.json();

    // Check if the product exists
    const product = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    // Find the user's active cart
    let cart = await prisma.cart.findFirst({
      where: {
        products: {
          some: {
            id: id,
          },
        },
      },
      include: { products: true },
    });

    if (!cart) {
      // If no active cart exists, create a new cart
      cart = await prisma.cart.create({
        data: {
          products: {
            connect: { id: id },
          },
        },
        include: { products: true },
      });
    }

    return new Response(JSON.stringify(cart), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

