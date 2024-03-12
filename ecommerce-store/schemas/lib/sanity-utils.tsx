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

export async function createOrder(email, cart) {
  // Find the user by email (replace with your user finding logic)
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error('User with email not found');
  }

  // Construct order data based on schema
  const orderData = {
    _type: 'order',
    customer: { _ref: user._id }, // Use user's _id reference
    items: cart.map((item) => ({
      _key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      product: { _ref: item._id }, // Product reference
      quantity: item.quantity,
    })),
    //subtotal: calculateSubtotal(cart), // Implement subtotal calculation logic
    subtotal:2500,
    //tax: 0.15, // Fixed tax rate (modify as needed)
    shipping: 35, // Fixed shipping cost (modify as needed)
   total:4560,
    //total: calculateTotal(cart), // Implement total calculation logic including tax and shipping
    status: 'waiting_for_payment', // Initial order status
    paid: false,
    delivered: false,
    tax:.15,
    orderNumber:"last-dance",
    createdAt: new Date().toISOString(),
  };

  try {
    const createdOrder = await client.create(orderData);
    console.log('Order created successfully:', createdOrder);
   // Update user document to add order reference
   console.log('User ID:', user._id);
   console.log('Orders array (before patch):', user.orders); // Assuming you have user data with orders

  // Update user document with the created order reference
  const patch = await client.patch(user._id)
      .setIfMissing({  // Ensure an empty object for 'orders' if missing
          orders: []
      })
      .set({ // Use an object here to specify the property to update
        orders: [...user.orders, { _ref: createdOrder._id }]
    })
    .commit();
     console.log('Patch object:', patch); // Log the constructed patch object
    return createdOrder;
  } catch (error) {
    console.error('Error creating order:', error.message);
    throw new Error('Failed to create order');
  }
}
function calculateSubtotal(cart) {
  // Implement logic to calculate subtotal based on cart items
  // This is a placeholder, replace with your actual calculation
  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += item.quantity * item.price; // Assuming 'price' exists on cart item
  });
  return subtotal;
}

function calculateTotal(cart) {
  // Implement logic to calculate total including tax and shipping
  // This is a placeholder, replace with your actual calculation
  return calculateSubtotal(cart) * (1 + 0.15) + 35;
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

async function findUserByEmail(email) {
  const query = `*[_type == "user" && email == $email][0]`; // Fetch user with matching email
  const params = { email }; // Define parameter for email

  try {
    const user = await client.fetch(query, params);
    return user; // Return user object or null if not found
  } catch (error) {
    console.error('Error finding user:', error.message);
    return null; // Indicate error or user not found
  }
}
