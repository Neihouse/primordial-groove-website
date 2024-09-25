import { CollectionConfig } from "payload/types";
import adminsOrOrganizers from "../../../../../src/payload/access/adminsOrOrganizers";
import artistsOrAdmins from "../../access/artistsOrAdmins";

const Artists: CollectionConfig = {
  slug: "artists",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: adminsOrOrganizers,
    read: () => true,
    update: artistsOrAdmins,
    delete: adminsOrOrganizers,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "bio", type: "richText" },
    {
      name: "genres",
      type: "array",
      fields: [{ name: "genre", type: "text" }],
    },
    {
      name: "profileImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        { name: "platform", type: "text" },
        { name: "url", type: "text" },
      ],
    },
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

export default Artists;
