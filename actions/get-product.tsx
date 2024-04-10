const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string) => {
  const res = await fetch(`${URL}/${id}`)

  if(!res.ok){
    throw new Error(`Failed to fetch individual product: ${res.statusText}`)

  }
  const data = await res.json()

  return data
};

export default getProduct;