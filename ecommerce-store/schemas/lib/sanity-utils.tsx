import { createClient, groq } from "next-sanity";

// Type definitions for the Sanity client and query results
type SanityClient = ReturnType<typeof createClient>;


type Product = {
  _id: string;
  createdAt: string;
  name: string;
  slug: { current: string };
  description: string;
  price: number;
  image: { asset: { url: string } };
};

type User = {
  name: string;
  email: string
};


type Order= {
 // _id: string; // Inferred type based on Sanity document schema
  email: string; // Assuming you have an "email" property in your "order" document
  orderItems: CartItem[]; // Assuming you have an "items" array of nested "orderItem" documents
  total: number;
  createdAt: Date; // Assuming you have a "createdAt" date-time property
  // ... other properties specific to your "order" document
}
type CartItem= {
  _key: string; // Inferred type based on Sanity document schema
  productId: string; // Assuming you have a "productId" reference to another document
  name: string;
  quantity: number;
  price: number;
  description:string;
  // ... other properties specific to your "orderItem" documents
}

type Cart = CartItem[];


export const client: SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  title: process.env.SANITY_TITLE,
  apiVersion: "2023-11-21",
  token:process.env.SANITY_TOKEN_2,
  useCdn: false,
});

//first we create a user
export async function createUser(userData: User): Promise<any> {
  const { name, email } = userData;

  // Add any additional validation or data preparation here

  try {
    // Create a new user document
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      createdAt: new Date().toISOString(),
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    // Handle the error gracefully, e.g., return an error object or throw a specific error

    // Example: Throw a custom error with more information
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

// Function to get orders by email and sort by the latest
export async function getOrdersByEmail(email:string):Promise<Order[]> {
  try {
    // Query orders from Sanity with a GROQ query
    const orders = await client.fetch(
      `*[_type == 'order' && email == $email] | order(createdAt desc)`,
      { email }
    );

    // Return the sorted orders
    return orders;
  } catch (error:any) {
    // Handle errors appropriately
    console.error('Error getting orders:', error.message);
    throw new Error('Failed to get orders');
  }
}

export async function createOrder(email:string,cart:Cart):Promise<Order> {
  console.log(email,cart);
  try {
    // Create an array to store the promises for creating each order
    const orderCreationPromises: Promise<Order>[] = [];

    // Iterate over the orderDataArray and create a promise for each order
    cart.forEach((orderData:CartItem) => {
      // Extract order data
      const { name, quantity, price} = orderData;

      // Create a promise for creating each order
      const orderCreationPromise = client.create({
      
        _type: 'order',
        name,
        email,
        qty: quantity,
        price,
        paid: true,
        delivered: false,
   
        createdAt: new Date().toISOString(),
      });

      // Add the promise to the array
      orderCreationPromises.push(orderCreationPromise);
    });

    // Wait for all order creation promises to resolve
    const createdOrders = await Promise.all(orderCreationPromises);

    // Return the created orders
    return createdOrders;
  } catch (error:any) {
    // Handle errors appropriately
    console.error('Error creating order:', error.message);
    throw new Error('Failed to create order');
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
    }`,
    { slug }
  );
}

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
    }`
  );
}

export async function getVideos(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "video"]{
      name,
      "video":video.asset->url
    }`
  );
}

