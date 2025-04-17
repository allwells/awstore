import { defineType, defineField } from "sanity";
import { MdAnnouncement } from "react-icons/md";
import { ComponentType } from "react";

export default defineType({
  name: "promo",
  title: "Promo Bar",
  type: "document",
  icon: MdAnnouncement as ComponentType,
  fields: [
    defineField({
      name: "text",
      title: "Promo Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      text: "text",
      active: "active",
    },
    prepare(selection) {
      const { text, active } = selection;
      return {
        title: text,
        subtitle: active ? "Active" : "Inactive",
      };
    },
  },
});
