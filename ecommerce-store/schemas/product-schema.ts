const product = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
       
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name", // Use the "name" field as the source for generating the slug
          maxLength: 200, // Adjust the maximum length as needed
        },
       
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Allows selecting a hotspot for cropping
        },
      
      },
      {
        name: "description",
        title: "Description",
        type: "text",
       
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
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
    },
  };
  
  export default product;