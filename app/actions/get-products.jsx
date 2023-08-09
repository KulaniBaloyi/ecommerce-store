
import { prisma } from '../lib/db'

const getProducts = async(query) => {
    const res = await prisma.product.findMany({
      where:{brand:query}
    })
  return res
}

export default getProducts