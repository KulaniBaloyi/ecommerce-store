const user = {
  name: "user",
  title: "Users",
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
    // {
    //   name: "orders",
    //   title: "Orders",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "order" }], 
    //     },
    //   ],
    // },
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

  
  export default user;