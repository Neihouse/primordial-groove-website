import { CollectionConfig } from "payload/types";
import adminsOrOrganizers from "../../../../../src/payload/access/adminsOrOrganizers";

const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: adminsOrOrganizers,
    read: () => true,
    update: adminsOrOrganizers,
    delete: adminsOrOrganizers,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "date", type: "date", required: true },
    { name: "location", type: "text", required: true },
    { name: "description", type: "richText" },
    {
      name: "lineup",
      type: "relationship",
      relationTo: "artists",
      hasMany: true,
    },
    {
      name: "media",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
    },
    { name: "ticketLink", type: "text" },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        {
          name: "metaImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

export default Events;
