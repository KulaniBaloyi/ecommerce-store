const order = {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required().unique(), // Mark as required and unique
    },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "user" }], // Replace "customer" with your actual customer type
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }], // Replace "product" with your actual product type
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "price",
              title: "Price",
              type: "number", // Consider using a reference to the product price if it can change
            },
          ],
        },
      ],
    },
    {
      name: "subtotal",
      title: "Subtotal",
      type: "number",
     
    },
    {
      name: "tax",
      title: "Tax",
      type: "number", // You might need to configure tax calculation logic
    },
    {
      name: "shipping",
      title: "Shipping",
      type: "number", // You might need to configure shipping cost logic
    },
    {
      name: "total",
      title: "Total",
      type: "number",
      readOnly: true, // Calculated based on subtotal, tax, and shipping
    },
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
    },
    {
      name: "delivered",
      title: "Delivered",
      type: "boolean",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
}
  export default order;
  