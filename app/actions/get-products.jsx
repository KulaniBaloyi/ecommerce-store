
import { prisma } from "@/lib/db";

const getProducts = async (adidas, nike, puma, converse, vans) => {
  const brandFilters = [];

  if (adidas) brandFilters.push('Adidas');
  if (nike) brandFilters.push('Nike');
  if (puma) brandFilters.push('Puma');
  if (converse) brandFilters.push('Converse');
  if (vans) brandFilters.push('Vans');

  const res = await prisma.product.findMany({
    where: {
      brand: {
        in: brandFilters,
      },
    },
  })

  return res;
};

export default getProducts