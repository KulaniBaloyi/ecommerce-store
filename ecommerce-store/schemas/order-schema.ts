const order = {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      //validation: (Rule) => Rule.required().unique(), // Mark as required and unique
    },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "user" }], 
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
              to: [{ type: "product" }], 
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
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
      title: "Tax Rate",
      type: "number", // You might need to configure tax calculation logic
      initialValue: 0.15, // Fixed tax rate
      readOnly: true,
    },
    {
      name: "shipping",
      title: "Shipping",
      type: "number", // You might need to configure shipping cost logic
      initialValue: 35,
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Waiting for payment", value: "waiting_for_payment" },
          { title: "Payment accepted", value: "payment_accepted" },
          { title: "Processing order", value: "processing_order" },
          { title: "Order dispatched", value: "order_dispatched" },
          { title: "Delivery completed", value: "delivery_completed" },
          { title: "Order cancelled", value: "order_cancelled" },
          { title: "Refund", value: "refund" },
        ],
        initialValue: "waiting_for_payment",
      },
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
  