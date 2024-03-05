const order = {
    name: "order",
    title: "Orders",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
       
      },
      {
        name: "email",
        title: "Email",
        type: "string",
       
      },
      {
        name: "qty",
        title: "Qty",
        type: "number",
       
      },
      {
        name: "price",
        title: "Price",
        type: "number",
       
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
        },
        readOnly: true,
      }
      ,{
        name: "paid",
        title: "Paid",
        type: "boolean",
       
      },{
        name: "delivered",
        title: "Delivered",
        type: "boolean",
       
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
    },
  };
  
  export default order;
  