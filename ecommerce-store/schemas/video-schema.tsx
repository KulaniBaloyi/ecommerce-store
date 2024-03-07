const video = {
    name:"video",
    title: "Videos",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
       
      },
      {
        name: "video",
        title: "Video",
        type: "file",
        options: {
          accept: "video/*",
        },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
       
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
  
  export default video;