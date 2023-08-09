import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db';



export async function GET(request) {
  const search_query = request.nextUrl.searchParams.get('search_query')

  // Fetch results based on query (using "contains" operator)
  const results = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search_query,
           // mode: "insensitive",
          }
        },
        {
          brand: {
            name: { contains: search_query },
           // mode: "insensitive",
          }
        },
        {
          category: {
            name: { contains: search_query },
           // mode: "insensitive"
          }
        },
      ],
    },
    include: {
      brand: true
    }
  });

  return NextResponse.json(results);
}
