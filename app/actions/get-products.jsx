
import { prisma } from '../lib/db'

const getProducts = async() => {
    const res = await prisma.product.findMany()
  return res
}

export default getProducts