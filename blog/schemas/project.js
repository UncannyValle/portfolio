export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "image",
      title: "Project Screenshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "thumbImages",
    //   title: "Thumb image",
    //   type: "image",
    //   fields: [
    //     {
    //       name: "caption",
    //       type: "string",
    //       title: "Caption",
    //       options: {
    //         isHighlighted: true, // <-- make this field easily accessible
    //       },
    //     }, 
    //   ],
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
  ],
};